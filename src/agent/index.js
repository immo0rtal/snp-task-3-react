export const getRequest = (url) => {
  return fetch(url, {
    method: "GET",
  })
    .then((response) => {
      if (response) {
        return response.json();
      }
      throw new Error("error");
    })
    .catch((error) => {
      console.error("getRequest", error);
    });
};
