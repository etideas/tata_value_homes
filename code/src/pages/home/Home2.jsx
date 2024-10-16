import React, { useState } from "react";
import HomeBanner from "../../assets/HomeBanner2.jpg";
import SeamlessCarousel from "../../components/carousel/SeamlessCarousel";
import QuotationForm from "../../components/form/QuotationForm";
import caller from "../../assets/call.png";
import Typewriter from "typewriter-effect";

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const smallHeading = "text-md text-gray-500 mb-2";
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

              {/* Configurations Section */}
              <div>
                <p className={smallHeading}>Configurations</p>
                <div className="flex flex-col space-y-4">
                  {/* 2 BHK */}
                  <div className="relative group">
                    <p className={bigHeading}>2 BHK</p>
                    <p className="absolute left-0 top-full mt-1 text-gray-500 hidden group-hover:block">
                      3 Lakhs
                    </p>
                  </div>
                  {/* 3 BHK */}
                  <div className="relative group">
                    <p className={bigHeading}>3 BHK</p>
                    <p className="absolute left-0 top-full mt-1 text-gray-500 hidden group-hover:block">
                      5 Lakhs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="gallery"
          className="pt-10 md:pt-20 pb-10 md:pb-32"
        >
          <h1 className="text-2xl md:text-4xl font-light mb-8 md:mb-10 text-center">
            Gallery
          </h1>
          <SeamlessCarousel />
        </section>

        <section className="mb-10  md:mb-32">
          <h1 className="text-2xl md:text-4xl font-light mb-6 md:mb-8 text-center">
            Location
          </h1>

          <div className="overflow-hidden resize-none max-w-full w-[1400px] h-[400px]">
            <div
              id="google-maps-canvas"
              className="h-full w-full"
            >
              <iframe
                title="Google Map"
                className="h-full w-full border-0"
                frameBorder="0"
                src="https://www.google.com/maps/embed/v1/place?q=new+haven+bahadurghar&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section id="contactUs">
          <QuotationForm />
        </section>

        <div className="fixed bottom-[35rem] md:bottom-[2rem] right-[0.5rem] z-50 flex items-center">
          <a
            href="tel:+91 8920215863"
            className="flex items-center group"
          >
            <img
              src={caller}
              alt="Call Us"
              className="w-10 h-10 md:w-14 md:h-14 rounded-full shadow-md mr-2"
            />
            <span className="hidden group-hover:block bg-black text-white py-2 px-4 md:py-3 md:px-6 rounded-xl hover:bg-[#a71ad6] transition-all duration-300">
              +91 8920215863
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
