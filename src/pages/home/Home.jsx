import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Topbar from '../../components/topbar/Topbar'
import "./home.css"
import FeedCard from '../../components/feedCard/FeedCard'

export default function Home() {

  return (
    <>
      <Topbar />
      <div className='homeContainer'>
        <Feed />
      </div>
    </>
  )
}
