const customerLoginForm = document.getElementById("customerLoginForm");

// if local storage has activeUser, redirect to customer-dashboard.html
const activeUser = JSON.parse(localStorage.getItem("activeUser"));

if (activeUser) {
  window.location.href = "customer-dashboard.html";
}

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
      if(data){
        alert("Login Successful");
        // store user data in local storage
        localStorage.setItem("activeUser", JSON.stringify(data));
        window.location.href = "customer-dashboard.html";
      }
      else{
        alert("Invalid Credentials");
      }
    });
});
