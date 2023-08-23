const serviceSelect = document.getElementById("serviceSelect");
let id = "";
let therapistName = "";
let price = "";
let serviceData = {};
const initiateBookingForm = document.getElementById("initiate-booking");

const user = JSON.parse(localStorage.getItem("activeUser"));

const userID = user._id;

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
      option.value = item?.serviceName;
      id = item._id;
      option.innerText = item?.serviceName;
      serviceSelect.appendChild(option);
    });
  });

// console.log(id);

serviceSelect.addEventListener("change", (e) => {
  // get service by id
  fetch(
    `http://localhost:8000/api/v1/therapistServices/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      therapistName = data.addedBy;
      price = data.price;
      serviceData = data;
    });
});


initiateBookingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;
  const service = form.service.value;
  const serviceIsFor = form.serviceIsFor.value;
  const address = form.address.value;
  const date = form.date.value;
  const isHotel = form.isHotel.value;

  const data = {
    userID,
    service,
    therapistName,
    serviceData,
    price,
    serviceIsFor,
    address,
    date,
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