let index = 0;

const myCallBack = () => {
  console.log("Every 200ms", index);
  index++;

  if (index > 10) {
    clearInterval(myInterval);
  }
};

const myInterval = setInterval(myCallBack, 200);

console.log("THIS IS THE LOG AFTER THE INTERVAL");
