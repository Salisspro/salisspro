
import IMG from '../components/imgs/img.PNG'
export default function Hero() {
    return (
        <div className='bg-gray-100 min-h-screen flex flex-col items-center justify-center text-center'>
            <h1 className='text-4xl text-gray-900 p-4 '>Welcome to Our Website</h1>
            <p className='mt-4 text-lg text-gray-600 mx-4'>We are glad to have you here. Explore our content and enjoy your stay!</p>

            <div>
                <img src={IMG} className='w-full h-auto' />
            </div>
            <div className='flex justify-center mt-8'>
                <button className='bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300'>Get Started</button>
            </div>
           
        </div>
    );
}
