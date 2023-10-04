
import { FaGoogle, FaGithub, FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import logo1 from '../../../../../data/assets/qZone1.png'
import logo2 from '../../../../../data/assets/qZone2.png'
import logo3 from '../../../../../data/assets/qZone3.png'

const RightSideNav = () => {
    return (
        // Main Div
        <div>
            {/* Btn */}
            <div className='p-4'>
                {/* Login With */}
                <h1 className="text-2xl font-bold">Login With</h1>
                <button className="btn btn-outline mt-4 w-full lowercase">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button className="btn btn-outline mt-2 w-full  lowercase">
                    <FaGithub></FaGithub>
                    GitHub
                </button>
            </div>
            {/* Find Us On */}
            <div className='p-4 mt-5'>
                <h1 className="text-2xl font-bold">Find Us On</h1>
                <a className='p-4 flex items-center gap-4 mt-4 border rounded-t-lg' href="">
                    <FaFacebook></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className='p-4 flex items-center gap-4 border ' href="">
                    <FaTwitter></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className='p-4 flex items-center gap-4 border rounded-b-lg' href="">
                    <FaInstagramSquare></FaInstagramSquare>
                    <span>Instagram</span>
                </a>
            </div>
            {/* Q-Zone */}
            <div className='p-4'>
                <h1 className="text-2xl font-bold">Q-Zone</h1>
              <img src={logo1} alt="" />
              <img src={logo2} alt="" />
              <img src={logo3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;