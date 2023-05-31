import React from 'react'
import Button from './Button'
import './Fotter.css'
import { Link } from 'react-router-dom'

function Fotter() {
  return (
    < div className='box'>
        <div className='footer-container'>
            <div className='footer-subscription'>
                <p className='footer-subscription-header'>
                    Join the Adventure newsletter to recieve our best vacation deals.
                </p>
                <p className='footer-subscription-text'>
                    You can Unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Your Email' className='footer-input' />
                        <Button buttonStyle='btn--outline' buttonSize='btn--large' >Subscribe</Button>
                    </form>
                </div>
            </div>
        </div>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link  to='/signup'>How it Works</Link>
                    <Link  to='/'>Testimonials</Link>
                    <Link  to='/'>Careers</Link>
                    <Link  to='/'>Investors</Link>
                    <Link  to='/'>Terms of Services</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link  to='/'>Contact</Link>
                    <Link  to='/'>Support</Link>
                    <Link  to='/'>Destinations</Link>
                    <Link  to='/'>Sponsorships</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Vedios</h2>
                    <Link  to='/'>Submit Vedios</Link>
                    <Link  to='/'>Ambassadors</Link>
                    <Link  to='/'>Agency</Link>
                    <Link  to='/'>Influencer</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Social Media</h2>
                    <Link  to='/'>Instagram</Link>
                    <Link  to='/'>Facebook</Link>
                    <Link  to='/'>Youtube</Link>
                    <Link  to='/'>Twitter</Link>
                </div>
            </div>
        </div>
        <div className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                        TRVL <i className='fa-solid fa-fan' />
                    </Link>
                </div>
                <small className='website-rights'>TRVL 2023</small>
                <div className='social-icons'>
                    <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
                        <i class="fa-brands fa-facebook"></i>
                    </Link>
                    <Link className='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'>
                        <i class="fa-brands fa-instagram"></i>
                    </Link>
                    <Link className='social-icon-link linkedin' to='/' target='_blank' aria-label='Instagram'>
                        <i class="fa-brands fa-linkedin"></i>
                    </Link>
                    <Link className='social-icon-link youtube' to='/' target='_blank' aria-label='Instagram'>
                        <i class="fa-brands fa-youtube"></i>
                    </Link>
                    <Link className='social-icon-link twitter' to='/' target='_blank' aria-label='Instagram'>
                        <i class="fa-brands fa-twitter"></i>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fotter