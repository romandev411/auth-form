import queryString from 'query-string';
const baseURL = 'http://localhost:5000';

export const createUser = data => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token, Origin',
    },
    body: JSON.stringify(data),
  };

  return fetch(`${baseURL}/signup`, options).then(data => {
    return data.json();
  });
};

export const getUser = data => {
  const query = queryString.stringify(data);

  return fetch(`${baseURL}/signin?${query}`).then(data => {
    return data.json();
  });
};
