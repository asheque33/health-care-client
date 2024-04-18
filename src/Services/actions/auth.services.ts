import { authKey } from "@/constants/authKey";
import { decodeToken } from "@/utils/jwt-decode";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utils/local-storage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken);
};
export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decodedData = decodeToken(authToken);
    return {
      ...decodedData,
      role: decodedData?.role?.toLowerCase(),
    };
  }
};
export const removeUser = () => {
  return removeFromLocalStorage(authKey);
};
// If the user is logged in or not....
export const isUserLoggedIn = (key: string) => {
  const authToken = getFromLocalStorage(key);
  if (authToken) {
    return !!authToken;
  }
};
