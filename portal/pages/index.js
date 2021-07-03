import React from "react";

// components

import CardPlayers from "components/baseball/CardPlayers.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Index({ obj }) {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <CardPlayers 
            league="Players"
          />
      </div>
    </>
  );
}

Index.layout = Admin;
