
import Logo from '../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center space-y-3 my-6'>
            <div className='flex justify-center items-center'>
                <img src={Logo} alt="" />
            </div>
            <h1>Journalism Without Fear or Favour</h1>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;