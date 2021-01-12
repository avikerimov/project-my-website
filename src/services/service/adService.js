import http from "./httpService";
import { apiUrl } from "../../config.json";

export function deleteAd(adId) {
  return http.delete(`${apiUrl}/ads/${adId}`);
}

export function getAd(adId) {
  return http.get(`${apiUrl}/ads/${adId}`);
}

export function editAd(ad) {
  const adId = ad._id;
  delete ad._id;
  return http.put(`${apiUrl}/ads/${adId}`, ad);
}

export function getMyAds() {
  return http.get(`${apiUrl}/ads/my-ads`);
}

export function createAd(ad) {
  return http.post(`${apiUrl}/ads`, ad);
}

const service = {
  createAd,
  getMyAds,
  editAd,
  getAd,
  deleteAd,
};

export default service;
