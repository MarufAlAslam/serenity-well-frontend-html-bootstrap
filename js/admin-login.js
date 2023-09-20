const adminLoginForm = document.getElementById("admin-login-form");

adminLoginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;

  const email = form.email.value;
  const password = form.password.value;

  const data = {
    email,
    password,
  };

  console.log(data);

  fetch("http://localhost:8000/api/v1/adminLogin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        window.location.href = "admin-dashboard.html";
      } else {
        alert("wrong credentials!!");
      }
    });
});
