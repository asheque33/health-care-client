const { jwtDecode } = require("jwt-decode");

export const decodeToken = (token: string) => {
  return jwtDecode(token);
};
