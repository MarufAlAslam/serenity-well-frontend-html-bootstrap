const bookingExtraForm = document.querySelector("#booking-extra-form");
const id = localStorage.getItem("bookingID");

bookingExtraForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;

  const haveMesageTable = form.haveMesageTable.value;
  const isRequiredStairs = form.isRequiredStairs.value;
  const haveSerenityWellTowel = form.haveSerenityWellTowel.value;
  const healthInstruction = form.healthInstruction.value;
  const healthReminder = form.healthReminder.checked;
  const antiHarassments = form.antiHarassments.checked;

  const data = {
    haveMesageTable,
    isRequiredStairs,
    haveSerenityWellTowel,
    healthInstruction,
    healthReminder,
    antiHarassments,
  };

  console.log(data);

  // app.put("/api/v1/customerBookings/:id"

  fetch(`http://localhost:8000/api/v1/customerBookings/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ serviceExtra: data }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        alert("Booking Extra Added Successfully");
        // store user data in local storage
        window.location.href = "/customer-booking-pricing.html";
      } else {
        alert("Something Went Wrong!");
      }
    });
});
