'use client'
import { IconMenuDeep } from '@tabler/icons-react'
import { useDispatch } from 'react-redux'

export default function SiteHeader() {
  const dispatch = useDispatch()
  const closeNavigation = () => {
    dispatch({type: 'TOGGLE_HEADER'})
  }

  const navigateToSection = () => {
    window.scrollTo({
      top: document.getElementById('introduction').offsetTop - 88,
      behavior: "smooth"
    });
  }

  return (
    <header id="site-header">
      <div className="container mx-auto">
        <div className="header-menu-items">
          <button onClick={() => navigateToSection()}>
            <h5 className="text-winston-primary uppercase font-bold">Winston</h5>
          </button>
        </div>
        <button className="icon-menu" onClick={closeNavigation}>
          <IconMenuDeep></IconMenuDeep>
        </button>
      </div>
    </header>
  )
}