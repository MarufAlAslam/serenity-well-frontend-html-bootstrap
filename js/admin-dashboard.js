const therapistCount = document.getElementById("therapistCount");
const therapistTable = document.getElementById("therapist-table");
// get therapist count

fetch("https://serenity-well-server.vercel.app/api/v1/therapists", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => {
    therapistCount.innerText = data.length;
    data.forEach((therapist) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td class="border-0 p-3">
      <a href="therapist-profile.html?id=${therapist._id}">
      ${therapist.fullname}
      </a>
      </td>
      <td class="border-0 p-3">
        ${therapist.email}
      </td>
      <td class="border-0 p-3">
        ${therapist.phone}
      </td>
      <td class="border-0 p-3">
      ${therapist.address}
      </td>
      <td class="border-0 p-3">
        <button class="btn">
          <i class="fa fa-ellipsis-v"></i>
        </button>
      </td>`;
      therapistTable.appendChild(tr);
    });
  });

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

    totalIncome.innerHTML = `${total.toFixed(2)}`;
  });
