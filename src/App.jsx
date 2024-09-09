import React, { useState } from "react";
import ImageCompare from "./ImageCompare";
import Sidebar from "./Sidebar";

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState({
    home: ["home1.png", "home2.png"],
    about: ["about1.png", "about2.png"],
    // ... other image pairs
  });

  const handleImageSelection = (imageName) => {
    setSelectedImage(imageName);
  };

  return (
    <div>
      <div className="App" style={{ display: "flex" }}>
        <div style={{ width: "10%", display: "flex" }}>
          <Sidebar images={images} onSelectImage={handleImageSelection} selectedImage={selectedImage} />
        </div>
        <div style={{ width: "90%", display: "flex" }}>
          <ImageCompare images={images[selectedImage || "home"]} />
        </div>
      </div>
    </div>
  );
};

export default App;
