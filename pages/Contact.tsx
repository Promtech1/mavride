import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';
import MainNav from '@/components/MainNav';
import ComeWork from '@/components/ComeWork';
import Footer from '@/components/Footer';



const Contact = () => {
    useEffect(() => {
        AOS.init({
          once: true
        });
      })
  return (
    <div className="contact-container">
        <MainNav/>
        <div className="contact-wrapper">
            <h1 data-aos="fade-up" data-aos-duration="1000">Contact us!</h1>
            <p data-aos="fade-up"  data-aos-delay="300" data-aos-duration="1000">Just fill this form and we will contact you promptly, Drop us a message at <span className="info">info@mavride.net</span></p>
            <form method="post" action="api/mailus" className="contact-form" data-aos="fade-up"  data-aos-delay="500" data-aos-duration="1000">
                <input type="text" name="fullName" placeholder='Your Name'/>
                <input type="email" name="email" placeholder='Your Email'/>
                <input type="tel" name="phone" placeholder='Your Phone'/>
                <input type="text" name="message" placeholder='Message'/>
                <button type="submit" className="icon-button">
                    Submit
                     <img src="/next-arrow.png" alt="" />
                </button>
            </form>
        </div>

        <ComeWork/>
        <Footer/>
    </div>
  )
}

export default Contact