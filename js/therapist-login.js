const therapistForm = document.querySelector("#therapist-login-form");

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
        window.location.href = "/therapist-dashboard.html";
      }
    });
});
