import React from "react";

export const Footer = () => {
  return (
    <div>
      <div class="bg-gray-100 px-5 py-5">
        <div class="w-full mx-auto bg-gray-100 px-5 py-10 text-gray-600 mb-10">
          <div class="max-w-10xl mx-auto md:flex">
            <div class="md:w-1/4 md:flex md:flex-col bg-green-200 p-3 rounded">
              <div class="text-left w-full flex-grow md:pr-5">
                <h1 class="text-3xl font-customFooter font-semibold mb-5">
                  Get 15% off - Join our mailing list
                </h1>
                <h3 class="text-lg font-customFooter mb-5 ">
                  Be the first to get updates on special offers, product
                  launches, and insider exclusives! Don't be shy.
                </h3>
              </div>

              <div className="text-center ">
                <form className="tansform scale-30">
                  <div class="flex flex-col rounded-lg overflow-hidden sm:flex-row">
                    <input
                      class="py-3 px-4 bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100"
                      type="text"
                      name="email"
                      placeholder="Enter your email"
                    />
                    <button class="py-3 px-4 bg-gray-700 text-gray-100 font-semibold uppercase hover:bg-gray-600">
                      &gt;
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div class="md:w-3/4">
              <div class="max-w-4xl mx-auto md:flex">
                <div class="w-full md:w-1/3 md:max-w-none bg-white hover:bg-pink-100 px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-2 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
                  <div class="w-full flex-grow">
                    <h2 class="text-center text-lg font-bold uppercase mb-4">
                      About
                    </h2>

                    <ul class="text-md mb-8 text-center font-navLinks font-semibold">
                      <li class="leading-tight">
                        <i class="mdi mdi-check-bold text-lg"></i> Our Story
                      </li>
                      <li class="leading-tight">
                        <i class="mdi mdi-check-bold text-lg"></i> Our Knit
                      </li>
                      <li class="leading-tight">
                        <i class="mdi mdi-check-bold text-lg"></i> Reviews
                      </li>
                      <li class="leading-tight">
                        <i class="mdi mdi-check-bold text-lg"></i> FAQ
                      </li>
                      <li class="leading-tight">
                        <i class="mdi mdi-check-bold text-lg"></i> Careers
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="w-full md:w-1/3 md:max-w-none bg-white hover:bg-pink-100 px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-2 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
                  <div class="w-full flex-grow">
                    <h2 class="text-center text-lg font-bold uppercase mb-4">
                      Shop
                    </h2>

                    <ul class="text-md mb-8 text-center font-semibold font-navLinks">
                      <li class="leading-tight">
                        <i class="mdi mdi-check-bold text-lg"></i> Home
                      </li>
                      <li class="leading-tight">
                        <i class="mdi mdi-check-bold text-lg"></i> Shop All
                      </li>
                      <li class="leading-tight">
                        <i class="mdi mdi-check-bold text-lg"></i> Gift Card
                      </li>
                      <li class="leading-tight">
                        <i class="mdi mdi-check-bold text-lg"></i> Refer a
                        Friend
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="w-full md:w-1/3 md:max-w-none bg-white hover:bg-pink-100 px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-2 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
                  <div class="w-full flex-grow">
                    <h2 class="text-center text-lg font-bold uppercase mb-4">
                      Contact
                    </h2>

                    <ul class="text-md mb-8 text-center font-semibold font-navLinks">
                      <li class="leading-tight">
                        <i class="mdi mdi-check-bold text-lg"></i> 7471 Avenue
                        Leonard-De Vinci Montreal, QC-H2A 2P3
                      </li>
                      <li class="leading-tight">
                        <i class="mdi mdi-check-bold text-lg"></i>-
                      </li>
                      <li class="leading-tight">
                        <i class="mdi mdi-check-bold text-lg"></i> 1800-715-1658
                      </li>
                      <li class="leading-tight">
                        <i class="mdi mdi-check-bold text-lg"></i>
                        hello@sheertex.com
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="w-full md:w-1/3 md:max-w-none bg-white hover:bg-pink-100 px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-2 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
                  <div class="w-full flex-grow ">
                    <img
                      className="w-25 text-center rounded-full"
                      src="https://mk0flowerglossarlngi.kinstacdn.com/wp-content/uploads/2017/09/cosmos-flower-white.jpg"
                      alt="flower"
                    />
                    <h2 class="text-center text-lg font-bold font-navLinks uppercase mb-4 mt-4">
                      SUSTAINABLY MADE IN MONTREAL,CANADA
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" px-5 grid md:grid-cols-3 gap-2 items-center font-normal bg-gray-300 text-sm">
        <div className="m-3 w-40  text-left hidden md:block">
          <p>Currency : CAD</p>
        </div>

        <div className="m-3   items-center text-center">
          <p>&copy; 2021 Sheertex All rights reserved.</p>
          <a
            className="underline"
            href="https://www.sheertex.com/pages/terms-of-service"
          >
            TERMS
          </a>
          &nbsp;&nbsp;
          <a
            className="underline"
            href="https://www.sheertex.com/pages/privacy-policy"
          >
            PRIVACY
          </a>
        </div>

        <div className="m-3  items-center text-right hidden md:block">
          <p>
            Get in touch : &nbsp;&nbsp;
            <a
              className="underline rounded-lg p-2 hover:bg-pink-300 hover:text-pink-800"
              href="https://www.instagram.com/sheertex/?hl=en"
            >
              Instagram
            </a>
            &nbsp;&nbsp;
            <a
              className="underline rounded-lg p-2 hover:bg-blue-500 hover:text-white"
              href="https://www.facebook.com/sheertex/"
            >
              Facebook
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
