import { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const search = await searchImages(term);
    setImages(search);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}
export default App;
