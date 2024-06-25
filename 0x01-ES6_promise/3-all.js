// Autor: SAID LAMGHARI
// 3-all.js

import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photResp, usrResp]) => {
      const { body: photoBody } = photResp;
      const { firstName, lastName } = usrResp;

      console.log(`${photoBody} ${firstName} ${lastName}`);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}
