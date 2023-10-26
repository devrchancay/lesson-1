const BASE_URL = "https://swapi.dev/api";

export const fetchResource = async (url: string) => {
  const res = await fetch(`${BASE_URL}${url}`);
  const data = await res.json();
  return data;
};
