import React, { useEffect, useState } from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";
import * as fs from "fs";
import InfiniteScroll from "react-infinite-scroll-component";
import Head from "next/head";


// Blog page with props
export default function Blog(props) {

  //initialize the blogs state
  const [blogs, setBlogs] = useState(props.blogs);
  
  //initialize the count state
  const [count, setcount] = useState(1);

  //generate a unique key
  function generateUniqueKey() {

    // Convert current timestamp to a base36 string
    const timestamp = Date.now().toString(36); // Convert current timestamp to a base36 string
    
    // Math.random should be unique because of its seeding algorithm.
    const randomString = Math.random().toString(36).substring(2, 15); // Generate a random string
    
    
    const uniqueKey = timestamp + randomString; // Concatenate the timestamp and random string
    return uniqueKey;
  }
  
  
  //fetch more data
  const fetchMoreData = async () => {

    //fetch the data from the api
    let d = await fetch(`http://localhost:3000/api/blogs?count=${count + 1}`);
    
    //convert the data to json
    let data = await d.json();

    //set the blogs state
    setBlogs((prevBlogs) => [...prevBlogs, ...data]);

    //increment the count state
    setcount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <Head>
        <title>Hunting Coder-Popular Blogs</title></Head>
      <div className={styles.blog_container}>
        <h2 className={styles.blogHeading}>Popular Blogs</h2>

        <InfiniteScroll
          dataLength={blogs.length} //This is important field to render the next data
          next={fetchMoreData}
          hasMore={count < 10 ? true : false}
          loader={<h4 className={styles.h4}>Loading...</h4>}
          endMessage={
            <h1 className={styles.endMessage}>Yay! You have seen it all</h1>
          }
        >
          {blogs.map((blogItem) => {
            return (
              <>
                <div key={generateUniqueKey()}>
                  <h3 className={styles.h3_heading}>{blogItem.title}</h3>

                  <p className={styles.article}>
                    {blogItem.description}............
                    <Link
                      className={styles.button_link}
                      href={`/${blogItem.title}`}
                    >
                      Read More
                    </Link>
                  </p>
                </div>
              </>
            );
          })}
        </InfiniteScroll>
      </div>
    </>
  );
}

// export async function getStaticProps() {
//   // Fetch data from external API
//   let data = await fs.promises.readdir("blogdata");
//   let blogs = [];
//   for (let index = 0; index < data.length; index++) {
//     const item = data[index];
//     let myBlogs = await fs.promises.readFile("blogdata/" + item, "utf-8");

//     blogs.push(JSON.parse(myBlogs));
//   }

//   // Pass data to the page via props
//   return { props: { blogs } };
// }
// // write javascript code to add 2 numbers?


export async function getServerSideProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let blogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    let myBlogs = await fs.promises.readFile("blogdata/" + item, "utf-8");

    blogs.push(JSON.parse(myBlogs));
  }
  return { props: { blogs } };
}