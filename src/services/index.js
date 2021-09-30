export const getTasks = async () => {
  const res = await fetch("tasks.json");
  if (res.ok) {
    return res.json();
  }
};
