import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d53758735a3949fca4bb86ce60616eb6",
  },
});
