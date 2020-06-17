import axios from "axios";

const apiSummary = axios.create({
  baseURL: "https://api.covid19api.com/",
});

export default apiSummary;
