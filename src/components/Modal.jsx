import React from 'react'
import {BsPlayFill} from "react-icons/bs";
import Weather from '../images/weather.png'
import { motion } from "framer-motion"

export const Modal = ({data}) => {
  return (
    <motion.div initial={{ x: "100%" }} animate={{ x: "0"}}
    className='sPanel sPanelNotifications sidepanel scrollable active'>
    <div className='switch w-full flex items-center justify-center '>
        <div className=' w-[13rem] select flex gap-2 justify-center items-center'>
        <div className=" flex modal-tab px-4 rounded-lg" >Today</div>
        <div className="flex px-4" >Notifications</div>
        </div>
    </div>

    <div class="widget-reminders">
				<div class="name">
					<div class="icon" data-icon="reminders"></div>
          Weather
				</div>
          <div className='flex'>
            <img className="w-20" src={Weather}/>
          <div className='p-3'>
            <h1 className=' inline-block text-4xl text-white'>23°C</h1>
            <h2>Markham, Ontario</h2>
          </div>
        </div>
			</div>
    <div class="widget-reminders">
				<div class="name">
					<div class="icon" data-icon="reminders"></div>Reminders
				</div>
				<ul>
					<li className='flex gap-5 mt-3 pb-2 border-bottom '>
						<div class="canCheck"></div>Code awesome things
					</li>
					<li className='flex gap-5 mt-3 pb-2 border-bottom'>
						<div class="canCheck"></div>Drink water 🥤
					</li>
					<li className='flex gap-5 mt-3 '>
						<div class="canCheck"></div>Sleep at least 8h
					</li>
				</ul>
			</div>
      <div class="widget-reminders">
				<div class="name">
					<div class="icon" data-icon="reminders"></div>Podcast
				</div>
				<div className='flex gap-5 pt-2'>
          <img className='w-10'
          src='https://raw.githubusercontent.com/aboredvaro/codepen_resources/main/macOS/img/appSupport/podcasts/downloads/cover/loopinfinito.jpg'/>
        <div>
        <h1 className=' inline-block'>Song Name Stuff</h1>
        <h2>Artist Name James</h2>
        </div>
        <div className=' flex text-3xl items-center '>
        <BsPlayFill/>
        </div>
        </div>
			</div>
    </motion.div>
  )
}
