import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos/", {
    headers: {
      Authorization: "Client-ID _EyLOjwlDWdBoUwFZlvYnJ6-5DY4bmhLuFozPESsMU0",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};
export default searchImages;