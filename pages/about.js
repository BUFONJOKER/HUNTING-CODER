import React from "react";
import styles from "@/styles/About.module.css";

import Head from "next/head";
export default function about() {
  return (
    <>
      <Head>
        <title>Hunting Coder-About Us</title></Head>
    
        <div className={styles.about}>
          <h2 className={styles.abouth2}>About</h2>
          <p className={styles.aboutp}>
            Welcome to Hunting Coder, a blog website dedicated to the art of
            code hunting!
          
          
            Whether you are a beginner or an experienced coder, this blog is the
            perfect place to find valuable insights, tips, and tricks related to
            coding. We cover a wide range of topics, including programming
            languages, frameworks, algorithms, and more.
     
      
            Stay tuned for regular updates as we embark on exciting coding
            adventures together!
         Happy coding!</p>
        </div>
   
    </>
  );
}
