import React, { useState } from "react";
import HomeBanner from "../../assets/HomeBanner.jpg";
import overview from "../../assets/overview.jpg";
import QuotationForm from "../../components/form/QuotationForm";

const Home = () => {
  // State to toggle the visibility of the last paragraph
  const [showLastParagraph, setShowLastParagraph] = useState(true);

  // Function to toggle the state
  const toggleParagraph = () => {
    setShowLastParagraph(!showLastParagraph);
  };

  return (
    <div>
      <div className="">
        <img
          src={HomeBanner}
          alt="Home Banner"
          className="w-full h-[48rem] object-cover"
        />
      </div>

      <div className="px-24">
        {/* Overview Section */}
        <section
          id="overview"
          className="pt-20 pb-10"
        >
          <p className="text-center text-4xl border-b-2 border- pb-4">
            A New Way Of Living
          </p>

          <p className="pt-10 text-lg mb-4">
            Welcome to New Haven at Bahadurgarh – the home you've been waiting
            for, where life unfolds in a whole new way. Enjoy spacious living
            with stunning sunset views from your balcony, calming morning walks,
            and a wealth of amenities like pools, indoor games, and outdoor
            sports. With its secure gated community and open spaces, New Haven
            offers a complete lifestyle experience.
          </p>

          {showLastParagraph && (
            <p className="text-lg mb-4">
              Phase I is already home to happy families, and now it's your turn.
              From day one, you'll feel at home, making new friends while
              enjoying top-tier amenities like jogging tracks, a meditation
              room, and more. Designed by CP Kukreja Architects, this
              eco-friendly project with 70% open spaces and rainwater harvesting
              is the perfect blend of comfort and sustainability. Make New Haven
              your new beginning!
            </p>
          )}

          <a
            onClick={toggleParagraph}
            className="font-bold text-black"
          >
            {showLastParagraph ? "Read More -" : "Read More +"}
          </a>

          <img
            src={overview}
            alt="Overview"
            className="w-full object-cover h-[33rem] mt-[1.5rem]"
          />
        </section>
      </div>
    </div>
  );
};

export default Home;
