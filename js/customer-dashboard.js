const avatar = document.querySelector("#avatar");

const activeUser = JSON.parse(localStorage.getItem("activeUser"));

if (activeUser) {
  // get fullName from activeUser and display only the first letter of the words in avatar as innerText
  const fullName = activeUser.fullName.split(" ").slice(0, 2).join(" ");
  const firstLetter = fullName
    .split(" ")
    .map((word) => word[0])
    .join("");
  avatar.innerText = firstLetter;
}

const session = document.getElementById("session");
const num = document.getElementById("num");

// get all bookings
fetch(`https://serinity-well-server.vercel.app/api/v1/customerBookings`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => {
    session.innerHTML = data.length;
    num.innerHTML = data.length;
  });

const user = JSON.parse(localStorage.getItem("activeUser"));
const userID = user._id;
const spent = document.getElementById("spent");
let total = 0;
const bookingNumber = document.getElementById("bookingNumber");
const bookings = document.getElementById("bookings");

// get all bookings
fetch(`https://serinity-well-server.vercel.app/api/v1/customerBookings`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((item) => {
      if (item?.serviceDetails?.userID === userID) {
        //    get all the prices and add them together
       total = data.reduce((acc, item) => {
          return acc + parseInt(item?.serviceDetails?.price ? item?.serviceDetails?.price : 0);
        }, 0);
      }
    });

    spent.innerHTML = `${total.toFixed(2)}`;
    bookingNumber.innerHTML = data.length;
    bookings.innerHTML = data.length;
  });
