import app from "./app";
import { Server as WebsocketServer } from "socket.io";
import http from "http";
import connetion from "../config/db";
import sockets from "./sockets";
// Function la cual escucha el servidor que estamos ejecutando;
const listingPorts = (_) => {
  try {
    //* asiganmos nuestro servicio app de express a un http esto para que el socket acepte el servicio
    const server = http.createServer(app);
    //* asignamos el puerto que va utilizar nuestro servidor
    const port = 3000 || process.env.PORT;
    //* escuchamos en que puerto se encuentra el servidor
    connetion();
    const httpServer = server.listen(port,()=> console.log(`This is server is workin in the port ${port}`));
    //* creamos nuestro servidor de websocket
    const io = new WebsocketServer(httpServer);
    sockets(io)
  } catch (error) {
    console.log(error.message);
  }
};

// creo la function para ejecutar el llamado del puerto/
listingPorts();
