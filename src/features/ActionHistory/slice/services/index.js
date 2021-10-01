export const addAction = ({ actionType, task }, data) => {
  console.log("actionType", actionType);
  const copy = data.slice();
  const newAction = {
    date: new Date(),
    actionType,
    ...task,
  };
  copy.push(newAction);
  return copy;
};
