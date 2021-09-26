const inputEl = document.getElementById('img-upload');
const uploadButtonEl = document.getElementById('upload-button');

const uploadFile = async (file) => {
  console.log(file);
  const formData = new FormData();
  formData.append('avatar', file);

  const response = await fetch('/upload', {
    method: 'POST',
    body: formData,
  });
  const data = await response.json();
  return data;
};

uploadButtonEl.addEventListener('click', async () => {
  const file = inputEl[0];
  const response = await uploadFile(file);
  console.log(response);
});
