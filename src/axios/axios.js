import axios from "axios";

export default axios.create({
  //baseURL: "http://localhost:3306/api",
  baseURL: "http://cms.danfreedesign.com:3306/api",
});