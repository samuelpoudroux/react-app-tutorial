import { wait } from "../../../services";

export const getTasks = async () => {
  await wait(1000);
  const res = await fetch(`${window.location.origin}/tasks.json`);
  if (res.ok) {
    const tasks = await res.json();
    return getTasksWithAggregatedNumberPlace(tasks);
  }
};

export const getTasksWithAggregatedNumberPlace = (tasks) =>
  tasks.map((task, index) => ({ ...task, number: index + 1 }));
