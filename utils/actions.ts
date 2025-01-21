"use server";

export const fetchAnmie = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );
  const data = await response.json();
  return data;
};
export const fetchAnimeItem = async ({ id }: { id: string }) => {
  const response = await fetch(`https://shikimori.one/api/animes/${id}`);
  if (!response.ok) return null;
  return response.json();
};
export const fetchAnimeItemByName = async ({ name }: { name: string }) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?search=${name}`
  );
  if (!response.ok) return null;
  return response.json();
};
