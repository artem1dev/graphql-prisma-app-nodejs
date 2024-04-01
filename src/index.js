import "dotenv/config";
import server from "./server.js";

server.start({ port: process.env.PORT }, () => {
    console.log(`🚀 Server listening at http://localhost:${process.env.PORT}`);
});
