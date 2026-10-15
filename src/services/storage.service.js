import ImageKit, { toFile } from "@imagekit/nodejs";
import fs from "fs";

const client = new ImageKit({
  privateKey: process.env["IMAGEKIT_PRIVATE_KEY"], 
});

const response = await client.files.upload({
  file: fs.createReadStream("path/to/file"),
  fileName: "file-name.jpg",
});

console.log(response)

await client.files.upload({
  file: fs.createReadStream("/path/to/file"),
  fileName: "fileName",
});


await client.files.upload({
  file: new File(["my bytes"], "file"),
  fileName: "fileName",
});


await client.files.upload({
  file: await fetch("https://somesite/file"),
  fileName: "fileName",
});

// Finally, if none of the above are convenient, you can use our `toFile` helper:
await client.files.upload({
  file: await toFile(Buffer.from("my bytes"), "file"),
  fileName: "fileName",
});
await client.files.upload({
  file: await toFile(new Uint8Array([0, 1, 2]), "file"),
  fileName: "fileName",
});
