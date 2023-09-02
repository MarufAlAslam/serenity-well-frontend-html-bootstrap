const bookingId = localStorage.getItem("bookingID");
const pricing = document.getElementById("pricing");

const pricingForm = document.getElementById("pricingForm");

// fetch(`https://serinity-well-server.vercel.app/api/v1/customerBookings/${bookingId}`, {
//   method: "GET",

//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     const div = document.createElement("div");
//     div.classList.add("pricing-card");
//     div.innerHTML = `
//     <h2 class="fw-bold text-center fs-1">R${data?.serviceDetails?.price}</h2>
//         `;
//     pricing.appendChild(div);
//   });

pricingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;
  const servicePrice = form.servicePrice.value;

  console.log(servicePrice);
  fetch(`https://serinity-well-server.vercel.app/api/v1/customerBookings/${bookingId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ servicePrice: servicePrice }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        alert("Booking Extra Added Successfully");
        // store user data in local storage
        window.location.href = "/customer-booking-confirmation.html";
      } else {
        alert("Something Went Wrong!");
      }
    });
});
