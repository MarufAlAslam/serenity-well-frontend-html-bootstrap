const confirmCard = document.querySelector("#confirm-card");

const bookingID = localStorage.getItem("bookingID");

// console.log(bookingID);

fetch(`https://serinity-well-server.vercel.app/api/v1/customerBookings/${bookingID}`, {
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
                                                        Address
                                                    </p>
                                                    <p class="mb-0 lead">
                                                        ${data.serviceDetails.address}
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
                                        <div class="col-md-6">
                                            <div class="card border-0 shadow mb-4">
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-6">
                                                            <img src="img/booked.png" class="img-fluid w-100" alt="">
                                                        </div>
                                                        <div class="col-6 m-auto ">
                                                            <p class="fw-bold">
                                                                Nolly Johnson
                                                            </p>
                                                            <p class="fs-14">
                                                                <b>Experience:</b> <br>
                                                                5 years experience
                                                            </p>
                                                            <p class="fs-14">
                                                                <b>Accreditation:</b> <br>
                                                                Member of the Therapist Board
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
                                                        90 Min
                                                    </p>
                                                </td>
                                                <td class="border-0">
                                                    <p class="mb-0">
                                                        Sport Massage
                                                    </p>
                                                </td>
                                                <td class="border-0">
                                                    <p class="fw-bold text-green mb-0">
                                                        R750.00
                                                    </p>
                                                </td>
                                                <td class="border-0">
                                                    <p class="mb-0 fw-bold">
                                                        Once Off
                                                    </p>
                                                </td>
                                                <td class="border-0">
                                                    <button class="btn p-0">
                                                        <i class="fa fa-edit"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
    `;
  });

//   console.log(bookingData);
