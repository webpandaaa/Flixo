import React from 'react'
import SideNav from './partials/SideNav'
import Topnav from './partials/Topnav'

const Home = () => {
    document.title = "Flixo | Homepage"
  return (
    <>
        <SideNav/>
        <div className='w-[80%] h-full' >
        <Topnav/>
        </div>
    </>
  )
}

export default Home
