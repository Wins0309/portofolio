'use client'
import { IconMenu } from '@tabler/icons-react'
import { useDispatch } from 'react-redux'

export default function SiteHeader() {
  const dispatch = useDispatch()
  const closeNavigation = () => {
    dispatch({type: 'TOGGLE_HEADER'})
  }

  return (
    <header id="site-header">
      <div className="container mx-auto">
        <button className="icon-menu" onClick={closeNavigation}>
          <IconMenu></IconMenu>
        </button>
      </div>
    </header>
  )
}