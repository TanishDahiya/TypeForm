import { myAxios } from "./constants";

export const signupApi = (user) => {
  return myAxios
    .post("/api/v1/auth/register", user)
    .then((response) => response.data);
};

export const signinApi = (loginData) => {
  return myAxios
    .post("/api/v1/auth/login", loginData)
    .then((response) => response.data);
};


