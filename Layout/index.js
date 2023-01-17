import React, { useEffect, useState } from "react"
import { withRouter } from "next/router"

import Navbar from "../Layout/Navbar"
import Footer from "../Layout/Footer"
function Layout({ children }) {
  return (
    <div className="w-full h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default withRouter(Layout)
