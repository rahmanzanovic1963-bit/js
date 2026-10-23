let array = [
  {
    id: 1,
    title: "BESTSELLER",
    image: "./logo.png/image copy 2.png",
    desc: "Trendy models of our experts, for the love of your life selected",
    price: 100,
  },
  {
    id: 2,
    title: "BESTSELLER",
    image: "./logo.png/image copy 2.png",
    desc: "Trendy models of our experts, for the love of your life selected",
    price: 100,
  },
  {
    id: 3,
    title: "BESTSELLER",
    image: "./logo.png/image copy 2.png",
    desc: "Trendy models of our experts, for the love of your life selected",
    price: 100,
  },
  {
    id: 4,
    title: "BESTSELLER",
    image: "./logo.png/image copy 2.png",
    desc: "Trendy models of our experts, for the love of your life selected",
    price: 100,
  },
];

let products = document.querySelector(".products");

let show = array.map((item) => {
  return `
        <div class="cart">
            <img src="${item.image}" alt="">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
            <p>Price: $${item.price}</p>
            <button>Discover now</button>
        </div>
    `;
});

products.innerHTML = show.join("");

let array1 = [
  {
    id: 1,
    title: "123GOLD",
    image: "./logo.png/image copy 2.png",
    desc: "Gold 585 | 0,100 ct. | tw, si",
    price: "365,-",
    discount: false,
  },
  {
    id: 2,
    title: "123GOLD",
    image: "./logo.png/image copy 2.png",
    desc: "Gold 585 | 0,100 ct. | tw, si",
    price: "365,-",
    discount: false,
  },
  {
    id: 3,
    title: "123GOLD",
    image: "./logo.png/image copy 2.png",
    desc: "Gold 585 | 0,100 ct. | tw, si",
    price: "365,-",
    discount: true,
  },
  {
    id: 4,
    title: "123GOLD",
    image: "./logo.png/image copy 2.png",
    desc: "Gold 585 | 0,100 ct. | tw, si",
    price: "365,-",
    discount: false,
  },
  {
    id: 5,
    title: "123GOLD",
    image: "./logo.png/image copy 2.png",
    desc: "Gold 585 | 0,100 ct. | tw, si",
    price: "365,-",
    discount: false,
  },
  {
    id: 6,
    title: "123GOLD",
    image: "./logo.png/image copy 2.png",
    desc: "Gold 585 | 0,100 ct. | tw, si",
    price: "365,-",
    discount: false,
  },
  {
    id: 7,
    title: "123GOLD",
    image: "./logo.png/image copy 2.png",
    desc: "Gold 585 | 0,100 ct. | tw, si",
    price: "365,-",
    discount: false,
  },
  {
    id: 8,
    title: "123GOLD",
    image: "./logo.png/image copy 2.png",
    desc: "Gold 585 | 0,100 ct. | tw, si",
    price: "365,-",
    discount: false,
  },
  {
    id: 9,
    title: "123GOLD",
    image: "./logo.png/image copy 2.png",
    desc: "Gold 585 | 0,100 ct. | tw, si",
    price: "365,-",
    discount: false,
  },
  {
    id: 10,
    title: "123GOLD",
    image: "./logo.png/image copy 2.png",
    desc: "Gold 585 | 0,100 ct. | tw, si",
    price: "365,-",
    discount: false,
  },
];

let products1 = document.querySelector(".products1");

let show1 = array1.map((item) => {
  return `
        <div class="cart">
            ${item.discount ? '<div class="badge">-10%</div>' : ""}
            <div class="img1"><img src="${item.image}" alt=""></div>
            <h3 class="brand">${item.title}</h3>
            <p class="desc">${item.desc}</p>
            <p class="price">€ ${item.price}</p>
        </div>
    `;
});

products.innerHTML = show1.join("");

// -------------------------------------------

let openbtn = document.getElementById("open");
let modal = document.querySelector(".modal");

openbtn.onclick = function () {
  modal.style.displey = "block";
};
