const addAdminForm = document.getElementById("admin-add-form");

addAdminForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;

  const email = form.email.value;
  const password = form.password.value;
  const roll = "admin";

  const data = {
    email,
    password,
    roll,
  };

  fetch("https://serinity-well-server.vercel.app/api/v1/addAdmin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        alert("Admin added successfully");
      }
    });
});
