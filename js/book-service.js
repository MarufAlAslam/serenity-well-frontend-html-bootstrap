const serviceName = document.getElementById("service-name");
const therapistName = document.getElementById("therapist-name");
const price = document.getElementById("price");
const serviceDetails = document.getElementById("serviceDetails");
const qualificationType = document.getElementById("qualificationType");
const completeTime = document.getElementById("completeTime");
const trainner = document.getElementById("trainner");
const serenityClass = document.getElementById("serenityClass");

const bookService = document.getElementById("bookService");

// get the id from query param
const urlParams = new URLSearchParams(window.location.search);
let id = "64e587b9f96957fa0d17aad0";
if (urlParams.has("id")) {
  id = urlParams.get("id");
}
console.log(id);

fetch(
  `https://serenity-well-server.vercel.app/api/v1/therapistServices/${id}`,
  {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }
)
  .then((res) => res.json())
  .then((data) => {
    serviceName.innerHTML = data.serviceName;
    therapistName.innerHTML = data.addedBy;
    price.innerHTML = data.price;

    const span1 = document.createElement("span");
    span1.innerHTML = data.serviceDetails.nailCare;
    serviceDetails.appendChild(span1);

    const span2 = document.createElement("span");
    span2.innerHTML = data.serviceDetails.massage;
    serviceDetails.appendChild(span2);

    const span3 = document.createElement("span");
    span3.innerHTML = data.serviceDetails.facials;
    serviceDetails.appendChild(span3);

    qualificationType.innerHTML = data.qualifications.qualificationType;
    completeTime.innerHTML = data.qualifications.completeTime;
    trainner.innerHTML = data.qualifications.trainner;
    serenityClass.innerHTML = data.qualifications.serenityClass;
  });
