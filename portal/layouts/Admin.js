import React from "react";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import Footer from "components/Footers/Footer.js";

export default function Admin({ children }) {
  return (
    <>
      <div className="bg-pink-500">
        {/* Header */}
        {/* <AdminNavbar /> */}
        <AdminNavbar />
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
