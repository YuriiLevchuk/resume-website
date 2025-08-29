// import React, { useState } from "react";

const ContactForm = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    formData.append("access_key", "20102e9f-5d0e-4d12-9a51-171e26dabc31"); //not an api key, no need to hide it
    console.log(formData.values());

    const object = Object.fromEntries(formData);

    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      (e.currentTarget as HTMLFormElement).reset();
      alert("Message sent successfully!");
      
    } else {
        alert(res.message);
    }
  };

  return(
    <div>
      <form onSubmit={onSubmit}>
        <div className="inputBoxWrapper">
          <div className="inputBox">
            <label>Name</label>
            <input name="name" type="text" placeholder="Enter your name" required/>
          </div>
          <div className="inputBox">
            <label>Email</label>
            <input name="email" type="text" placeholder="Enter your email" required/>
          </div>
        </div>
        
        <div className="inputBox">
          <label>Your message</label>
          <textarea name="message" placeholder="Enter your message" required></textarea>
        </div>

        <button type="submit" className="button">Send Message</button>
      </form>
    </div>
  )
}

export default ContactForm;
