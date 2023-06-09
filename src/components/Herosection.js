import React from 'react';
import './Herosection.css';
import '../App.css';
import Button from './Button';

function Herosection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-1.mp4' autoPlay loop muted />
        <h1>ADVANTERUE AWAITS</h1>
        <p>what are you waiting for?</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                GET STARTED
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                WATCH TRAILER <i className="fa-regular fa-circle-play" />
            </Button>
        </div>
    </div>
  )
}

export default Herosection