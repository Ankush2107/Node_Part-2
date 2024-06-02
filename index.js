const axios = require("axios").default;
// console.log(axios);

async function fetch() {
  const response = await axios
    .get("https://www.omdbapi.com/?t=harry&apikey=62af60ce")
    .then((response) => {
      console.log(response.data);
    });
}
fetch();