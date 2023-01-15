import React, { useEffect, useState } from "react";
import { withRouter } from "next/router";

import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
function Layout({ children }) {
  return (
    <div className="">
      <Navbar />
      <div className="">{children}</div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default withRouter(Layout);
