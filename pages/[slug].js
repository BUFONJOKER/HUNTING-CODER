import React, { useState, useEffect } from "react";
import styles from "@/styles/About.module.css";
import fs from "fs";
import path from "path";
import Head from "next/head";


export default function Page(props) {
  function createMarkup(content) {
    return {
      __html: content,
    };
  }

  return (
    <>
      <Head>
        <title>Hunting Coder-Popular Blogs</title></Head>

      {props.blogs && (
        <div className={styles.about}>
          {/* <h3 className={styles.abouth2}>{props.blogs.title}</h3> */}
          <div
            className={styles.aboutp}
            key={props.blogs.title}
            dangerouslySetInnerHTML={createMarkup(props.blogs.content)}
          ></div>
        </div>
      )}
    </>
  );
}

export async function getStaticProps(context) {

  const { slug } = context.params;

  // Fetch data from external API

  let myBlogs = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");


  return { props: { blogs: JSON.parse(myBlogs) } };
}

// This function gets called at build time
// export async function getStaticPaths(context) {







//   return {
//     paths:
//     [
//       {
//         params: { slug: "Building Web Applications with Flask" },
//       },
//       {
//         params: { slug: "Getting Started with Next.js" },
//       },
//       {
//         params: { slug: "Introduction to Flutter Mobile Development" },
//       },
//       {
//         params: { slug: "Introduction to JavaScript" },
//       },
//       {
//         params: { slug: "Mastering Laravel for Backend Development" },
//       },
//     ],
//     fallback: true,
//   };
// }




export async function getStaticPaths(context) {
  // Read the directory to get the file names
  const directoryPath = path.join(process.cwd(), "/blogdata");
  const fileNames = fs.readdirSync(directoryPath);

  // Generate the paths based on the file names
  const paths = fileNames.map((fileName) => ({
    params: { slug: fileName.replace(".json", "") },
  }));

  return {
    paths: paths,
    fallback: true,
  };
}