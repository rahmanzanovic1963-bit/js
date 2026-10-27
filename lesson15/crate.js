let input1 = document.getElementById("intitle");
let input2 = document.getElementById("image");
let input3 = document.getElementById("inprise");
let createbtn = document.querySelector("inbutton");

const API = "https://66dfd7322fb67ac16f2740dd.mockapi.io/product";

async function createservis() {
  const payload = {
    name: input1.value,
    avatar: input2.value,
    inprice: input3.value,
  };

  try {
    const res = await fetch(API, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

createbtn.addEventListener("click", createservis);
