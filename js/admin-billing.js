const totalIncome = document.getElementById("totalIncome");
let total = 0;

// get all bookings
fetch(`https://serenity-well-server.vercel.app/api/v1/customerBookings`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((item) => {
      total = data.reduce((acc, item) => {
        return (
          acc +
          parseInt(
            item?.serviceDetails?.price ? item?.serviceDetails?.price : 0
          )
        );
      }, 0);
    });

    totalIncome.innerHTML = `R${total.toFixed(2)}`;
  });
