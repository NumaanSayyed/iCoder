import React from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faInstagram,
  faYoutube,
  faTwitter,
}from "@fortawesome/free-brands-svg-icons"
export default function Contact() {
  function handleClick(event) {
    event.preventDefault()
    var newData = {

      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      subject: event.target.elements.subject.value,
      message: event.target.elements.message.value
    }
    axios.post("http://localhost:5000/post", newData)
    alert("Your data has been submitted")
    let reloadData = {

      name: event.target.elements.name.value = " ",
      email: event.target.elements.email.value = " ",
      subject: event.target.elements.subject.value = " ",
      message: event.target.elements.message.value = " "
    }
  }
 

  return (
    <>

      <div className="container">
        <section className="mb-4">


          <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>

          <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
            a matter of hours to help you.</p>

          <div className="row">


            <div className="col-md-9 mb-md-0 mb-5">
              <form id="contact-form" name="contact-form" onSubmit={handleClick} >


                <div className="row">


                  <div className="col-md-12">
                    <div className="md-form mb-0">   
                      <label htmlFor="name" className="my-1" >Your name</label>
                    <input type="text" id="name" name="name" className="form-control" placeholder="Numan Sayyed "/>  
                    </div>                  
                  </div>
                  <br />
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <label htmlFor="email" className="my-1" >Your email</label>
                      <input type="text" id="email" name="email" className="form-control" placeholder="youremail@gmail.com" />
                    </div>
                  </div>


                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0  my-3 ">
                      <label htmlFor="subject" className="my-1" >Subject</label>
                      <input type="text" id="subject" name="subject" className="form-control" placeholder="Enter the Subject "/>
                    </div>
                  </div>
                </div>

                <div className="row">


                  <div className="col-md-12">

                    <div className="md-form  my-3">
                      <label htmlFor="message" className="my-1" >Your message</label>
                      <textarea type="text" id="message" name="message" rows="3" className="form-control md-textarea" placeholder="Type your message here! "></textarea>
                    </div>

                  </div>
                </div>


                <div className="text-center text-md-left ">
                 
                  <button type="submit" className="btn btn-primary mx-5 btn-sl ">Submit</button>
                  <button type="reset" className="btn btn-secondary mx-5 btn-sl " >Reset </button>
                
                </div>
              </form>

              <div className="status"></div>
            </div>

            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                  <p>Office no : 318, JP North Imperia T2 Commercial, Mira Bhayander Rd, near to Arkade Art Complex, Vinay Nagar, Mira Road, Thane, Maharashtra 401107</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                  <p>+91 86576 55887</p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                  <p>contact@iCoder.com</p>
                </li>
              </ul>
            </div>


          </div>

        </section>
        <div className="container mx-5 my-5">
        <h2 className="">Our Location!</h2>
        <iframe className="mx-5" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15064.082949049021!2d72.8869814977537!3d19.281464383048508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sOffice%20no%20%3A%20318%2C%20JP%20North%20Imperia%20T2%20Commercial%2C%20Mira%20Bhayander%20Rd%2C%20near%20to%20Arkade%20Art%20Complex%2C%20Vinay%20Nagar%2C%20Mira%20Road%2C%20Thane%2C%20Maharashtra%20401107!5e0!3m2!1sen!2sin!4v1675152667411!5m2!1sen!2sin"
         width="1000" 
         height="450" 
         allowfullscreen="true" 
         loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div className="container my-5 text-center">
      <h3>Connect with Us </h3>
      <a href="http://www.github.com " className="mx-3 btn btn-dark my-2 " >
        <FontAwesomeIcon icon={faGithub} size="2x"/>
        </a>
      <a href="http://www.instagram.com" className="mx-3 btn btn-secondary  my-2">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      <a href="http://www.twitter.com" className="mx-3 btn btn-primary  my-2">
        <FontAwesomeIcon icon={faTwitter} size="2x"/>
        </a>
      <a href="http://www.youtube.com" className="mx-3 btn btn-danger  my-2  ">
        <FontAwesomeIcon icon={faYoutube} size="2x"/>
        </a>

      </div>
   
   
    </>
  )
}










