import React, { useState } from "react";
import HomeBanner from "../../assets/HomeBanner2.jpg";
import SeamlessCarousel from "../../components/carousel/SeamlessCarousel";
import QuotationForm from "../../components/form/QuotationForm";
import caller from "../../assets/call.png";
import Typewriter from "typewriter-effect";

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const smallHeading = "text-md text-gray-500";
  const bigHeading = "text-2xl md:text-3xl";

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div>
      <div className="relative">
        {/* Home Banner */}
        <img
          src={HomeBanner}
          alt="Home Banner"
          className="w-full h-[25rem] md:h-[50rem] object-cover"
          onLoad={handleImageLoad}
        />

        {/* EOI Div - Positioned on the bottom of the banner */}
        {imageLoaded && (
          <div className="absolute bottom-[5rem] md:bottom-[23rem] left-[2rem] md:left-[25rem] bg-black bg-opacity-50 text-white text-3xl md:text-6xl px-4 py-2">
            <a href="#contactUs">
              <Typewriter
                options={{
                  strings: ["Accepting EOI NOW!!!!"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </a>
          </div>
        )}
      </div>

      <div
        id="changeNav"
        className="px-8 md:px-24"
      >
        {/* Overview Section */}
        <section
          id="overview"
          className="pt-16 md:pt-32 pb-16 md:pb-32 px-4 md:px-10"
        >
          {/* Main Div */}
          <div>
            {/* Box 1 */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
              <p className="basis-2/3 text-2xl md:text-4xl leading-relaxed">
                New Haven Bahadurgarh, Haryana
              </p>
              <p className="text-md md:text-lg">
                Welcome to the home you've been waiting for, where life unfolds
                in a whole new way. Enjoy spacious living with stunning sunset
                views from your balcony, calming morning walks, and a wealth of
                amenities like pools, indoor games, and outdoor sports.
              </p>
            </div>

            {/* BOX 2 */}
            <div className="mt-10 md:mt-20 flex flex-col md:flex-row justify-between gap-6 md:gap-14">
              <div>
                <p className={smallHeading}>Status</p>
                <p className={bigHeading}>Bookings Open For Phase 2</p>
              </div>
              <div>
                <p className={smallHeading}>Booking amount</p>
                <div>
                  <p className={bigHeading}>2 BHK - 3 Lakhs</p>
                  <p className={bigHeading}>3 BHK - 5 Lakhs</p>
                </div>
              </div>
              <div>
                <p className={smallHeading}>Configurations</p>
                <p className={bigHeading}>1 BHK, 2 BHK, 3 BHK</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="gallery"
          className="pt-10 md:pt-20 pb-10 md:pb-20"
        >
          <SeamlessCarousel />
        </section>

        <section id="contactUs">
          <QuotationForm />
        </section>

        <div className="fixed bottom-[35rem] md:bottom-[2rem] right-[0.5rem] z-50 flex items-center">
          <a
            href="tel:+91 8920215863"
            className="flex items-center"
          >
            <img
              src={caller}
              alt="Call Us"
              className="w-10 h-10 md:w-14 md:h-14 rounded-full shadow-md mr-2"
            />
            <span className="bg-black text-white py-2 px-4 md:py-3 md:px-6 rounded-xl hover:bg-[#45a049] transition-colors duration-300">
              +91 8920215863
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
