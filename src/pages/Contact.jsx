import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <p>Contact Page</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa
        totam possimus quidem error ex maxime vero! Molestias beatae aspernatur
        deserunt consequatur enim in sapiente suscipit eos dignissimos
        praesentium, nostrum ipsam vitae, quos, quaerat ab velit at quod esse
        doloremque. Iure voluptatibus aut atque temporibus minima laboriosam,
        dolore harum vel!
      </p>

      <div style={{ display: "flex", gap: "20px"}}>
        <Link to='/about'>About</Link>
        <Link to='/'>Home</Link>
      </div>
    </div>
  );
}

export default Contact;
