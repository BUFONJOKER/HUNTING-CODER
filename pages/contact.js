import React, { useState } from "react";
import styles from "@/styles/Contact.module.css";
import Head from "next/head";

// Contact page
export default function Contact() {

  //initialize the state variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //handle the submit
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to server using fetch or axios
    fetch("/api/postcontact", {
      // Set HTTP request method to POST
      method: "POST",

      // Set HTTP request headers
      headers: {
        "Content-Type": "application/json",
      },

      // Set request body to JSON string
      body: JSON.stringify({ name, email, message }),
    })
      // Parse JSON response
     .then((response) => response.json())

     // Show success/failure message
     .then((data) => {
        
        // Show success message to user
        alert(data.message);

        // Reset form
        setEmail("");
        setMessage("");
        setName("");
      
      })
     .catch(() => {
     
        // Show error message to user
        alert("There was an error sending your message. Please try again later.");
      });
  };

  return (
    <>
      <Head>
        <title>Hunting Coder-Contact Us</title></Head>
      <div className={styles.contact}>
        <h2 className={styles.h2}>Contact Us</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.form_group}>
            <label className={styles.label} htmlFor="name">
              Name:
            </label>
            <input
              className={styles.input}
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className={styles.form_group}>
            <label className={styles.label} htmlFor="email">
              Email:
            </label>
            <input
              className={styles.input}
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className={styles.form_group}>
            <label className={styles.label} htmlFor="message">
              Message:
            </label>
            <textarea
              className={styles.textarea}
              id="message"
              name="message"
              rows="5"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
          </div>
          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
