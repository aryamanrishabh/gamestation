const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const urls = {
  api: apiUrl,

  getGameDetails: `${apiUrl}/game`,
  createGame: `${apiUrl}/game/create`,
};
