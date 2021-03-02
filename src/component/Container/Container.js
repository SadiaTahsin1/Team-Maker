import Player from '../Player/Player';
import playerData from'../../data/data.json';
import Cart from '../SelectionCart/SelectionCart';
import React, { useEffect, useState } from 'react';
import './Container.css';


const Container = () => {
    const [players,setPlayers]=useState([]);
    const [cart,setCart]=useState([]);
    const addHandler=(p)=>{
    console.log("added",p);
    const newCart=[...cart,p];
    setCart(newCart)
    }
    useEffect(()=>{
      setPlayers(playerData);
      
    },[])
    return (
    <div className="container">
       <div className="player-container">
        {
          players.map(p=><Player pd={p} handler={addHandler}></Player>)
        }
      </div>
      <div>
        <h4>Selection Summary</h4>
       {/* { */}
          {/* // cart.map(c=> <Cart addedPlayer={c}></Cart>) */}
        {/* } */}
        <Cart cart={cart}></Cart>
    </div>
     </div>
    );
  
};

export default Container;