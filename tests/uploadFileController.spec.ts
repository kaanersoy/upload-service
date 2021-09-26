import faker from 'faker';
import { UPLOAD_FILE_FIELD } from '../src/constants';
import { uploadFileController } from '../src/controllers/uploadFileController';

describe('uploadFileController specs', () => {
  let request;

  const response = {
    send: jest.fn(() => response),
    status: jest.fn(() => response),
  };

  beforeEach(() => {
    request = {
      file: {
        filename: faker.random.word(),
      },
    };
  });

  it('should handle file upload if request success', () => {
    uploadFileController(request, response);
    expect(response.send).toBeCalledWith({
      status: 'success',
      message: 'Upload is succesfull!',
      fileName: request.file.filename,
    });
  });

  it('should handle file upload if request unsuccess', () => {
    delete request.file;
    uploadFileController(request, response);
    expect(response.send).toBeCalledWith({ status: 'failed', message: `Your upload file field must be named: ${UPLOAD_FILE_FIELD}` });
    expect(response.status).toBeCalledWith(400);
  });
});
