const bookingId = localStorage.getItem("bookingID");
const pricing = document.getElementById("pricing");

fetch(`https://serinity-well-server.vercel.app/api/v1/customerBookings/${bookingId}`, {
  method: "GET",

  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const div = document.createElement("div");
    div.classList.add("pricing-card");
    div.innerHTML = `
    <h2 class="fw-bold text-center fs-1">R${data?.serviceDetails?.price}</h2>
        `;
    pricing.appendChild(div);
  });
