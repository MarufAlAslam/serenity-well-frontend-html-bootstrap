const forgotPasswordForm = document.querySelector("#forgotPassword");

forgotPasswordForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;
  const email = form.email.value;

  fetch(
    `https://serenity-well-server.vercel.app/api/v1/customers/recoverPassword/${email}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        alert("Authenticated");
        localStorage.setItem("reqEmail", JSON.stringify(email));
        window.location.href = "reset-pass.html";
      } else {
        alert("Invalid Credentials");
      }
    });
});
