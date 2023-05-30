import React, { useEffect, useRef, useState } from "react";
import SectionBanner from "../../utils/SectionBanner";
import banner from "../../assets/course/course-banner.png";
import CourseDetails from "./CourseDetails";
import bg from "../../assets/bg/course-bg.png";

const CourseDetailsPage = () => {
  const videoList = [
    { name: "Video 1", url: "https://www.youtube.com/embed/EiNiSFIPIQE" },
    { name: "Video 2", url: "https://www.youtube.com/embed/phWxA89Dy94" },
    { name: "Video 3", url: "https://www.youtube.com/embed/Kxv7GIDK9tg" },
  ];
  const [videoIndex, setVideoIndex] = useState(0);
  const videoRef = useRef(null);
  const handleVideoEnd = () => {
    setVideoIndex((prevIndex) => (prevIndex + 1) % videoList.length);
  };

  const handleSelectVideo = (index) => {
    setVideoIndex(index);
  };

  return (
    <div>
  <div className="video-page">
      <div className="video-list">
        <h3>Video List</h3>
        <ul>
          {videoList.map((video, index) => (
            <li
              key={index}
              onClick={() => handleSelectVideo(index)}
              className={videoIndex === index ? "font-bold" : ""}
            >
              {video.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="video-player">
        <h3>Video Player</h3>
        <iframe
          ref={videoRef}
          width="560"
          height="315"
          src={videoList[videoIndex].url}
          title={videoList[videoIndex].name}
          frameBorder="0"
          allowFullScreen
          onEnded={handleVideoEnd}
        ></iframe>
      </div>
    </div>

      <SectionBanner
        bg={bg}
        route="Course details"
        content="At ipsum est viverra varius lectus et tempus arcu massa egetpretium at tellus tristique Amet euismod vel suspendisse nunc, ut ru egetpretium trum arcu egetpretium morbi"
        bannerImg={banner}
      />
      <CourseDetails />
    </div>
  );
};

export default CourseDetailsPage;
