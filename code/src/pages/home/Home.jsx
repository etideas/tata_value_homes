import React, { useState, useEffect } from "react";
import HomeBanner from "../../assets/HomeBanner2.jpg";
import SeamlessCarousel from "../../components/carousel/SeamlessCarousel";
import QuotationForm from "../../components/form/QuotationForm";
import PopupContactForm from "../../components/form/PopupContactForm";
import caller from "../../assets/call2.png";
import Typewriter from "typewriter-effect";
import floorPlanImage1 from "../../assets/FM1.png"; // Example image, replace with actual floor plan images
import floorPlanImage2 from "../../assets/FM2.png"; // Another example
import floorPlanImage3 from "../../assets/FM3.png"; // Another example

const Home = () => {
  const [isPopupVisible, setIsPopupVisible] = React.useState(false);
  const [hasPopupBeenShown, setHasPopupBeenShown] = React.useState(false); // Track if popup has been shown

  useEffect(() => {
    const handleScroll = () => {
      const parallaxBanner = document.getElementById("plans");
      if (parallaxBanner) {
        const bannerTop = parallaxBanner.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Check if the top of the banner is within the viewable area of the screen
        if (bannerTop <= windowHeight && bannerTop >= 0 && !hasPopupBeenShown) {
          setIsPopupVisible(true);
          setHasPopupBeenShown(true); // Mark the popup as shown
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasPopupBeenShown]); // Add hasPopupBeenShown as a dependency

  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("floorPlans"); // State for the tab selection

  const smallHeading = "text-md text-gray-500 mb-2";
  const bigHeading = "text-2xl md:text-3xl";

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const floorPlans = [
    {
      name: "B2",
      image: floorPlanImage1,
      level: "2 BHK",
      bedrooms: 2,
      toilets: 2,
      dressing: 2,
      balconies: 2,
    },
    {
      name: "B1",
      image: floorPlanImage2,
      level: "2 BHK",
      bedrooms: 2,
      toilets: 2,
      dressing: 1,
      balconies: 1,
    },
    {
      name: "A",
      image: floorPlanImage3,
      level: "3 BHK",
      bedrooms: 2,
      toilets: 2,
      dressing: 1,
      balconies: 1,
    },
  ];

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

        {/* EOI */}
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
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
            <p className="basis-2/3 text-2xl md:text-4xl leading-relaxed">
              New Haven Bahadurgarh, Haryana
            </p>
            <p className="text-md md:text-lg">
              Welcome to the home you've been waiting for, where life unfolds in
              a whole new way. Enjoy spacious living with stunning sunset views
              from your balcony, calming morning walks, and a wealth of
              amenities like pools, indoor games, and outdoor sports.
            </p>
          </div>

          {/* Box 2 */}
          <div className="mt-10 md:mt-20 flex flex-col md:flex-row justify-between gap-6 md:gap-14">
            <div>
              <p className={smallHeading}>Status</p>
              <p className={bigHeading}>Bookings Open For Phase 2</p>
            </div>
            <div>
              <p className={smallHeading}>Booking amount</p>
              <div>
                <p className={bigHeading}>2 BHK - 2 Lakhs</p>
                <p className={bigHeading}>3 BHK - 3 Lakhs</p>
              </div>
            </div>
            <div>
              <p className={smallHeading}>Configurations</p>
              <p className={bigHeading}>2 BHK, 3 BHK</p>
            </div>
          </div>
        </section>

        {/* Tabs for Floor Plans and Gallery */}
        <div
          id="plans"
          className="flex justify-center border-b"
        >
          <button
            className={`py-2 px-6 text-xl ${
              activeTab === "floorPlans"
                ? "border-b-4 border-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("floorPlans")}
          >
            Floor Plans
          </button>
          <button
            className={`py-2 px-6 text-xl ${
              activeTab === "gallery"
                ? "border-b-4 border-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("gallery")}
          >
            Gallery
          </button>
        </div>

        {/* Tab content */}
        {activeTab === "floorPlans" && (
          <section className="pt-10 md:pt-20 pb-10 md:pb-32">
            {floorPlans.map((plan, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-14 mb-10"
              >
                {/* Floor Plan Image */}
                <div className="w-full md:w-1/2">
                  <img
                    src={plan.image}
                    alt="Floor Plan"
                    className="w-full h-auto"
                  />
                </div>

                {/* Floor Plan Details */}
                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl md:text-4xl font-light mb-4">
                    {plan.name}
                  </h2>
                  <p className="text-xl mb-6">Level - {plan.level}</p>
                  <ul className="text-lg space-y-2">
                    <li>
                      <strong>Bedroom:</strong> {plan.bedrooms}
                    </li>
                    <li>
                      <strong>Toilet:</strong> {plan.toilets}
                    </li>
                    <li>
                      <strong>Dressing:</strong> {plan.dressing}
                    </li>
                    <li>
                      <strong>Balcony:</strong> {plan.balconies}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </section>
        )}

        {activeTab === "gallery" && (
          <section className="pt-10 md:pt-20 pb-10 md:pb-32">
            <SeamlessCarousel />
          </section>
        )}

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

      {isPopupVisible && (
        <PopupContactForm onClose={() => setIsPopupVisible(false)} />
      )}
    </div>
  );
};

export default Home;
