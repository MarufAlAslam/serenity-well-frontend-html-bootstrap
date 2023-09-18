const bookingExtraForm = document.querySelector("#booking-extra-form");
const idd = localStorage.getItem("bookingID");

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

  fetch(
    `https://serinity-well-server.vercel.app/api/v1/customerBookings/${idd}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ serviceExtra: data }),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        alert("Booking Extra Added Successfully");
        // store user data in local storage
        // window.location.href = "/customer-booking-pricing.html";
        const extra = document.getElementById("extra");
        const pricing = document.getElementById("pricing");

        extra.style.display = "none";
        pricing.style.display = "block";

        $('.tab-link').removeClass('active');
        $('#pricingbtn').addClass('active');
      } else {
        alert("Something Went Wrong!");
      }
    });
});
