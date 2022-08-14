import axios from "axios";
import { store } from "../store";
import { setLoading } from "../store/reducers/common";

const BASE_URL = "https://epilog.thecodingbuzz.com/";
export const callApi = ({
  path = "",
  method = "GET",
  url = null,
  body = null,
  isForm = false,
  token = null,
}) => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

  var headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  if (isForm) {
    headers = {};
  }
  let options = {
    method,
  };
  if (token) headers["authorization"] = "Bearer " + token;

  options.headers = headers;
  // if (body) options.body = JSON.stringify(body)
  if (body) options.data = body;

  let urlString = BASE_URL + path;
  if (url) {
    urlString = url;
  }
  options.url = urlString;

  store.dispatch(setLoading(true));
  return axios(options)
    .then((res) => {
      store.dispatch(setLoading(false));
      if (res.status === 500)
        return { success: false, status: 500, message: res.statusText };
      if (res.status === 401)
        return { success: false, status: 401, message: res.statusText };
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      store.dispatch(setLoading(false));
      return { success: false, status: 500, message: err.message };
    });
};
