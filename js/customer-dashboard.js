const avatar = document.querySelector("#avatar");

const activeUser = JSON.parse(localStorage.getItem("activeUser"));
const specializationInput = document.getElementById("specialization");
const servicesFiltered = document.querySelector("#services");

if (!activeUser) {
  window.location.href = "customer-login.html";
}

if (activeUser) {
  // get fullName from activeUser and display only the first letter of the words in avatar as innerText
  const fullName = activeUser.fullName.split(" ").slice(0, 2).join(" ");
  const firstLetter = fullName
    .split(" ")
    .map((word) => word[0])
    .join("");
  avatar.innerText = firstLetter;
}

const session = document.getElementById("session");
const num = document.getElementById("num");

// get all bookings
fetch(`https://serenity-well-server.vercel.app/api/v1/customerBookings`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => {
    session.innerHTML = data.length;
    num.innerHTML = data.length;
  });

const user = JSON.parse(localStorage.getItem("activeUser"));
const userID = user._id;
const spent = document.getElementById("spent");
let total = 0;
const bookingNumber = document.getElementById("bookingNumber");
const bookings = document.getElementById("bookings");

// get all bookings
fetch(`https://serenity-well-server.vercel.app/api/v1/customerBookings`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    data.forEach((item) => {
      if (item?.serviceDetails?.userID === userID) {
        //    get all the prices and add them together
        total = data.reduce((acc, item) => {
          return (
            acc +
            parseInt(
              item?.serviceDetails?.servicePrice
                ? parseInt(item?.serviceDetails?.servicePrice)
                : 0
            )
          );
        }, 0);
      }
    });

    spent.innerHTML = `${total.toFixed(2)}`;
    bookingNumber.innerHTML = data.length;
    bookings.innerHTML = data.length;
  });

// specializationInput.addEventListener("keyup", (e) => {
//   const value = e.target.value;
//   if (value !== "") {
//     servicesFiltered.innerHTML = "";
//     fetch(`https://serenity-well-server.vercel.app/api/v1/therapistServices/${value}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data) {
//           console.log(data);
//           data.forEach((item) => {
//             const service = document.createElement("div");
//             const fullName = item.addedBy.split(" ").slice(0, 2).join(" ");
//             const firstLetter = fullName
//               .split(" ")
//               .map((word) => word[0])
//               .join("");
//             service.classList.add("col-md-6");
//             service.innerHTML = `
//               <div class="col-md-12 p-2">
//                             <div class="card p-0 border rounded-2 overflow-hidden">
//                               <div class="row">
//                                 <div class="col-md-3 d-flex justify-content-center align-items-center fs-1 fw-bold text-white p-3 p-0 bg-green">
//                                ${firstLetter}
//                                 </div>
//                                 <div class="col-md-4 m-auto p-2">
//                                   <h6>
//                                       ${item.addedBy}
//                                   </h6>
//                                   <p class="fs-14 mb-1">
//                                     Experience:
//                                     <span class="fs-10 d-block"
//                                       >5 years experience</span
//                                     >
//                                   </p>
//                                   <p class="fs-14 mb-2">
//                                     Accreditation:
//                                     <span class="fs-10 d-block"
//                                       >
//                                       ${
//                                         item.qualifications.isMember
//                                           ? "Member of the Therapist Board"
//                                           : "Not a Member of the Therapist Board"
//                                       }
//                                       </span
//                                     >
//                                   </p>

//                                   <div
//                                     class="flex fs-14 justify-content-between align-items-center"
//                                   >
//                                     <span>
//                                       4.3 <i class="fa fa-star text-warning"></i>
//                                     </span>
//                                     <span>(107 Reviews) </span>
//                                   </div>
//                                 </div>
//                                 <div
//                                   class="col-md-4 h-full d-flex flex-column justify-content-between ps-0 border-start"
//                                 >
//                                   <div class="text-end mb-1">
//                                     <span class="bage d-inline-block px-3 py-1">
//                                       Services:
//                                     </span>

//                                     <p class="fs-12 text-start my-4 ps-3">
//                                       <b>Nail Care:</b> ${
//                                         item.serviceDetails.nailCare
//                                       } <br />
//                                       <b>Masaage:</b> ${
//                                         item.serviceDetails.massage
//                                       } <br />
//                                       <b>Facials:</b> ${
//                                         item.serviceDetails.facials
//                                       }
//                                     </p>

//                                     <a href="customer-book.html?id=${item._id}"
//                                       class="btn-green block bookbtn w-100 py-2 fs-14 btn w-100"
//                                     >
//                                       Book Now
//                                     </a>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//               `;
//             servicesFiltered.appendChild(service);
//             // flag = 1;
//           });
//         }
//       });
//   }
// });
