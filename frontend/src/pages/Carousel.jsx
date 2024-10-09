import React, { useState } from 'react';
import '../stylesheets/Carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const CustomCarousel = ({ media = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (media.length === 0) {
        return <div className="custom-carousel-container">No media available</div>;
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
    };

    return (
        <div className="custom-carousel-container">
            {media[currentIndex].type === 'image' ? (
                <img
                    src={media[currentIndex].src}
                    alt="Carousel"
                    className="custom-carousel-image"
                />
            ) : (
                <video
                    src={media[currentIndex].src}
                    className="custom-carousel-video"
                    controls
                />
            )}
            <button className="custom-carousel-btn custom-carousel-btn-prev" onClick={handlePrev} aria-label="Previous">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="custom-carousel-btn custom-carousel-btn-next" onClick={handleNext} aria-label="Next">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
};

export default CustomCarousel;