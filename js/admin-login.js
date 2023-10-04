const adminLoginForm = document.getElementById("admin-login-form");
const currentAdmin = JSON.parse(localStorage.getItem("admin"));

if (currentAdmin) {
  window.location.href = "admin-dashboard.html";
}

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

  fetch("https://serenity-well-server.vercel.app/api/v1/adminLogin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        localStorage.setItem("admin", JSON.stringify(data));
        window.location.href = "admin-dashboard.html";
      } else {
        alert("wrong credentials!!");
      }
    });
});
