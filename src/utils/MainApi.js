const baseUrl = "https://api.my-website.nomoredomains.xyz";

function checkResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    return response.json().then((data) => {
      throw data;
    });
  }
}

export function register(name, email, password) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
  }).then(checkResponse);
}

export function login(email, password) {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then(checkResponse);
}
