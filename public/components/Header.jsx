
import { useState } from 'react';
import LOGO from '../components/imgs/img1.webp'
import Open from '../components/icons/open.png'
import Close from '../components/icons/close.png'

export default function Header() {
    const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className='bg-white shadow-md fixed top-0 left-0 w-full z-50 flex justify-between items-center'>
    <div>
        <img className='h-25 ' src={LOGO} alt="Logo" />
    </div>
    <div>
        <button onClick={() => setModalOpen(!modalOpen)} className='md:hidden p-2'>
            <img src={modalOpen ? Close : Open} alt="Menu Icon" className='h-6 w-6' />
        </button>
        <nav className={`md:flex ${modalOpen ? 'block' : 'hidden'} md:block bg-white md:bg-transparent absolute md:static top-16 left-0 w-full md:w-auto`}>
            <ul className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0'>
                <li><a href="#home" className='text-gray-700 hover:text-yellow-500'>Home</a></li>
                <li><a href="#about" className='text-gray-700 hover:text-yellow-500'>About</a></li>
                <li><a href="#services" className='text-gray-700 hover:text-yellow-500'>Services</a></li>
                <li><a href="#contact" className='text-gray-700 hover:text-yellow-500'>Contact</a></li>
            </ul>
            </nav>
            </div>

    </div>
  );
}
