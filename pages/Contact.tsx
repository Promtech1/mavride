import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MainNav from '@/components/MainNav';
import ComeWork from '@/components/ComeWork';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      once: true
    });
  });

  const router = useRouter();
  const { id } = router.query;

  // Define your success and error conditions
  const isSuccess = id === '200';
  const isError = id === '500';

  return (
    <div className="contact-container">
      <MainNav />
      <div className="contact-wrapper">
      {isSuccess && (
        <div  className="bg-green-500 text-white p-4">
          Your message has succesfully be submitted
        </div>
      )}

      {isError && (
        <div className="bg-red-500 text-white p-4">
         There was error submiting your message, please try again later
        </div>
      )}

        <h1 data-aos="fade-up" data-aos-duration="1000">
          Contact us!
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
         
       

          Just fill this form and we will contact you promptly, Drop us a
          message at{' '}
          <span className="info">info@mavride.net</span>
        </p>
        <form
          method="post"
          action="api/mailusboy"
          className="contact-form"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <input required="required" type="text" name="fullName" placeholder="Your Name" />
          <input required="required" type="email" name="email" placeholder="Your Email" />
          <input required="required" type="tel" name="phone" placeholder="Your Phone" />
          <input required="required" type="text" name="message" placeholder="Message" />
          <button type="submit" className="icon-button">
            Submit
            <img src="/next-arrow.png" alt="" />
          </button>
        </form>
      </div>

     
      <ComeWork />
      <Footer />
    </div>
  );
};

export default Contact;
