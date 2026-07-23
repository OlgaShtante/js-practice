import { watchButtonClick } from "./buttonClick.js";
import { runSetTimeOut } from "./setTimeout.js";
import { makeSyncDelay } from "./syncDelay.js";
import runXhr from "./xmlHttpRequest.js";

console.log("sync code starts");

// blocks the thread synchronously (runs to completion before anything else)
makeSyncDelay("sync delay", 400);

// schedules an async callback for later
runSetTimeOut("setTimeout", 80);

// three async network requests, each closes over its own start time
runXhr("1st request", "https://jsonplaceholder.typicode.com/photos/1");
runXhr("2nd request", "https://jsonplaceholder.typicode.com/photos/2");
runXhr("3rd request", "https://jsonplaceholder.typicode.com/photos/3");

// waits for a user click; its closure holds the page-load time
watchButtonClick("waiting for click");

console.log("sync code ends (the async tasks above resolve after this line)");
