import fs from "fs";

// handle the request
export default async function handler(req, res) {
  // if the request is a post request
  if (req.method === "POST") {
    // get the data from the request body
    let { name, email, message } = req.body;

    // create an object
    let data = { name, email, message };

    try {
      // get the filenames in the "contactdata" directory
      let filenames = await fs.promises.readdir("contactdata");

      // write the data to a file
      await fs.promises.writeFile(
        `contactdata/${filenames.length + 1}.json`,
        JSON.stringify(data)
      );

      // return a 200 response
      res.status(200).json({ message: "Contact form submitted successfully" });
    } catch (err) {
      // if there is an error reading the directory or writing the file
      
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    // return a 405 response for any other request method
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
