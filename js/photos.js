
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const renderPhoto = (data) => {
  const picture = photoTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src=data.url;
  picture.querySelector('.picture__likes').textContent=data.likes;
  picture.querySelector('.picture__comments').textContent=data.comments.length;
  document.querySelector('.pictures').appendChild(picture);
};

export{renderPhoto};

