import axios from "axios";

const SERVER_URI = "http://localhost:9000/api";

export const post = async <T>(uriExtension: string, data: string) =>
  await axios.post<T>(`${SERVER_URI}/${uriExtension}`, data, {
    headers: { "Content-Type": "application/json" }
  });

export const patch = async <T>(
  uriExtension: string,
  data: string,
  sessionId: string
) =>
  await axios.patch<T>(`${SERVER_URI}/${uriExtension}`, data, {
    headers: {
      "Content-Type": "application/json",
      sessionId
    }
  });

export default {
  post,
  patch
};
