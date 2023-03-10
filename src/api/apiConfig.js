const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "c1b661944b322e9bff1c1acc8b8e9033",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
