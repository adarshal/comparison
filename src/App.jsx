import React, { useState } from "react";
import ImageCompare from "./ImageCompare";
import Sidebar from "./Sidebar";

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState({
    home: ["home1.png", "home2.png"],
    mng_nomination: ["mng_nomination1.png", "mng_nomination2.png"],
    awards: ["awards1.png", "awards2.png"],
    nomn_deadline: ["nomn-deadline1.png", "nomn-deadline2.png"],
    teams: ["teams1.png", "teams2.png"],
    teamsexpand: ["teamsexpand1.png", "teamsexpand2.png"],
    addteam: ["addteam1.png", "addteam2.png"],
    addmeetreport: ["addmeetreport1.png", "addmeetreport2.png"],
    viewmeetreport: ["viewmeetreport1.png", "viewmeetreport2.png"],
    viewmeetreportexpnd: ["viewmeetreportexp1.png", "viewmeetreportexp2.png"],
    teamgoalsheet: ["teamgoalsheet1.png", "teamgoalsheet2.png"],
    emp: ["emp1.png", "emp2.png"],
    empform: ["empform1.png", "empform2.png"],
    role: ["role1.png", "role2.png"],
    emproles: ["emproles1.png", "emproles2.png"],
    addemprole: ["addemprole1.png", "addemprole2.png"],
    dept: ["dept1.png", "dept2.png"],
    desgn: ["desgn1.png", "desgn2.png"],
  });

  const handleImageSelection = (imageName) => {
    setSelectedImage(imageName);
  };

  return (
    <div>
      <div className="App" style={{ display: "flex" }}>
        <div style={{ width: "15%", height: "90vh", display: "flex" }}>
          <Sidebar
            images={images}
            onSelectImage={handleImageSelection}
            selectedImage={selectedImage}
          />
        </div>
        <div style={{ width: "85%", display: "flex" }}>
          <ImageCompare images={images[selectedImage || "home"]} />
        </div>
      </div>
    </div>
  );
};

export default App;
