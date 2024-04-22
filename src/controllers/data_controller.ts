import { Socket, Server } from "socket.io";

export function dataController(io: Server, socket: Socket) {
  const sendMessage = (payload: any) => {
    try {
      console.log(payload);
      io.emit("send_message", payload);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  socket.on("send_data", sendMessage);
}
