import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    console.log(cart.length);
    const total=cart.reduce((total,pl)=>total+pl.Salary,0);
    console.log(total)   
    return (
        <div>
        <div className="addedPlayer">
         {cart.map(c=> <table><tr><td>{c.name}</td><td></td><td>${c.Salary}</td></tr></table>)}
         </div>
         <hr/>
           <p>Total selected players:{cart.length}</p> 
           <p>Total budget:${total}</p>

        </div>
    );
};

export default Cart;