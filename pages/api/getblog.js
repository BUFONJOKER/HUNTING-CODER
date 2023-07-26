// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

//handle the request
export default function handler(req, res) {

  //get the data from the file system
  fs.readFile(
    `blogdata/${req.query.slug}.json`,
    (err, data) => {
      //if there is an error
      if (err) {
        //return a 500 error
        res.status(500).json({ error:"No such blog exist"});
      }
      //return the data
      res.status(200).json(JSON.parse(data));

    }
  );
  
}
