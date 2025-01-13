import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7cca0161e81e42b38964ec0a92b85f18",
  },
});
