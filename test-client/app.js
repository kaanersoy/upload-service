const inputEl = document.getElementById('img-upload');
const uploadButtonEl = document.getElementById('upload-button');

const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch('/upload', {
    method: 'POST',
    body: formData,
  });
  const data = await response.json();
  return data;
};

uploadButtonEl.addEventListener('click', async () => {
  const response = await uploadFile(inputEl.files[0]);
  console.log(response);
});
