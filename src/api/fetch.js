import axios from "axios";

const BASE_URL = "";

const instance = axios.create({
  baseURL: PRODUCT_URL,
  timeout: 5000,
});

export default function fetch({ api, method = "post", data = {} }) {
  return new Promise((resolve, reject) => {
      instance({ api, method, data })
          .then((res) => {
              if (res.data.code === 200) {
                resolve(res.data.data);
              } else {
                reject(res.data)
            }
          })
          .catch((error) => {
            reject(error.data);
          })
  });
}
