import fetch from "./axios-config";

export function getTopBanner() {
  return fetch.post("/banner");
}
export function getHotRecommend() {
  return fetch.post("/personalized");
}
export function getNewAlbum(data) {
  return fetch.post("/album/new", data);
}
export function getTopList(data) {
  return fetch.post("/playlist/detail", data);
}
export function getArtistList(data) {
  return fetch.post("/artist/list", data);
}
export function getArtistInfo(data) {
  return fetch.get(`/ugc/artist/get?id=${data}`);
}
export function getTopDj(data) {
  return fetch.post("/dj/toplist/popular", data);
}
