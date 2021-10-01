export const getListWithoutOldElement = (id, data) =>
  data.filter((e) => e.id !== id);

export const getListWithNewElement = (newData, data) => data.push(newData);
