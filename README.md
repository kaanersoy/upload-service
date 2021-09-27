# Upload/Storage API with Express & TypeScript

Easy to use upload & storage API with Express and TypeScript.

Also allows the [resize 👇](https://github.com/kaanersoy/upload-service#get-photo)

![how-to-use](https://media.giphy.com/media/FcpS66f3iL4yJbAAqh/giphy.gif?cid=790b7611572e23c2c4fbdc09639c7a796a5dfb947ced03d5&rid=giphy.gif&ct=g)


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

Also you can get resized images with `resize` query param.

Example:
```
// This will gave you a 1000px width resized image.
GET /uploads/:photoName?resize=1000
```


## LICENSE
See LICENSE at: [LICENSE.md](https://github.com/kaanersoy/upload-service/blob/master/LICENSE)