import React from "react";
import SectionBanner from "../../utils/SectionBanner";
import banner from "../../assets/contact/banner.png";
import GetTouch from "./GetTouch";
import Message from "./Message";
import bg from "../../assets/bg/contact-bg.png";

const ContactPage = () => {
  return (
    <div>
      <SectionBanner
        bg={bg}
        route="Contact"
        content="At ipsum est viverra varius lectus et tempus arcu massa egetpretium at tellus tristique Amet euismod vel suspendisse nunc, ut ru egetpretium trum arcu egetpretium morbi"
        bannerImg={banner}
      />
      <GetTouch/>
      <Message/>
    </div>
  );
};

export default ContactPage;
