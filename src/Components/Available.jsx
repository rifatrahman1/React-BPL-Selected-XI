import PropTypes from 'prop-types';
import Selected from './Selected';
import Players from './Players';

const Available = ({ handle_is_active,
    is_active,
    handle_choose_player,
    choose_player,
    handle_deleted_player
}) => {

    return (
        <div>
            <div className="flex justify-between mt-20">
                {
                    is_active.button ? <h1 className="text-[28px] font-bold">Barishal Team Available Players</h1> : <h1 className="text-[28px] font-bold">Selected Players ({choose_player.length} / 6)</h1>
                }
                <div className="flex items-center border border-[#1313131A] rounded-xl">
                    <button onClick={() => handle_is_active('player')} className={`${is_active.button ? 'bg-[#E7FE29] font-bold px-[30px] py-[14px] rounded-l-xl' : ' font-bold px-[30px] py-[14px] rounded-l-xl'}`}>Available</button>
                    <button onClick={() => handle_is_active('select')} className={`${is_active.button ? ' font-bold px-[30px] py-[14px]  ' : 'bg-[#E7FE29] font-bold px-[30px] py-[14px] rounded-r-xl'}`}>Selected {choose_player.length}</button>
                </div>

            </div>
            <div >
                {
                    is_active.button ?
                        <Players handle_choose_player={handle_choose_player}></Players>
                        : <Selected 
                        handle_deleted_player={handle_deleted_player} 
                        choose_player={choose_player} 
                        handle_is_active={handle_is_active}
                    />
                    
                }
            </div>
        </div>
    );
};

Available.propTypes = {
    handle_is_active: PropTypes.func.isRequired,
    is_active: PropTypes.object.isRequired,
    handle_choose_player: PropTypes.func.isRequired,
    choose_player: PropTypes.array.isRequired,
    handle_deleted_player: PropTypes.func.isRequired
}
export default Available;