import axios from "axios";

const SERVER_URI = "http://localhost:9000/api";

export const post = async <T>(
  uriExtension: string,
  data: string,
  sessionId?: string
) =>
  await axios.post<T>(`${SERVER_URI}/${uriExtension}`, data, {
    headers: { "Content-Type": "application/json", sessionId }
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

export const get = async <T>(uriExtension: string, sessionId: string) => {
  await axios.get<T>(`${SERVER_URI}/${uriExtension}`, {
    headers: {
      sessionId
    }
  });
};

export const del = async (uriExtension: string, sessionId: string) => {
  await axios.delete(`${SERVER_URI}/${uriExtension}`, {
    headers: {
      "Content-Type": "application/json",
      sessionId
    }
  });
};

export default {
  post,
  patch,
  get,
  del
};
