/* eslint-disable import/prefer-default-export */
export function toString(date) {
  console.log('test', date);
  try {
    let today = new Date(date);
    let dd = today.getUTCDate();
    let mm = today.getUTCMonth() + 1; // January is 0!
    const yyyy = today.getUTCFullYear();

    if (dd < 10) {
      dd = `0${dd}`;
    }
    if (mm < 10) {
      mm = `0${mm}`;
    }

    today = `${yyyy}-${mm}-${dd}`;
    console.log('test', today, dd);
    return today;
  } catch (error) {
    return '';
  }
}

export default {
  toString,
};
