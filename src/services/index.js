export const wait = (delay) =>
  new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve();
    }, delay);
  });
