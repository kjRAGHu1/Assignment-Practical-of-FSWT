const student = {
    name: "Helsinki",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript",
    },

    name: "Milind",
    age: 16,
    projects: {
        diceGame: "Two player dice game using JavaScript",
    }
};

let myPromise = new Promise((resolve, reject) => {
    const data = "Greetings Earth!";
    setInterval(() => {
      if (data == "Greetings Earth!") {
        resolve(student);
      } else {
        reject(new Error("Error"));
      }
    }, 3000);
  });
  
  let result = myPromise.then(function (result) {
    console.log(result);
    document.getElementById("demo").textContent = JSON.stringify(result);
  });