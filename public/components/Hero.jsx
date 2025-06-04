
import IMG from '../components/imgs/img1.jpg';
export default function Hero() {
    return (
        <div>

            <div className='bg-gray-100 min-h-screen flex flex-col items-center justify-center text-center md:grid md:grid-cols-2'>

                <h1 className='text-4xl text-gray-900 md:text-5xl md:font-bold mt-20'>Welcome to Our Website</h1>

                <div className='flex ' >
                    <p className='mt-4 text-lg text-gray-600 mx-10 mb-10'>We are glad to have you here. Explore our content and enjoy your stay!</p>
                </div>

                <div>
                    <img src={IMG} className='w-full h-auto' />

                    <button className='border py-3 rounded-lg hover:bg-yellow-500 transition duration-1000 mt-5 w-[20em]'>Get Started</button>

                </div>
            </div>
        </div>
    );
}
