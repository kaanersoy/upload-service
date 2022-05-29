import * as path from "path";
import * as fs from "fs";
import { getFileResized } from "../../src/helpers/getResizedFile";

jest.mock("fs");
jest.mock("path");
jest.mock("sharp", () => () => ({
  resize: jest.fn().mockReturnThis(),
  toBuffer: jest.fn(() => "someBuffer"),
}));

describe("getFileResized specs", () => {
  const fileExtension = "yes";
  const fileName = `someStr.${fileExtension}`;
  const resizeWidth = 180;

  const buffer = "someBuffer";

  it("should call function succesfully", async () => {
    (fs.readFileSync as jest.Mock).mockReturnValue(buffer);
    (path.join as jest.Mock).mockReturnValue("");

    const expectedBuffer = "someBuffer";
    const result = await getFileResized(fileName, resizeWidth);

    expect(result).toStrictEqual({
      buffer: expectedBuffer,
      fileExtension,
    });
  });
});
