const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = [
  'Влад', 'Олег', 'Настя', 'Лена', 'Матвей', 'Крис',
];

const getRandomInt = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

// eslint-disable-next-line no-console
console.log(getRandomInt(55, 77));

const checkStringLength = (string, limit) => {
  if (string.length <= limit) {
    return true;
  }
  return false;
};

// eslint-disable-next-line no-console
console.log(checkStringLength('string', 13));

const getMessage = () => {
  const messagesCopy = [...MESSAGES];
  const count = getRandomInt(1, 2);
  const messages = [];
  // eslint-disable-next-line id-length
  for (let i = 0; i < count; i++) {
    const index = getRandomInt(0, messagesCopy.length - 1);
    const message = messagesCopy[index];
    messages.push(message);
    messagesCopy.splice(index, 1);
  }
  return messages.join(' ');
};

const getComments = (number) => {
  const comments = [];
  // eslint-disable-next-line id-length
  for (let i = 0; i < number; i++) {
    const authorIndex = getRandomInt(0, 5);
    const comment = {
      id: getRandomInt(1, 1000),
      avatar: `img/avatar-${authorIndex + 1}.svg`,
      message: getMessage(),
      name: NAMES[authorIndex],
    };
    comments.push(comment);
  }
  return comments;
};

const getPhotos = (number) => {
  const photos = [];
  // eslint-disable-next-line id-length
  for (let i = 0; i < number; i++) {
    const index = i+1;
    const photoInfo = {
      id: index,
      url: `photos/${index}.jpg`,
      description: `Фото${index}`,
      likes: getRandomInt(15, 200),
      comments: getComments(getRandomInt(1, 3)),
    };
    photos[i] = photoInfo;
  }
  return photos;
};

getPhotos(25);
// eslint-disable-next-line no-console
console.log(getPhotos(25));
