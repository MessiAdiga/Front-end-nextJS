import React from "react";
import { faBox, faSocks, faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
  return (
    <div
      className="max-w-sm bg-gray-200 border-2 border-gray-300 p-6 rounded-lg tracking-wide shadow-lg
    hover:bg-green-300 transform hover:-translate-y-1 hover:scale-110 hover:text-white"
    >
      <div id="header" className="flex items-center mb-4">
        <FontAwesomeIcon
          className="fa-5x w-20 rounded-full"
          icon={props.icon}
        />
        <div id="header-text" className="leading-5 ml-6 sm">
          <h4 id="name" className="text-lg font-semibold font-customTitle">
            {props.title}
          </h4>
        </div>
      </div>
      <div>
        <p className="text-gray-600 font-navLinks">{props.description}</p>
      </div>
    </div>
  );
};

export const Layout = () => {
  return (
    <div className="bg-layout-pattern">
      <div className="grid md:grid-cols-3 gap-4 text-center p-20 lg:p-40 space-x-3">
        <Card
          icon={faBox}
          title="FREE SHIPPING"
          description="Same day shipping is included on all orders"
        />
        <Card
          icon={faSocks}
          title="30-DAY GUARANTEE"
          description="Covers any damage that renders your tights unwearable"
        />
        <Card
          icon={faDumbbell}
          title="STRENGTH TESTED"
          description="Rated 5 stars by thousands of happy customers."
        />
      </div>
    </div>
  );
};
