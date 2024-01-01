'use client'
import { appSelector } from '../../store/stores'
import Link from 'next/link'
import { IconX } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"

export default function SideHeader() {
  const activeHeader = appSelector((state) => state.navigationReducer.activeHeader)
  const menuItems = appSelector((state) => state.navigationReducer.menuItems)
  const dispatch = useDispatch()
  const [headerClass, setHeaderClass] = useState('header-menu')


  useEffect(() => {
    let classes = 'header-menu'
    if (activeHeader) {
      classes += ' active'
    }

    setHeaderClass(classes)
  }, [activeHeader])

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
    <div id={'side-header'} className={headerClass}>
      <div className="close-button">
        <button onClick={closeNavigation}>
          <IconX></IconX>
        </button>
      </div>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <button onClick={() => navigateToSection(item.section)}>{ item.title }</button>
          </li>
        ))}
      </ul>
    </div>
  )
}