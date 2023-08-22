const serviceSelect = document.getElementById("serviceSelect");
let id = "";
const initiateBookingForm = document.getElementById("initiate-booking");

fetch("http://localhost:8000/api/v1/therapistServices", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => {
    // create options
    data.forEach((item) => {
      const option = document.createElement("option");
      option.value = item._id;
      id = item._id;
      option.innerText = item.serviceDetails.specialization;
      serviceSelect.appendChild(option);
    });
  });

// console.log(id);

initiateBookingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;
  const service = form.service.value;
  const serviceIsFor = form.serviceIsFor.value;
  const address = form.address.value;
  const isHotel = form.isHotel.value;

  const data = {
    service,
    serviceIsFor,
    address,
    isHotel,
  };

  fetch(`http://localhost:8000/api/v1/addCustomerBooking`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ serviceDetails: data }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        alert("Booking Successful");
        
        localStorage.setItem("bookingID", data.insertedId);
        // store user data in local storage
        window.location.href = "/customer-booking-extra.html";
      } else {
        alert("Something Went Wrong!");
      }
    });
});


console.log(id);