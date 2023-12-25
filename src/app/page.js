import SideHeader from "../app/components/side-header"
import Introduction from "../app/sections/introduction"
import SiteHeader from "../app/components/site-header"
import React from "react"

export default function Page() {
  return (
    <div id="app">
      <SiteHeader />
      <SideHeader/>
      <div className="content">
        <Introduction />
        <div>
          Helo
        </div>
      </div>
    </div>)
}