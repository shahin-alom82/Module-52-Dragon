import logo from '../../../../logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="" />
            <h1 className='lg:text-xl'>Journalism Without Fear or Favou</h1>
            <p className=''>{moment().format("dddd, MMMM  D,  YYYY,   h:mm A")}</p>
        </div>
    );
};

export default Header;