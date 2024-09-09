import React from 'react';

const Sidebar = ({ images, onSelectImage,selectedImage }) => {
    if(!selectedImage){
        selectedImage="home"
    }
  return (
    <div className="sidebar">
      {Object.keys(images).map((key) => (
        <button key={key} onClick={() => onSelectImage(key)}
        className={key === selectedImage ? 'selected' : ''}>
          {key}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;