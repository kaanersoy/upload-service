# Simple Upload/Storage Service

Image upload service for easy image uploading and resize images when getting them.

See TODOS in [TODOS.md](https://github.com/kaanersoy/upload-service/blob/master/TODO.md)
## Installation

### Set the environment variables

```
# for example
PORT=300 
HOST=http://example.com
```
### Install Dependencies

```
yarn install
```

### Run the project

```
yarn start
```


## Endpoints:

### Upload photo:

```js
const formData = new FormData();
// File must be a photo or something
formData.append('file', file);

const response = await fetch('/upload', {
    method: 'POST',
    body: formData,
  });
```
```js
// Example response
// Save the photo url for get photo.
{
  status: "success",
  message: "Upload is successful!",
  fileName: "XCgEl-paAjW-hKNfE9XP2BTu-67uww.png",
  url: "http://example.com/uploads/XCgEl-paAjW-hKNfE9XP2BTu-67uww.png"
}
```

### Get photo:

Do a get request to `url` field from response like:

```
GET /uploads/:photoName
```

That will return img that you uploaded.
