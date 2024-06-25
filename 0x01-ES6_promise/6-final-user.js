// Autor : SAID LAMGHARI
// 6-final-user.js

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((rslts) => (
      rslts.map((rslt) => ({
        status: rslt.status,
        value: rslt.status === 'fulfilled' ? rslt.value : String(rslt.reason),
      }))
    ));
}
