import http from "./httpService";
import { apiUrl } from "../../config.json";
import jwtDecode from "jwt-decode";

const tokenKey = "token";

export function getJWT() {
  return localStorage.getItem(tokenKey);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getAllAds() {
  return http.get(`${apiUrl}/users/ads`);
}

export async function toggleFavoriteAd(adId) {
  try {
    await http.patch(`${apiUrl}/users/favorite-ads/${adId}`);
    let action;

    let currentFavAd = JSON.parse(localStorage.getItem("favorites"));
    console.log(currentFavAd);

    if (currentFavAd.includes(adId)) {
      console.log("else: " + adId);
      currentFavAd = currentFavAd.filter((fav) => fav !== adId);
      action = "removed";
    } else {
      console.log("else: " + adId);
      currentFavAd.push(adId);
      action = "added";
    }

    localStorage.setItem("favorites", JSON.stringify(currentFavAd));
    return action;
  } catch (ex) {
  }
}

export function getLocalFavoriteAds() {
  return localStorage.getItem("favorites");
}

export function getMyFavoriteAds() {
  return http.get(`${apiUrl}/users/my-favorite-ads`);
}

export function getUserInfo(){
  return http.get(`${apiUrl}/users/me`);
}

export async function userLogin(email, password) {
  const { data } = await http.post(`${apiUrl}/user-auth`, { email, password });
  localStorage.setItem(tokenKey, data.token);
}

export async function bizLogin(email, password) {
  const { data } = await http.post(`${apiUrl}/biz-auth`, { email, password });
  localStorage.setItem(tokenKey, data.token);
}

const user = {
  userLogin,
  bizLogin,
  getCurrentUser,
  logout,
  getJWT,
  getAllAds,
  toggleFavoriteAd,
  getLocalFavoriteAds,
  getMyFavoriteAds,
  getUserInfo,
};

export default user;
