
import { BiLogoGoogle, BiLogoGithub } from 'react-icons/bi';
import { BsFacebook, BsTwitter, BsPinterest } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Pic1 from '../../assets/qZone1.png';
import Pic2 from '../../assets/qZone2.png';
import Pic3 from '../../assets/qZone3.png';
import BgImg from '../../assets/bg.png';

const RightSideNavbar = () => {
    return (
        <div className='px-3'>
            <h1 className="text-2xl font-bold mb-3">Login With</h1>
            <div className='block'>
                <div className='border-2 flex justify-center mb-2 py-2'>
                    <button className='flex items-center'><h3 className='text-xl mr-1'><BiLogoGoogle /></h3>Login With Google</button>
                </div>
                <div className='border-2 flex justify-center py-2'>
                    <button className='flex items-center'><h3 className='text-2xl mr-1'><BiLogoGithub /></h3> Login With Github</button>
                </div>
            </div>
            {/* find us */}
            <h1 className='my-4 text-2xl font-bold'>Find Us On</h1>
            <div className='border py-2'>
                <button className='flex items-center'> <Link className='mx-3'><BsFacebook /></Link> facebook</button>
            </div>
            <div className='border py-2'>
                <button className='flex items-center'> <Link className='mx-3'><BsTwitter /></Link>Twitter</button>
            </div>
            <div className='border py-2'>
                <button className='flex items-center'> <Link className='mx-3'><BsPinterest /></Link>Pinterest</button>
            </div>
            {/* Q-Zone picture  */}
            <div className='bg-gray-300 py-3 px-3 my-5'>
                <h1 className='text-2xl font-bold mb-4'>Q-Zone</h1>
                <div className='mb-4'>
                    <img src={Pic1} alt="" />
                </div>
                <div className='mb-4'>
                    <img src={Pic2} alt="" />
                </div>
                <div className='mb-4'>
                    <img src={Pic3} alt="" />
                </div>
            </div>
            {/* colorfull background  */}
            <div className='relative mb-5'>
                <img src={BgImg} alt="img coming" />
                <div className=' top-0 absolute h-full w-full flex justify-center items-center'>
                    <div className='text-center px-7'>
                        <h1 className='text-white text-3xl font-bold mb-6'>Create an Amazing Newspaper</h1>
                        <p className='text-xl text-white mb-8'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                        <button className='bg-red-600 px-5 py-3 rounded text-white font-bold text-xl'> <Link>Learn More</Link> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideNavbar;