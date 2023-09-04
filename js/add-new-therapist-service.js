const addServiceForm = document.querySelector("#add-service-form");

const activeTherapist = JSON.parse(localStorage.getItem("activeTherapist"));
const therapistName = activeTherapist.fullname;

addServiceForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;

  const serviceName = form.serviceName.value;
  const specialization = form.specialization.value;
  const price = form.price.value;
  const nailCare = form.nail.value;
  const masage = form.masage.value;
  const facials = form.facials.value;

  // qualifications details
  const serenityClass = form.serenityClass.value;
  const qualificationType = form.qualificationType.value;
  const completeTime = form.completeTime.value;
  const trainner = form.trainner.value;
  const isMember = form.isMember.checked;
  const capture = form.capture.value;
  const isAgreed = form.isAgreed.checked;

  const data = {
    serviceName,
    addedBy: therapistName,
    price,
    serviceDetails: {
      specialization,
      nailCare,
      masage,
      facials,
    },
    qualifications: {
      serenityClass,
      qualificationType,
      completeTime,
      trainner,
      isMember,
      capture,
      isAgreed,
    },
  };

  console.log(data);

  fetch("http://localhost:8000/api/v1/addTherapistService", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        alert("Service Added Successfully");
        // store user data in local storage
        window.location.href = "therapist-dashboard.html";
      } else {
        alert("Something Went Wrong!");
      }
    });
});
