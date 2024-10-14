import React, { useEffect, useRef, useState } from "react";
import "./SeamlessCarousel.css";

// Import all images manually
import img1 from "../../assets/carousel/1.jpg";
import img2 from "../../assets/carousel/2.jpg";
import img3 from "../../assets/carousel/3.jpg";
import img4 from "../../assets/carousel/4.jpg";
import img5 from "../../assets/carousel/5.jpg";
import img6 from "../../assets/carousel/6.jpg";
import img7 from "../../assets/carousel/7.jpg";
import img8 from "../../assets/carousel/8.jpg";
import img9 from "../../assets/carousel/9.jpg";
import img10 from "../../assets/carousel/10.jpg";
import img11 from "../../assets/carousel/11.jpg";
import img12 from "../../assets/carousel/12.jpg";
import img13 from "../../assets/carousel/13.jpg";
import img14 from "../../assets/carousel/14.jpg";
import img15 from "../../assets/carousel/15.jpg";
import img16 from "../../assets/carousel/16.jpg";
import img17 from "../../assets/carousel/17.jpg";
import img18 from "../../assets/carousel/18.jpg";
import img19 from "../../assets/carousel/19.jpg";
import img20 from "../../assets/carousel/20.jpg";

// Array of imported images
const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
];

const SeamlessCarousel = ({ scrollSpeed = 1 }) => {
  const carouselRef = useRef(null);
  const scrollInterval = useRef(null);
  const scrollDirection = useRef(1); // 1 for left-to-right, -1 for right-to-left
  const isPaused = useRef(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const startAutoScroll = () => {
    if (scrollInterval.current) return;
    scrollInterval.current = setInterval(() => {
      if (!isPaused.current && carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

        // Adjust scroll position based on the current scroll direction
        carouselRef.current.scrollLeft += scrollSpeed * scrollDirection.current;

        // Detect if we've reached the end of the scroll container
        if (scrollLeft + clientWidth >= scrollWidth - 1) {
          // Reached the right end, reverse direction
          scrollDirection.current = -1;
        } else if (scrollLeft <= 0) {
          // Reached the left end, reverse direction
          scrollDirection.current = 1;
        }
      }
    }, 10);
  };

  const stopAutoScroll = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();

    // Cleanup on unmount
    return () => stopAutoScroll();
  }, [scrollSpeed]);

  const handleMouseEnter = () => {
    isPaused.current = true;
  };

  const handleMouseLeave = () => {
    isPaused.current = false;
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div
        className="carousel-container"
        ref={carouselRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="carousel-track">
          {images.map((image, index) => (
            <div
              key={index}
              className="carousel-item"
            >
              <img
                src={image}
                alt={`Carousel ${index + 1}`}
                className="carousel-image"
                onClick={() => handleImageClick(image)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Big Image Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span
              className="modal-close"
              onClick={handleCloseModal}
            >
              &times;
            </span>
            <img
              src={selectedImage}
              alt="Selected"
              className="modal-image"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SeamlessCarousel;
