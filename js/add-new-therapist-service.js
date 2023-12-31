const addServiceForm = document.querySelector("#add-service-form");

const activeTherapist = JSON.parse(localStorage.getItem("activeTherapist"));
const therapistName = activeTherapist.fullname;
const therapistID = activeTherapist._id;

addServiceForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;

  // const serviceName = form.serviceName.value;
  const specialization = form.specialization.value;
  const subSpecialization = form.subSpecialization.value;
  const price = form.price.value;
  // const nailCare = form.nail.value;
  // const massage = form.massage.value;
  // const facials = form.facials.value;

  // qualifications details
  const serenityClass = form.serenityClass.value;
  const qualificationType = form.qualificationType.value;
  const completeTime = form.completeTime.value;
  const trainner = form.trainner.value;
  const isMember = form.isMember.checked;
  const capture = form.capture.value;
  const isAgreed = form.isAgreed.checked;

  const data = {
    // serviceName,
    addedBy: therapistName,
    therapistID,
    price,
    serviceDetails: {
      specialization,
      subSpecialization,
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

  fetch("https://serenity-well-server.vercel.app/api/v1/addTherapistService", {
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
