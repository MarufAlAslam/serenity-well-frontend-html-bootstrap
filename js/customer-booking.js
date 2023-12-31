const serviceSelect = document.getElementById("serviceSelect");
let id = "";
let therapistName = "";
let price = "";
let serviceData = [];
const initiateBookingForm = document.getElementById("initiate-booking");

const userr = JSON.parse(localStorage.getItem("activeUser"));

const userrID = userr._id;

fetch("https://serenity-well-server.vercel.app/api/v1/therapistServices", {
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
      option.value = item?.serviceName ? item?.serviceName : item.serviceDetails.specialization;
      id = item._id;
      option.innerText = item?.serviceName ? item?.addedBy +"-"+ item?.serviceName : item?.addedBy +"-" + item.serviceDetails.specialization;
      serviceSelect.appendChild(option);
    });
  });

// console.log(id);

serviceSelect.addEventListener("change", (e) => {
  // get service by id
  fetch(
    `https://serenity-well-server.vercel.app/api/v1/therapistServices/service/${id}`,
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
  const time = form.time.value;
  const isHotel = form.isHotel.value;

  const data = {
    userrID,
    service,
    therapistName,
    serviceData,
    price,
    serviceIsFor,
    address,
    date,
    time,
    isHotel,
  };

  fetch(`https://serenity-well-server.vercel.app/api/v1/addCustomerBooking`, {
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
        // window.location.href = "/customer-booking-extra.html";
        const details_tab = document.getElementById("details_tab");
        const extra = document.getElementById("extra");
        details_tab.style.display = "none";
        extra.style.display = "block";
        $('.tab-link').removeClass('active');
        $('#extrabtn').addClass('active');
      } else {
        alert("Something Went Wrong!");
      }
    });
});

console.log(id);
