import SideHeader from "./components/side-header"
import SiteHeader from "./components/site-header"
import Introduction from "./sections/introduction"
import Clients from "./sections/clients"
import Stack from "./sections/stack"
import Work from "./sections/work"
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
        <Stack />
        <Clients />
        <Work />
      </div>
    </div>)
}