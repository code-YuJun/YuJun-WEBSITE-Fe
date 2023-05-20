import axios from "axios";

const BASE_URL = "http://localhost:3000/";

const instance = axios.create({
  baseURL:BASE_URL,
  timeout: 5000,
});

export default function fetch({ api, method = "post", data = {} }) {
  return new Promise((resolve, reject) => {
      instance({ api, method, data })
          .then((res) => {
              if (res.status === 200) {
                resolve(res.data);
              } else {
                reject(res.data)
            }
          })
          .catch((error) => {
            reject(error.data);
          })
  });
}
