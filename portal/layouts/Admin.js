import React from "react";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import Footer from "components/Footers/Footer.js";

export default function Admin({ children }) {
  return (
    <>
      <div>
        {/* Header */}
        {/* <AdminNavbar /> */}
        <AdminNavbar />
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full bg-emerald-200 -m-24 text-center">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
