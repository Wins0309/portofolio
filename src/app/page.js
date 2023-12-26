import SideHeader from "./components/side-header"
import SiteHeader from "./components/site-header"
import Introduction from "./sections/introduction"
import Work from "./sections/work"
import Clients from "./sections/clients"
import React from "react"
import 'swiper/css'
import 'swiper/css/pagination'

export default function Page() {
  return (
    <div id="app">
      <SiteHeader />
      <SideHeader/>
      <div className="content">
        <Introduction />
        <Clients />
        <Work />
      </div>
    </div>)
}