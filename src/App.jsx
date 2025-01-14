
import { useState } from 'react'
import './App.css'
import Available from './Components/Available'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Main from './Components/Main'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  // const [decrease_amount, set_decrease_amount] = useState()
  const [choose_player, set_choose_player] = useState([]);
  const [free_credit, set_free_credit] = useState(0);
  const [is_active, set_is_active] = useState({
    button: true,
    status: 'player'
  })

  const handle_decress_amount = (price) => {
    if (free_credit > price) {
      set_free_credit(free_credit - price);
    }
    else {
      toast.success(`❌ Your amount not found...`);
    }

    // set_decrease_amount(decrease_amount - price);
  }

  const handle_increase_amount = (id) => {
    console.log(id.biddingPrice);
  }


  const handle_deleted_player = (id) => {
    handle_increase_amount(id);
    const removedPlayer = choose_player.find((p) => p.playerId === id);
    if (removedPlayer) {
      toast.info(`❌ Player ${removedPlayer.name} removed!`);
    }

    const remaining_player = choose_player.filter((p) => p.playerId !== id);
    set_choose_player(remaining_player);
  };


  const handle_free_credit = () => {
    const amount = 6385274;
    set_free_credit(free_credit + amount);
    toast.success(`🎉 Congratulations! You have received $${amount} credit!`);
  };

  const handle_choose_player = (player) => {

    if (choose_player.length >= 6) {
      toast.error(`❌ You cannot select more than 6 players.`);
      return;
    }

    const select_players = choose_player.find((p) => p.playerId === player.playerId);

    if (free_credit < player.biddingPrice) {
      toast.success(`❌ Your not Available balance...`);
    }

    else if (!select_players) {
      handle_decress_amount(player.biddingPrice)
      set_choose_player([...choose_player, player]);
      toast.success(`🎉 Congratulations !! ${player.name} is now in your squad`);
    }

    else {
      toast.success(`❌ ${player.name} is already added...`);
    }
  };


  const handle_is_active = (status) => {
    if (status === 'player') {
      set_is_active({
        button: true,
        status: 'player'
      })
    }
    else {
      set_is_active({
        button: false,
        status: 'select'
      })
    }
  }


  return (
    <div>
      <Header free_credit={free_credit}></Header>
      <div className='w-[1320px] mx-auto'>
        <Banner handle_free_credit={handle_free_credit}></Banner>
        <Available
          handle_deleted_player={handle_deleted_player}
          choose_player={choose_player}
          handle_choose_player={handle_choose_player}
          handle_is_active={handle_is_active}
          is_active={is_active}
        >
        </Available>
        <Main></Main>
      </div>
      <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />

    </div>
  );

}

export default App
