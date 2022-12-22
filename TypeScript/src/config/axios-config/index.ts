import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? ""
    : "http://localhost:8000/brightmind/";

export const api = axios.create({ baseURL });
