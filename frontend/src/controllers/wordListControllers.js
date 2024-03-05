import { BaseURL } from "./userControllers.js";

// Get user words (In chronological order)
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

export const getUserMistakenWords = async () => {
  const response = await fetch(`${BaseURL}/api/words/mistaken`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw Error(data.error || "Failed to fetch mistaken words");
  }

  return data;
};

// Create word-translation pair
export const createWord = async (original, translation) => {
  const res = await fetch(`${BaseURL}/api/words`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ original, translation }),
  });
  const data = await res.json();

  if (!res.ok) {
    throw Error(data.error || "Failed to create word");
  }

  return data;
};

// Modify word-translation pair
export const updateWord = async (id, original, translation) => {
  const res = await fetch(`${BaseURL}/api/words/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ original, translation }),
  });
  const data = await res.json();

  if (!res.ok) {
    throw Error(data.error || "Failed to update word");
  }

  return data;
};

export const deleteWord = async (id) => {
  const response = await fetch(`${BaseURL}/api/words/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw Error(data.error || "Failed to delete word");
  }

  return data;
};

export const markWordAsMistaken = async (id) => {
  const response = await fetch(`${BaseURL}/api/words/mistaken/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw Error(data.error || "Failed to mark the word as mistaken");
  }

  return data;
};

export const markWordAsNotMistaken = async (id) => {
  const response = await fetch(`${BaseURL}/api/words/notmistaken/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw Error(data.error || "Failed to mark the word as mistaken");
  }

  return data;
};
