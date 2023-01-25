import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Topbar from '../../components/topbar/Topbar'
import "./home.css"

export default function Home() {
  return (
    <>
      <Topbar />
      <div className='homeContainer'>
        <Sidebar />
        <Feed />
      </div>
    </>
  )
}
