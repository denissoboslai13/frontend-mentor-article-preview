import { useState } from 'react'
import './App.css'
import { useMediaQuery } from 'react-responsive';
import drawers from './assets/drawers.jpg'
import avatar from './assets/avatar-michelle.jpg'
import ShareIcon from './assets/icon-share.svg?react';
import fbIcon from './assets/icon-facebook.svg'
import pinIcon from './assets/icon-pinterest.svg'
import twitIcon from './assets/icon-twitter.svg'
import { AnimatePresence, motion } from 'motion/react';

const MobileShare = ({ visibility, setVisibility }) => {
  return (
    <AnimatePresence>
      {visibility && (
        <motion.div className='w-full bg-[#48556a] flex justify-between items-center p-4 px-8 absolute bottom-0 z-100 text-sm'
          initial={{ y: 70 }}
          animate={{ y: 0 }}
          exit={{ y: 70 }}
          transition={{ duration: 0.5 }}
        >
          <div className='flex gap-4'>
            <div className='tracking-[0.35em] text-[#9eafc2] text-md'>
              <p>SHARE</p>
            </div>
            <div className='flex gap-4'>
              <img src={fbIcon} alt='facebook-icon' />
              <img src={twitIcon} alt='twitter-icon' />
              <img src={pinIcon} alt='pinterest-icon' />
            </div>
          </div>
          <div className='p-2 bg-[#6d7f97] rounded-full overflow-hidden hover:cursor-pointer' onClick={() => setVisibility(p => p == 0 ? 1 : 0)}>
            <ShareIcon className="[&_path]:fill-white" />
          </div>
        </motion.div>
      )}
      
    </AnimatePresence>
  )
}

const DesktopShare = ({ visibility }) => {
  return (
    <AnimatePresence>
      {visibility && (
        <motion.div className='bg-[#48556a] flex justify-between md:justify-center items-center p-4 px-8 md:pr-10 md:pl-8 absolute md:bottom-[100px] md:right-[0px] lg:right-[-70px] z-100 rounded-xl duration-300 ease-linear text-sm'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='flex gap-4'>
            <div className='tracking-[0.35em] text-[#9eafc2] text-md'>
              <p>SHARE</p>
            </div>
            <div className='flex gap-4'>
              <img src={fbIcon} alt='facebook-icon' />
              <img src={twitIcon} alt='twitter-icon' />
              <img src={pinIcon} alt='pinterest-icon' />
            </div>
          </div>
        </motion.div>
      )}
      
    </AnimatePresence>
  )
}


function App() {
  const [visibility, setVisibility] = useState(0)
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const imdobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    /*
    <div className='bg-red-300'>
      {isDesktop ? (
        <p>This is displayed on desktop screens (width is greater or equal than 1224px).</p>
      ) : isTablet ? (
        <p>This is displayed on tablet screens (width between 768px and 1223px).</p>
      ) : (
        <p>This is displayed on mobile screens (width is less or equal than 767px).</p>
      )}
    </div>
    */
   
   <div className='w-full h-[100vh] font-[Manrope] p-6 flex items-center justify-center min-w-[350px] max-w-[1440px]'>
    <div className='bg-white flex flex-col md:grid md:grid-cols-[39%_61%] rounded-xl overflow-hidden md:overflow-visible relative w-[750px]'>
      <div className='overflow-hidden h-[215px] md:h-[290px] mb-3 md:mb-0 md:rounded-l-xl'>
        <img src={drawers} alt="drawers" className='object-cover md:object-left w-full h-full'/>
      </div>
      <div className='px-8 py-4 md:px-10 md:py-6 flex flex-col gap-4 mt-2 md:mt-0'>
        <div>
          <h1 className='text-[#48556a] font-bold text-[1.05rem] md:text-[1.3rem]'>
            Shift the overall look and feel by adding these wonderful touches to furniture in your home
          </h1>
        </div>
        <div>
          <p className='text-[#6d7f97] text-[0.83rem] font-medium'>
            Ever been in a room and felt like something was missing? Perhaps 
    it felt slightly bare and uninviting. I’ve got some simple tips 
    to help you make any room feel complete.
          </p>
        </div>
        <div className='flex justify-between items-center mt-2 z-1'>
          <div className='flex gap-4'>
            <div className='w-[42px] h-[42px] rounded-full overflow-hidden'>
              <img src={avatar} alt='avatar-michelle'/>
            </div>
            <div className='text-sm flex flex-col gap-[0.1rem]'>
              <p className='text-[#48556a] font-bold'>Michelle Appleton</p>
              <p className='text-[#9eafc2] font-medium'>28 Jun 2020</p>
            </div>
          </div>
          <div 
            className={`p-2 ${visibility === 1 && isDesktop ? 'bg-[#6d7f97]' : 'bg-[#ecf2f8]'} rounded-full overflow-hidden hover:cursor-pointer duration-300 ease-linear`}
            onClick={() => setVisibility(p => p === 0 ? 1 : 0)}
          >
            <ShareIcon className={`${visibility === 1 && isDesktop ? '[&_path]:fill-white' : 'fill-auto'}`}/>
          </div>
        </div>
      </div>
      {imdobile ? (
        <MobileShare visibility={visibility} setVisibility={setVisibility} />
      ) : (
        <DesktopShare visibility={visibility} />
      )}
    </div>
   </div>
  )
}

export default App
