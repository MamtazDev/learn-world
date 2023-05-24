import React from "react";
import SectionBanner from "../../utils/SectionBanner";
import banner from "../../assets/event/banner.png";
import EventDetails from "./EventDetails";
import bg from "../../assets/bg/event-bg.png";

const EventDetailsPage = () => {
  return (
    <div>
      <SectionBanner
        bg={bg}
        route="Event Details"
        content="At ipsum est viverra varius lectus et tempus arcu massa egetpretium at tellus tristique Amet euismod vel suspendisse nunc, ut ru egetpretium trum arcu egetpretium morbi"
        bannerImg={banner}
      />
      <EventDetails />
    </div>
  );
};

export default EventDetailsPage;
