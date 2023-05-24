import React from "react";
import NewsLetters from "../Home/NewsLetters";
import SectionBanner from "../../utils/SectionBanner";
import banner from "../../assets/course/course-banner.png";
import CoursesTab from "./CoursesTab";
import bg from "../../assets/bg/course-bg.png";

const CoursePage = () => {
  return (
    <div>
      <SectionBanner
        bg={bg}
        route="Courses"
        content="At ipsum est viverra varius lectus et tempus arcu massa egetpretium at tellus tristique Amet euismod vel suspendisse nunc, ut ru egetpretium trum arcu egetpretium morbi"
        bannerImg={banner}
      />
      <CoursesTab/>
      <NewsLetters />
    </div>
  );
};

export default CoursePage;
