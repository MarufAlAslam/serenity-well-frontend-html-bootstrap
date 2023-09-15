const confirmCard = document.querySelector("#confirm-card");

const bookingID = localStorage.getItem("bookingID");

// console.log(bookingID);

fetch(`http://localhost:8000/api/v1/customerBookings/${bookingID}`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => {
    confirmCard.innerHTML = `
    <div class="card-body">
                                     
                                        <div class="d-flex mt-4 justify-content-between align-items-center">
                                            <div class="d-flex justify-content-start align-items-center gap-3">
                                                <i class="fa fa-map-marker-alt lead"></i>
                                                <div class="">
                                                    <p class="mb-0 lead fw-bold">
                                                        Date
                                                    </p>
                                                    <p class="mb-0 lead">
                                                        ${
                                                          data.serviceDetails
                                                            .date
                                                        } : ${
      data.serviceDetails.time
    }
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-end align-items-center gap-3">
                                                <button class="btn">
                                                    <i class="fa fa-edit lead"></i>
                                                </button>
                                                <button class="btn">
                                                    <i class="fa fa-trash-alt lead"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="d-flex mt-4 justify-content-between align-items-center">
                                            <div class="d-flex justify-content-start align-items-center gap-3">
                                                <i class="fa fa-map-marker-alt lead"></i>
                                                <div class="">
                                                    <p class="mb-0 lead fw-bold">
                                                        Address
                                                    </p>
                                                    <p class="mb-0 lead">
                                                        ${
                                                          data.serviceDetails
                                                            .address
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-end align-items-center gap-3">
                                                <button class="btn">
                                                    <i class="fa fa-edit lead"></i>
                                                </button>
                                                <button class="btn">
                                                    <i class="fa fa-trash-alt lead"></i>
                                                </button>
                                            </div>
                                        </div>
    
                                        <hr class="my-5">
    
                                        <p class="lead fw-bold">
                                            Therapist Booked
                                        </p>
                                        <div class="col-md-6 m-auto">
                                            <div class="card border mb-4">
                                                <div class="card-body px-4">
                                                    <div class="row">
                                                        <div class="col-5 bg-green text-white d-flex justify-content-center align-items-center fs-1 fw-bold rounded">
                                                            ${data.serviceDetails.therapistName
                                                              .split(" ")
                                                              .map(
                                                                (word) =>
                                                                  word[0]
                                                              )
                                                              .join("")}
                                                                
                                                        </div>
                                                        <div class="col-6 m-auto ps-4">
                                                            <p class="fw-bold">
                                                                ${
                                                                  data
                                                                    .serviceDetails
                                                                    .therapistName
                                                                }
                                                            </p>
                                                            <p class="fs-14">
                                                                <b>Experience:</b> <br>
                                                                5 years experience
                                                            </p>
                                                            <p class="fs-14">
                                                                <b>Accreditation:</b> <br>
                                                                ${
                                                                  data
                                                                    ?.serviceDetails
                                                                    ?.serviceData
                                                                    ?.qualifications
                                                                    ?.isMember
                                                                    ? "Member of the Therapist Board"
                                                                    : "Not a Member of the Therapist Board"
                                                                }
                                                            </p>
                                                            <p class="fs-14 mb-0">
                                                                4.3 <i class="fa fa-star text-warning"></i> (107 Reviews)
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
    
    
                                        </div>
    
                                        <table class="table va-middle mb-0">
                                            <tr>
                                                <td class="border-0">
                                                    <p class="fw-bold mb-0">
                                                        ${
                                                          data?.serviceDetails
                                                            ?.serviceData
                                                            ?.qualifications
                                                            ?.completeTime
                                                        }
                                                    </p>
                                                </td>
                                                <td class="border-0">
                                                    <p class="mb-0">
                                                    ${
                                                      data?.serviceDetails
                                                        ?.serviceData
                                                        ?.serviceDetails
                                                        ?.specialization
                                                    }
                                                    </p>
                                                </td>
                                                <td class="border-0">
                                                    <p class="fw-bold text-green mb-0">
                                                        R${
                                                          data?.servicePrice
                                                            ? data?.servicePrice
                                                            : data
                                                                ?.serviceDetails
                                                                ?.serviceData
                                                                ?.price
                                                        }
                                                    </p>
                                                </td>
                                                <td class="border-0">
                                                    <p class="mb-0 fw-bold">
                                                        ${
                                                          data?.serviceDetails
                                                            ?.date
                                                        }
                                                    </p>
                                                </td>
                                                <td class="border-0 text-end">
                                                    <a href="customer-booking-payment.html" class="btn btn-green w-auto px-5" id="booking-confirm">
                                                        Next
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
    `;
  });

//   console.log(bookingData);

const bookingConfirm = document.querySelector("#booking-confirm");

bookingConfirm.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "customer-booking-payment.html";
});
