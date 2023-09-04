const customerSignUpForm = document.getElementById("customer-signup-form");

customerSignUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Customer Sign Up Form Submitted");

  const form = e.target;

  const country = form.country.value;
  const fullName = form.fullName.value;
  const address = form.address.value;
  const email = form.email.value;
  const phone = form.phone.value;
  const password = form.password.value;
  const roll = "customer";

  const customer = {
    country,
    fullName,
    address,
    email,
    phone,
    password,
    roll,
  };

  //   console.log(customer);

  fetch("http://localhost:8000/api/v1/addCustomer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      window.location.href = "customer-login.html";
    });
});
