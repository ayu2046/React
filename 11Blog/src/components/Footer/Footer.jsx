import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <section
      className="relative overflow-hidden py-10 border border-t-2 border-t-black"
      style={{ backgroundColor: '#1F2937' }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          {/* Logo and Copyright */}
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                <p className="text-sm text-gray-400">
                  &copy; Copyright 2023. All Rights Reserved by DevUI.
                </p>
              </div>
            </div>
          </div>
          {/* Company Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-400">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-300 hover:text-gray-100 transition-all hover:rounded-lg hover:shadow-lg hover:shadow-gray-500 p-2"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-300 hover:text-gray-100 transition-all hover:rounded-lg hover:shadow-lg hover:shadow-gray-500 p-2"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-300 hover:text-gray-100 transition-all hover:rounded-lg hover:shadow-lg hover:shadow-gray-500 p-2"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-300 hover:text-gray-100 transition-all hover:rounded-lg hover:shadow-lg hover:shadow-gray-500 p-2"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Support Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-400">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-300 hover:text-gray-100 transition-all hover:rounded-lg hover:shadow-lg hover:shadow-gray-500 p-2"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-300 hover:text-gray-100 transition-all hover:rounded-lg hover:shadow-lg hover:shadow-gray-500 p-2"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-300 hover:text-gray-100 transition-all hover:rounded-lg hover:shadow-lg hover:shadow-gray-500 p-2"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-300 hover:text-gray-100 transition-all hover:rounded-lg hover:shadow-lg hover:shadow-gray-500 p-2"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Legal Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-400">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-300 hover:text-gray-100 transition-all hover:rounded-lg hover:shadow-lg hover:shadow-gray-500 p-2"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-300 hover:text-gray-100 transition-all hover:rounded-lg hover:shadow-lg hover:shadow-gray-500 p-2"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-300 hover:text-gray-100 transition-all hover:rounded-lg hover:shadow-lg hover:shadow-gray-500 p-2"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;