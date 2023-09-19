const bookingId = localStorage.getItem("bookingID");
const pricing = document.getElementById("pricing");

const pricingForm = document.getElementById("pricingForm");

pricingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;
  const servicePrice = form.servicePrice.value;

  console.log(servicePrice);
  fetch(
    `https://serenity-well-server.vercel.app/api/v1/customerBookings/${bookingId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ servicePrice: servicePrice }),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        console.log(data)
        alert("Booking Extra Added Successfully");
        localStorage.setItem("bookingID", data.insertedId);
        localStorage.setItem("servicePrice", servicePrice);
        // store user data in local storage
        // window.location.href = "/customer-booking-confirmation.html";
        const pricing = document.getElementById("pricing");
        const confirmation = document.getElementById("confirmation");

        pricing.style.display = "none";
        confirmation.style.display = "block";

        $('.tab-link').removeClass('active');
        $('#confirmationbtn').addClass('active');
      } else {
        alert("Something Went Wrong!");
      }
    });
});
