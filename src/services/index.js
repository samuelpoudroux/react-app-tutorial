export const wait = (delay) =>
  new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve();
    }, delay);
  });

export const formatDate = (date) => {
  const hours = date.getHours();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const day = date.getDate();
  return `le ${day}/${month}/${year} à ${hours}h`;
};
