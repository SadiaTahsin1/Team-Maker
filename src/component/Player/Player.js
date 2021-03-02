import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Player.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Player = (props) => {
     const {img,name,Country,Salary}=props.pd;
    
    return (
        <div className="view-player">
        <div>
        <img src={img} alt=""></img> 
        </div>
         
        <div className="description">
         <h3 className="playerName">{name}</h3>
         <h3>{Country}</h3>
         <p>${Salary}</p>
         <Button variant='primary' onClick={()=>props.handler(props.pd)}><FontAwesomeIcon icon={faPlus} /> Add to Club</Button>
        </div>
        </div>
    );
};

export default Player;