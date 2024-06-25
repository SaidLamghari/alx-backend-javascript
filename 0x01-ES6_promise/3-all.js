// Autor: SAID LAMGHARI
// 3-all.js
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((rslts) => {
      console.log(`${rslts[0].body} ${rslts[1].firstName} ${rslts[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
