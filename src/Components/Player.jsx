import PropTypes from 'prop-types';
import { FaUserAlt } from "react-icons/fa";
import { IoFlagSharp } from "react-icons/io5";

const Player = ({ player, handle_choose_player }) => {
    const {name, image, role, country, battingType, bowlingType, biddingPrice } = player;
    return (
        <div>
            <div className='border border-[#1313131A] rounded-2xl p-6'>
            <img className='w-[450px] h-[300px] bg-cover rounded-2xl' src={image} alt="" />
            <div className='flex items-center gap-4 mt-6'>
            <FaUserAlt className=''/>
                <h4 className='text-xl font-semibold'>{name}</h4>
            </div>
            <div className='flex items-center justify-between mt-4'>
                <div className='flex items-center gap-3'>
                <IoFlagSharp className='text-[#131313]'/>
                <p className='text-[#131313]'>{country}</p>
                </div>
                <p className='bg-[#1313130D] px-4 py-[12px] rounded-lg btn'>{role}</p>
            </div>
            <div className="divider"></div>
            <p className='font-bold'>Rating</p>
            <div className='flex items-center mt-4 justify-between'>
                <p className='font-semibold'>Bating Type</p>
                <p className='text-[#131313B3]'>{battingType}</p>
            </div>
            <div className='flex items-center justify-between mt-4'>
                <p className='font-semibold'>Bowling Type Type</p>
                <p>{bowlingType === null ? 'No Bowling' : `${bowlingType}`}</p>
            </div>
            <div className='flex items-center justify-between mt-3'>
                <p className='text-[#131313] font-semibold'>Price : ${biddingPrice}</p>
                <button onClick={() => {handle_choose_player(player)
                }} className='px-4 py-[12px] rounded-lg border border-[#1313131A] hover:bg-[#E7FE29] duration-500'>Choose Player</button>
            </div>
        </div>
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
    handle_choose_player: PropTypes.func.isRequired
}
export default Player;