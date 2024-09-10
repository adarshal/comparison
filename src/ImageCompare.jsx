import React, { useState } from 'react';

const ImageCompare = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCompareClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="image-compare">
    <div style={{marginLeft:"40%",padding:"5px"}}>
     <button onClick={handleCompareClick}>Compare</button>
     </div>
      <img src={images[currentIndex]} alt={images[currentIndex].replace(/\..+$/, '')} 
      style={{ width: '98%', height: '88%', marginLeft:"20px" }}  />
     
    </div>
  );
};

export default ImageCompare;