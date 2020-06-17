import axios from "axios";

const apiBrazil = axios.create({
  baseURL: "https://covid19-brazil-api.now.sh/api/report/v1",
});

export default apiBrazil;
