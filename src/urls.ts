const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const urls = {
  api: apiUrl,

  createGame: `${apiUrl}/game/create`,
};
