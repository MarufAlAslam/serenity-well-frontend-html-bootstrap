const therapistSignupForm = document.querySelector("#therapist-signup-form");

therapistSignupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;

  const area = form.area.value;
  const fullname = form.fullname.value;
  const address = form.address.value;
  const email = form.email.value;
  const phone = form.phone.value;
  const password = form.password.value;
  const roll = "therapist";

  const data = {
    area,
    fullname,
    address,
    email,
    phone,
    password,
    roll,
  };

  fetch("http://localhost:8000/api/v1/addTherapist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        window.location.href = "therapist-confirm.html";
      }
    });
});
