import React, { useState } from "react";
import Events from "./Events";

const EventTab = () => {
  const [activeMenu, setMenu] = useState(1);
  const [tab, setTab] = useState("All");
  const tabs = [
    { id: 1, name: "All" },
    { id: 2, name: "Completed" },
    { id: 3, name: "Upcoming" },
  ];
  const handleMenu = (data) => {
    setMenu(data?.id);
    setTab(data?.name);
  };
  return (
    <div>
       <div className="mb-[90px]">
        <div className="course_tab p-3 flex justify-center gap-[20px]   overflow-x-auto ">
          {tabs.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => handleMenu(tab)}
              className={`${
                activeMenu === tab?.id ? "activeTab" : "courseTab"
              }`}
            >
              {tab?.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        {activeMenu === 1 && <Events />}
        {activeMenu === 2 && <Events />}
        {activeMenu === 3 && <Events />}
      </div>
    </div>
  );
};

export default EventTab;
