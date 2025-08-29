import type React from "react";
import ContactForm from "../ContactForm";

const Contacts: React.FC = () => {
  return <div>
    <h1>Lets get in touch!</h1>
    <h2>I speak <span>English, Ukrainian, Polish and Russian.</span> Feel free to contact me!</h2>
    
    <div className="columnWrapper">
      <div>
        <h3><span>
          Location
          <img src="icons\pin.svg" />
        </span></h3>
        <p>Czestochowa, Poland</p>
      </div>
      <div>
        <h3><span>
          Email
          <img src="icons\contacts.svg" />
        </span></h3>
        <p>yurii.levchuk04@gmail.com</p>
      </div>
      <div>
        <h3><span>
          Phone
          <img src="icons\phone.svg" />
        </span></h3>
        <p>+48 790 560 596</p>
      </div>
    </div>

    <div className="seperator"></div>
    <h2>Write me a message</h2>
    <ContactForm/>
  </div>;
};

export default Contacts;