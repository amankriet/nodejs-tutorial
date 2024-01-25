import { EventEmitter } from "events";

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("tankFull", () => {
  console.log("Water Tank is full. Please turn off the motor!");
  setTimeout(() => {
    console.log("Gentle reminder, please turn off the motor!");
  }, 2000);
});

console.log("Motor Started!");
myEmitter.emit("tankFull");
console.log("Motor is still running!");
