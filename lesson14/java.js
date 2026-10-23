// async function name() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();
//   console.log(users);
// }
// name();

// async function getNames() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await response.json();
//   return users.map((u) => u.name);
// }

// async function main() {
//   const names = await getNames();
//   console.log(names);
// }

// main();

// async function getUsers() {
//   try {
//     const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
//     const userss = await Response.json();
//     console.log(userss.map((u) => u.phone));
//   } catch (error) {
//     console.log("ката:", error);
//   }
// }

// getUsers();

async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/user");
    if (!response.ok) throw new Error("Сервер катасы: " + response.status);
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.log("Ката чыкты:", error.message);
  }
}

getUsers();
