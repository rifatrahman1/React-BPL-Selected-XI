import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Player from "./Player";


const Players = ({ handle_choose_player }) => {
    const [players, set_players] = useState([]);

    useEffect(() => {
        fetch('/player.json')
            .then(res => res.json())
            .then(data => {
                set_players(data);
            })
    }, [])
    return (
        <div className="grid grid-cols-3 gap-6 mt-8">
            {
                players.map((player, idx) => <Player key={idx} player={player} handle_choose_player={handle_choose_player}></Player>)
            }
        </div>
    );
};

Players.propTypes = {
    handle_choose_player: PropTypes.func.isRequired
}
export default Players;