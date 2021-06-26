import {getPhotos, getComments} from './data.js';
import {renderPhoto} from './photos.js';
const photos = getPhotos(25);
// eslint-disable-next-line no-console
console.log(getComments(15));
for (let i = 0; i < photos.length; i++){
  renderPhoto(photos[i]);
}

