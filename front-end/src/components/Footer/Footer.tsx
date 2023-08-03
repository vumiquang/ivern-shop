import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-[100px] px-2.5 lg:px-[30px]">
      <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row">
        <div className="order-2 lg:order-1 lg:flex lg:items-center">
          <p className="text-center text-gray-400 lg:text-left">
            400 University Drive Suite 200 Coral Gables,
            <br />
            FL 33134 USA
          </p>
        </div>
        <div className="order-1 lg:order-2 lg:flex lg:justify-end lg:grow">
          <ul className="flex lg:w-[300px] lg:mr-[70px]">
            <li className="flex flex-col items-center w-1/2 lg:max-w-[300px] lg:items-start">
              <ul className="footer-menu">
                <li className="mb-[20px] text-gray-400 lg:mb-[55px]">Link</li>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/shop">Shop</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </li>
            <li className="flex flex-col items-center w-1/2 lg:max-w-[300px] lg:items-start">
              <ul className="footer-menu">
                <li className="mb-[20px] text-gray-400 lg:mb-[55px]">Help</li>
                <li>
                  <Link href="#">Payment Options</Link>
                </li>
                <li>
                  <Link href="#">Returns</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policies</Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="mt-8 flex flex-col items-center mb-8 lg:grow-0 lg:mt-0 lg:items-start">
            <span className="text-gray-400 mb-5 lg:mb-[55px]">Newsletter</span>
            <div className="flex flex-wrap items-start">
              <input type="email" placeholder="Enter Your Email Address" className="outline-none border-bottom-custom mr-2.5 lg:mb-2.5"/>
              <button className="border-bottom-custom">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-[35px] pb-[38px] border-t mt-8 text-center lg:text-left">2022 Meubel House. All rights reverved</p>
     </div>
    </footer>
  );
};

export default Footer;
