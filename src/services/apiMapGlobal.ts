import axios from "axios";

const apiMapGlobal = axios.create({
  baseURL: "https://corona.lmao.ninja/v2/",
});

export default apiMapGlobal;
