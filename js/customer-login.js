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

  fetch("https://serenity-well-server.vercel.app/api/v1/customerLogin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        console.log(data);
        
        // send email to user

        const sender = "serenitywell03@gmail.com";
        const password = "50032CC4F79A56D07AAD309E184165C002BC";
        const server = "smtp.elasticemail.com";
        const port = 2525;
        const receiver = data.result.email;
        const subject = "Serenity Well - OTP";
        const message = `Your OTP is ${data.otpCode}`;

        //  send email using smtp
        Email.send({
          Host: server,
          Port: port,
          Username: sender,
          Password: password,
          To: receiver,
          From: sender,
          Subject: subject,
          Body: message,
        }).then((message) => {
          console.log(message);
          alert("OTP Sent!");
          // store user data in local storage
          localStorage.setItem("activeUser", JSON.stringify(data));
          
          window.location.href = "customer-otp.html";
        });
      } else {
        alert("Invalid Credentials");
      }
    });
});
