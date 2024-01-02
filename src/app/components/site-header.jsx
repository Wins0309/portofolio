'use client'
import { IconMenuDeep } from '@tabler/icons-react'
import { useDispatch } from 'react-redux'
import Image from 'next/image'
import { appSelector } from "../../store/stores"

export default function SiteHeader() {
  const dispatch = useDispatch()
  const menuItems = appSelector((state) => state.navigationReducer.menuItems)
  const closeNavigation = () => {
    dispatch({type: 'TOGGLE_HEADER'})
  }

  const navigateToSection = (section) => {
    window.scrollTo({
      top: document.getElementById(section).offsetTop - 88,
      behavior: "smooth"
    });

    if (window.innerWidth < 640) {
      dispatch({type: 'TOGGLE_HEADER'})
    }
  }

  return (
    <header id="site-header">
      <div className="container mx-auto flex items-center">
        <div className="header-menu-items flex gap-4">
          <button onClick={() => navigateToSection('introduction')}>
            <Image width={30} height={30} src={'/logo.png'}  alt="Logo"/>
          </button>
          <ul className="hidden lg:flex items-center gap-4">
            {menuItems.map((item, index) => (
              <li key={index} className="menu-item text-winston-primary font-bold">
                <button onClick={() => navigateToSection(item.section)}>{ item.title }</button>
              </li>
            ))}
          </ul>
        </div>
        <button className="icon-menu block lg:hidden" onClick={closeNavigation}>
          <IconMenuDeep></IconMenuDeep>
        </button>
      </div>
    </header>
  )
}