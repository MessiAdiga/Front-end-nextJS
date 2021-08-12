import { useState } from "react";
import Link from "next/link";

import {
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavItem = (props) => {
  return (
    <li className="text-md font-medium text-gray-600 px-2 py-1 hover:bg-green-200 rounded transition-colors duration-300">
      <a href={props.href}>{props.text}</a>
    </li>
  );
};

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <div className="text-center font-sans bg-gray-200 hover:text-red-400">
        <h1>FLASH SALE: 15% OFF EVERYTHING + FREE SHIPPING</h1>
      </div>

      <nav className="flex justify-between py-3 px-10 items-center text-center ">
        <div>
          <button
            className=" inline-flex p-3 hover:bg-green-200 rounded lg:hidden text-gary-300 ml-auto hover:text-white outline-none"
            onClick={handleClick}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div
            className={`${
              active ? "" : "hidden"
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
          >
            <div>
              <ul className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start items-center flex flex-col lg:h-auto">
                <NavItem
                  href="https://www.sheertex.com/collections/all?utm_source=google&utm_medium=cpc&utm_campaign=BoF_Search_CA_Brand&utm_content=sheertex_e&ajs_event=Ad%20Clicked&ajs_prop_ad_id=448758139150&ajs_prop_adset_id=103307756853&ajs_prop_campaign_id=10429114003&ajs_prop_placement=&ajs_prop_network=g&ajs_prop_device=c&ajs_prop_target_id=kwd-647324369746&ajs_prop_extension_id=&ajs_prop_keyword_id=sheertex&ajs_prop_physical_location=9000433&ajs_prop_landing_page=https://sheertex.com/collections/all&ajs_prop_ad_position=&ajs_prop_match_type=e&gclid=CjwKCAjwx8iIBhBwEiwA2quaq6xEKYwzzDuKr-waskL7eqyvqv6IWmQYB4Au01PIj_MId_4HWy5uGhoCk70QAvD_BwE"
                  text="TIGHTS"
                />
                <NavItem
                  href="https://www.sheertex.com/products/basketweave-semi-opaque-tights"
                  text="STOCKINGS"
                />
                <NavItem
                  href="https://www.sheertex.com/collections/all?utm_source=google&utm_medium=cpc&utm_campaign=BoF_Search_CA_Brand&utm_content=sheertex_e&ajs_event=Ad%20Clicked&ajs_prop_ad_id=448758139150&ajs_prop_adset_id=103307756853&ajs_prop_campaign_id=10429114003&ajs_prop_placement=&ajs_prop_network=g&ajs_prop_device=c&ajs_prop_target_id=kwd-647324369746&ajs_prop_extension_id=&ajs_prop_keyword_id=sheertex&ajs_prop_physical_location=9000433&ajs_prop_landing_page=https://sheertex.com/collections/all&ajs_prop_ad_position=&ajs_prop_match_type=e&gclid=CjwKCAjwx8iIBhBwEiwA2quaq6xEKYwzzDuKr-waskL7eqyvqv6IWmQYB4Au01PIj_MId_4HWy5uGhoCk70QAvD_BwE"
                  text="SOCKS & ACCESSORIES"
                />
              </ul>
            </div>
          </div>
        </div>

        <div>
          <a
            href="/"
            className="font-customBrand text-5xl font-medium text-black hover:text-opacity-30"
          >
            <p>sheertex</p>
            <p className="lg:hidden md:hidden text-lg text-black font-navLinks hover:text-opacity-100">
              Happy browsing...
            </p>
          </a>
        </div>

        <div className="pl-2 pr-2 hidden md:flex">
          <ul className="flex space-x-1 ">
            <NavItem
              href="https://www.sheertex.com/pages/knit"
              text="OUR KNIT"
            />
            <NavItem
              href="https://www.sheertex.com/pages/our-story"
              text="OUR STORY"
            />
            <NavItem text={<FontAwesomeIcon icon={faSearch} />} />
            <NavItem text={<FontAwesomeIcon icon={faShoppingCart} />} />
            <NavItem text={<FontAwesomeIcon icon={faUser} />} />
          </ul>
        </div>
      </nav>
    </div>
  );
};
