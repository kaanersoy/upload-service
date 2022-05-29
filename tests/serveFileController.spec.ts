import faker from "faker";
import { serveFileControllerWithResize } from "../src/controllers/serveFileController";
import * as helpers from "../src/helpers/getResizedFile";

describe("serveFileControllerWithResize specs", () => {
  let request;
  const setHeaderSpy = jest.fn().mockReturnThis();
  const sendSpy = jest.fn().mockReturnThis();
  const getFileResizedSpy = jest.spyOn(helpers, "getFileResized");

  const response = {
    send: sendSpy,
    setHeader: setHeaderSpy,
  };
  const fileName = faker.random.word();
  const resize = faker.datatype.number();

  beforeEach(() => {
    request = {
      params: {
        fileName,
      },
      query: {
        resize,
      },
    };
  });

  it("should call getFileResizedSpy and send file", async () => {
    const fileExtension = "someString";
    const buffer = "someString" as unknown as Buffer;

    getFileResizedSpy.mockResolvedValue({ buffer, fileExtension });

    await serveFileControllerWithResize(request, response);

    expect(getFileResizedSpy).toHaveBeenCalledWith(fileName, resize);
    expect(setHeaderSpy).toHaveBeenCalledWith("Content-Type", `image/${fileExtension}`);
    expect(sendSpy).toHaveBeenCalledWith(buffer);
  });

  it("should call getFileResizedSpy with undefined with if not send resize", async () => {
    const fileExtension = "someString";
    const buffer = "someString" as unknown as Buffer;
    delete request.query.resize;

    getFileResizedSpy.mockResolvedValue({ buffer, fileExtension });

    await serveFileControllerWithResize(request, response);

    expect(getFileResizedSpy).toHaveBeenCalledWith(fileName, undefined);
  });
});
