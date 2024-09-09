import React, { useState } from 'react';

const ImageCompare = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCompareClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="image-compare">
    <div style={{marginLeft:"30%",padding:"10px"}}>
     <button onClick={handleCompareClick}>Compare</button>
     </div>
      <img src={images[currentIndex]} alt={images[currentIndex].replace(/\..+$/, '')} 
      style={{ width: '80%', height: '80%', padding:"10px" }}  />
     
    </div>
  );
};

export default ImageCompare;