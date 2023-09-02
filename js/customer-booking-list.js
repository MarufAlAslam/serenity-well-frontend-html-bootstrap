const bookingTable = document.getElementById("bookingTable");

const user = JSON.parse(localStorage.getItem("activeUser"));
const userID = user._id;

// get all bookings
fetch(`http://localhost:8000/api/v1/customerBookings`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((item) => {
      if (item?.serviceDetails?.userID === userID) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>
        ${item?.serviceDetails?.therapistName}
    </td>
    <td>
        ${item?.serviceDetails?.date}
    </td>
    <td>
        ${item?.serviceDetails?.address}
    </td>
    <td>
        R${parseInt(item?.serviceDetails?.price).toFixed(2)}
    </td>
    <td class="text-end">
        <button class="btn">
            <i class="fa fa-ellipsis-v"></i>
        </button>
    </td>
                `;
        bookingTable.appendChild(tr);
      }
    });
  });
