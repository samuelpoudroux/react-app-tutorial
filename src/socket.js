import socketIOClient from "socket.io-client";
const ENDPOINT = "localhost:8000";

export const socket = socketIOClient(ENDPOINT);
