const therapistForm = document.querySelector("#therapist-login-form");

// if local storage has activeUser, redirect to customer-dashboard.html
const activeTherapist = JSON.parse(localStorage.getItem("activeTherapist"));

if (activeTherapist) {
  window.location.href = "/therapist-dashboard.html";
}

therapistForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;

  const email = form.email.value;
  const password = form.password.value;

  const data = {
    email,
    password,
  };

  fetch("https://serinity-well-server.vercel.app/api/v1/therapistLogin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        alert("Login Successful");
        // store user data in local storage
        localStorage.setItem("activeTherapist", JSON.stringify(data));
        window.location.href = "/therapist-dashboard.html";
      }
      else{
        alert("Invalid Credentials");
      }
    });
});
