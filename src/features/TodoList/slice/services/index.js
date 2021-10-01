export const getListWithoutOldElement = (id, data) =>
  data.filter((e) => e.id !== id);

export const getListWithNewElement = (newData, data) => {
  const copy = data.slice();
  copy.push({ ...newData, id: data.length });
  return copy;
};
export const getListWithNewCheckedElements = ({ id, checked }, data) => {
  const copy = data.slice();
  let taskToChecked = data[id];
  const updatedTask = { ...taskToChecked, isChecked: checked };
  copy.splice(id, 1, updatedTask);
  return copy;
};
