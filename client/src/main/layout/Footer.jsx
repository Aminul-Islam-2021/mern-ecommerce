import React from "react";
import { Link } from "react-router-dom";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" mt-2 mb-14 lg:px-36 lg:mb-auto">
      <footer className="bg-gray-900 text-white font-semibold py-6  p-6 rounded-md">
        <div className="container mx-auto px-4 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Us Section */}
            <div>
              <h3 className="text-lg font-extrabold mb-4 ">About Us</h3>
              <p className="text-sm">
                We are Link leading eCommerce platform offering a wide range of
                products to cater to all your needs. Our mission is to provide
                quality products at the best prices with excellent customer
                service.
              </p>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="text-lg font-extrabold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer Service Section */}
            <div>
              <h3 className="text-lg font-extrabold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="hover:underline">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Shipping & Delivery
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Returns & Exchanges
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-extrabold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter and get updates on the latest products
              and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 text-gray-800 shadow-xl rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media and Copyright Section */}
          <div className="mt-4 border-t border-gray-700 pt-5">
            <div className=" md:flex-row justify-between ">
              {/* Social Media Icons */}
              <div className=" flex gap-6 mb-3 rounded-md p-1 items-center bg-white text-gray-900 justify-center md:w-auto">
                <Link>
                  <TiSocialFacebookCircular size={40} />
                </Link>
                <Link>
                  <FaInstagram size={30} />
                </Link>
                <Link>
                  <FaTiktok size={24} />
                </Link>
                <Link>
                  <FaXTwitter size={26} />
                </Link>
              </div>
              <p className=" font-semibold text-center pb-6">
                &copy; {new Date().getFullYear()} Your Company Name. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
