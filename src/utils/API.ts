import axios from "axios";

const websiteBaseUrlMapping = {
  //   production: "https://colors.dopely.top",
  production: "https://snappfood.ir/",
};

const baseUrl = websiteBaseUrlMapping["production"];

let defaultApi = axios.create({
  baseURL: baseUrl,
});

export function colorsList(pageNum: number) {
  return defaultApi
    .get(`${baseUrl}/api/colors/?page=${pageNum}&sort_by=popular`)
    .then((res) => res.data)
    .catch((err) => {
      return err.response !== undefined ? err.response.status : err;
    });
}

export const vendorsList = (pageNum: number, lat: number, long: number) => {
  return defaultApi
    .get(
      `${baseUrl}mobile/v3/restaurant/vendors-list?lat=${lat}&long=${long}&page=${pageNum}&page_size=10`
    )
    .then((res) => res.data)
    .catch((err) => {
      return err.response !== undefined ? err.response.status : err;
    });
};
