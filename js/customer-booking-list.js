const bookingTable = document.getElementById("bookingTable");

const usr = JSON.parse(localStorage.getItem("activeUser"));
const usrID = usr._id;

let itemId = "";

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
    bookingTable.innerHTML = "";
    data.forEach((item) => {
      if (item?.serviceDetails?.userrID === usrID) {
        const bID = document.getElementById("bID");
        bID.value = item._id;
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
        R${parseInt(item?.servicePrice).toFixed(2)}
    </td>
    <td class="">
    <div class="dropdown ms-auto flex justify-conent-end">
    <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      <i class="fas fa-ellipsis-v"></i>
    </button>
    <ul class="dropdown-menu">
      <li><button data-bs-toggle="modal" data-bs-target="#deleteModal" data-id="${
        item._id
      }" class="deleteBtn dropdown-item">
      <i class="fas fa-times" data-id="${item._id}"></i> <span data-id="${
          item._id
        }">Cancel Booking</span> 
      </button></li>
      <li><button data-bs-toggle="modal" data-bs-target="#reviewModal" data-id="${
        item._id
      }" class="deleteBtn dropdown-item">
      <i class="fas fa-star ms-0" data-id="${item._id}"></i> <span data-id="${
          item._id
        }">Review</span> 
      </button></li>
      <li><button class="dropdown-item"><i class="fas fa-calendar"></i> Postpone Booking</button></li>
    </ul>
<div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
     
      <div class="modal-body text-center">
        <div className="text-center flex justify-contents-center">
        <h5>Are you sure you want to cancel your booking?</h5>
        <p>
        You will get your money back, if cancelled two hours before the appointment, otherwise a 30% fee will be charged.
        </p>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary deleteBooking" id="deleteBookingBtn" data-id="${
          item._id
        }">Yes, Continue</button>
      </div>
    </div>
  </div>
</div>

  </div>
    </td>
                `;
        bookingTable.appendChild(tr);

        const deleteBookings = document.getElementsByClassName("deleteBooking");

        for (let i = 0; i < deleteBookings.length; i++) {
          deleteBookings[i].addEventListener("click", (e) => {
            itemId = e.target.getAttribute("data-id");
            console.log(itemId);
            fetch(
              `https://serenity-well-server.vercel.app/api/v1/customerBookings/${itemId}`,
              {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                alert("Booking cancelled successfully");
                window.location.reload();
              });
          });
        }
      }
    });
  });

// const deleteBtns = document.querySelectorAll(".deleteBtn");
// deleteBtns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     // get all attributes of the clicked button
//     const id = e.target.getAttribute("data-id");
//     console.log(id);
//   });
// });


