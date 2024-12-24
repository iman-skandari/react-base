import React, { useState } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ImageCard from "./components/ImageCard/ImageCard";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ProfileCard
          name="John Doe"
          title="Frontend Developer"
          bio="Passionate about building web applications with React."
        />
        <ImageCard
          name="Niki Doe"
          title="Photographer"
          bio="Photography is 
          the art of capturing moments
           and expressing emotions through images.
            This profession requires not only technical
             skills such as mastery of the camera and
              lighting, but also creativity and a unique
               vision to capture the beauty of life."
        />
      </div>
    </>
  );
};

export default App;