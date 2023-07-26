// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

//add comments

//handle the request
export default async function handler(req, res) {
  //get the data from the file system
  let data = await fs.promises.readdir("blogdata");

  //get the count from the query string
  data = data.slice(0, parseInt(req.query.count));
  
  //allBlogs is an array of objects
  let allBlogs = [];

  //loop through the data array
  for (let index = 0; index < data.length; index++) {
    //get the file name
    const item = data[index];

    //read the file
    let myBlogs = await fs.promises.readFile("blogdata/" + item, "utf-8");

    //add the file to the array
    allBlogs.push(JSON.parse(myBlogs));
  }

  //return the array
  res.status(200).json(allBlogs);
}

