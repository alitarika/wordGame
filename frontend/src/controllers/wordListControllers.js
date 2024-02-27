import { BaseURL } from "./userControllers.js";

// Get user words
export const getUserWordList = async () => {
  const res = await fetch(`${BaseURL}/api/words`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const data = await res.json();

  if (!res.ok) {
    throw Error(data.error);
  }

  return data;
};
