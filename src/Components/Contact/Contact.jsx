import React ,{useState}from 'react'
import "./Contact.css"
import star1 from "../../assets/star1.mp4"
import { toast } from "react-toastify";

const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "593f2c14-fd18-4998-9093-68245afaf5d7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      
      setResult("Form Submitted Successfully");
      toast.success("Form Submitted")
      event.target.reset();
    } else {
     
      console.log("Error", data);
      setResult(data.message);
      toast.error("Error")
    }
  };
    
  return (
    <div className='contact'>
        <video autoPlay loop muted playsInline className="bg5-video">
    <source src={star1} type={'video/mp4'} />
    Your browser does not support HTML5 video.
  </video>
      <h1 id='contact'>Contact Me</h1>
      <hr />
      <form className='contact-form' onSubmit={onSubmit} >

      <label htmlFor="">Your Name</label>
      <input type="text" placeholder='Enter your name' name="name" id=""  required/>
      <label htmlFor=''>Your Email</label>
      <input type="email" placeholder='Your Email' name="email" id="" required/>
      <label htmlFor="">Write your message here </label>
      <textarea name="message" rows={"5"} placeholder='Enter your message here' id="" required></textarea>
      <button type='submit' className='contact-submit'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
