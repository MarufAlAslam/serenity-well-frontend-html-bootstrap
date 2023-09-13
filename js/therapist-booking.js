const therapistBooking = document.getElementById("therapistBooking");

const therapist = JSON.parse(localStorage.getItem("activeTherapist"));
const therapistName = therapist.fullname;

let customerName = "";

fetch("https://serinity-well-server.vercel.app/api/v1/customerBookings", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    data.forEach((item) => {
      const div = document.createElement("div");
      if (item?.serviceDetails?.therapistName === therapistName) {
        div.innerHTML = `<div class="mt-2 bg-green-50 p-3 rounded" id="therapistBooking">
      <div class="d-flex justify-content-between align-items-center">
      <div class="">
              <p class="mb-0">Therapist</p>
              <p class="fs-11 mb-0">
                  ${item?.serviceDetails?.therapistName}
              </p>
          </div>
          <div class="">
              <p class="mb-0">Date</p>
              <p class="fs-11 mb-0">
                  ${item?.serviceDetails?.date}
              </p>
          </div>
          <div class="">
              <p class="mb-0">Clients</p>
              <p class="fs-11 mb-0">
                  1Person
              </p>
          </div>
          <div class="">
              <p class="mb-0">Duration</p>
              <p class="fs-11 mb-0">
                  ${item?.serviceDetails?.serviceData?.qualifications?.completeTime}
              </p>
          </div>
          <div class="">
              <p class="mb-0">Area</p>
              <p class="fs-11 mb-0">
                  ${item?.serviceDetails?.address}
              </p>
          </div>
          <div class="">
              <p class="mb-0">Service</p>
              <p class="fs-11 mb-0">
                  ${item?.serviceDetails?.serviceData?.serviceDetails?.nailCare},
                  ${item?.serviceDetails?.serviceData?.serviceDetails?.masage},
                  ${item?.serviceDetails?.serviceData?.serviceDetails?.facials}
              </p>
          </div>
          <div class="bg-green rounded-circle p-0">
              <img src="img/dot.png" alt="">
          </div>
      </div>
  </div>
    `;
      }
      therapistBooking.appendChild(div);
    });
  });
