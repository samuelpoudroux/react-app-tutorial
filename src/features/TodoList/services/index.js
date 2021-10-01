import { wait } from "../../../services";

export const getTasks = async () => {
  await wait(1000);
  const res = await fetch(`${window.location.origin}/tasks.json`);
  if (res.ok) {
    return res.json();
  }
};
