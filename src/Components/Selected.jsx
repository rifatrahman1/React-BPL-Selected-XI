import PropTypes from 'prop-types';
import clear from '../../assets/delete.png';

const Selected = ({ 
    choose_player, 
    handle_deleted_player, 
    handle_is_active 
}) => {
    return (
        <div>
            <div>
                {choose_player.length > 0 ? (
                    choose_player.map((player, idx) => (
                        <div key={idx} className='border mt-6 p-6 rounded-2xl flex items-center justify-between'>
                            <div className="flex gap-6 items-center">
                                <img className='w-[100px] h-[100px] rounded-2xl bg-cover' src={player.image} alt="" />
                                <div>
                                    <h3 className='text-2xl'>{player.name}</h3>
                                    <p className='text-[#13131399] mt-3'>{player.battingType}</p>
                                </div>
                            </div>
                            <img onClick={() => handle_deleted_player(player.playerId)} className='cursor-pointer' src={clear} alt="Delete" />
                        </div>
                    ))
                ) : (
                    <p className='flex justify-center items-center text-center text-red-400 text-2xl font-bold'>No players selected yet . . . </p>
                )}
            </div>
            <button 
                onClick={() => handle_is_active('player')} 
                className='bg-[#E7FE29] mt-20 rounded-xl px-5 py-[14px] font-bold'>
                Add More Player
            </button>
        </div>
    );
};

Selected.propTypes = {
    choose_player: PropTypes.array.isRequired,
    handle_deleted_player: PropTypes.func.isRequired,
    handle_is_active: PropTypes.func.isRequired
};

export default Selected;
