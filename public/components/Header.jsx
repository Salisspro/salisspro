
import LOGO from '../components/imgs/img1.webp'

export default function Header() {
  return (
    <div className='bg-white shadow-md fixed top-0 left-0 w-full z-50 flex justify-between items-center'>
    <div>
        <img className='h-25 ' src={LOGO} alt="Logo" />
    </div>
        <nav className='flex justify-between items-center p-4'>
            <ul className='flex space-x-4 text-lg text-gray-800 font-semibold flex-end group-hover:text-blue-500'>
            <li>
                <a className='hover:text-blue-500' href="/">Home</a>
            </li>

            <li>
                <a className='hover:text-blue-500' href="/about">About</a>
            </li>
            <li>
                <a className='hover:text-blue-500' href="/contact">Contact</a>
            </li>
            <li>
                <a className='hover:text-blue-500' href="/services">Services</a>
            </li>
            </ul>
        </nav>

    </div>
  );
}
