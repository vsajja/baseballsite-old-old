import React from "react";

// components

import CardStandings from "components/baseball/CardStandings.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Index() {
  return (
    <>
        <div className="flex flex-wrap mt-4">
          <div className="w-full xl:w-4/12 px-4">
            <CardStandings />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <CardStandings />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <CardStandings />
          </div>
        </div>
        <div className="flex flex-wrap mt-4">
          <div className="w-full xl:w-4/12 px-4">
            <CardStandings />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <CardStandings />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <CardStandings />
          </div>
        </div>
    </>
  );
}

Index.layout = Admin;
