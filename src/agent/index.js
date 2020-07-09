export const getRequest = (url) => {
  return fetch(url, {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("error");
    })
    .catch((error) => {
      console.error("getRequest", error);
    });
};

export const postRequest = (url, body = {}) => {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("error");
    })
    .catch((error) => {
      console.error("postRequest", error);
    });
};

export const deleteRequest = (url, body = {}) => {
  return fetch(url, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("error");
      }
    })
    .catch((error) => {
      console.error("deleteRequest", error);
    });
};

export const putRequest = (url, body = {}) => {
  return fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch((error) => {
      console.error("deleteRequest", error);
    });
};
