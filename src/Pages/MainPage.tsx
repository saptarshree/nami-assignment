import React from 'react'
import TopNav from '../components/TopNav'
import SideNav from '../components/SideNav'
import TaskCard from '../components/TaskCard'

const MainPage = () => {
  return (
    <div>
      <TopNav/>
      <div className='row flex '>
      <SideNav/>
      <br />
      <TaskCard/>
      </div>
    </div>
  )
}

export default MainPage
