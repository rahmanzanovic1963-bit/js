const API = "https://66dfd7322fb67ac16f2740dd.mockapi.io/product";
let result = document.querySelector(".result");
async function getService() {
  try {
    const res = await fetch(API);
    const data = await res.json("");
    console.log(data);
    showService(data);
  } catch (error) {
    console.log(error);
    result.innerHTML = "NOT FOUNT 404";
  }
}
getService();

async function showService(data) {
  result.innerHTML = data
    .map((item) => {
      return `
         <div class="service">
        <img src="${item.avatar}" alt="">
        <div class="info">
            <b>${item.name}</b>
            <p>${item.price}</p>
        </div>
        <div class="btns">
            <button class="update">update</button>
            <button onclick='deleteServis(${item.id})' class="delete">deleete</button>
        </div>
    </div>
        `;
    })
    .join("");
}

async function deleteServis(id) {
  let check = confirm("сиз очр клар");

  try {
    const res = await fetch(`${API}/%{id}`, {
      method: "delete",
    });
    if (res.status === 200) {
      getService();
    }
  } catch (error) {}
}
