const customerLoginForm = document.getElementById("customerLoginForm");

customerLoginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;

  const email = form.email.value;
  const password = form.password.value;

  const data = {
    email,
    password,
  };

  console.log(data);

  fetch("https://serinity-well-server.vercel.app/api/v1/customerLogin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      window.location.href = "customer-dashboard.html";
    });
});
