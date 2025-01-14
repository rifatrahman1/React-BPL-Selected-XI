import logo from '../../assets/logo.png'
import { BsCoin } from "react-icons/bs";
import PropTypes from 'prop-types';

const Header = ({free_credit}) => {
    return (
        <header className='sticky top-0 bg-gray-200/50 backdrop-blur-md shadow-md z-50'>
            <nav className=' w-[1320px] mx-auto'>
            <div className='flex justify-between items-center py-7 my-14'>
            <img src={logo} alt="" />
            <div className='flex items-center gap-12 text-[#131313B3]'>
                <p>Home</p>
                <p>Fixture</p>
                <p>Teams</p>
                <p>Schedules</p>
                <button className='flex items-center gap-2 px-5 py-4 rounded-xl border border-[#1313131A] text-[#131313]'>{free_credit} Coin  <BsCoin className='text-yellow-600 text-xl font-semibold' /></button>
            </div>
        </div>
            </nav>
        </header>
    );
};

Header.propTypes = {
    free_credit: PropTypes.number.isRequired
}
export default Header;