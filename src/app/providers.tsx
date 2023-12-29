'use client';
import { Provider } from "react-redux"
import { store } from "../store/stores"
import React, { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'

export function Providers({ children } : { children: React.ReactNode }) {
    useEffect(() => {
        // here you can add your aos options
        AOS.init()
    }, [])

    return <Provider store={store}>{children}</Provider>
}