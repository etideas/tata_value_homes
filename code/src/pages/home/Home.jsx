import React from "react";
import HomeBanner from "../../assets/HomeBanner2.jpg";

const Home = () => {
  return (
    <div>
      <img
        src={HomeBanner}
        alt="Home Banner"
        className="w-full h-[48rem] object-cover"
      />
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
