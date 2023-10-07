const therapistListing = document.querySelector("#therapist-listing");
const therapist = JSON.parse(localStorage.getItem("activeTherapist"));
const therapistName = therapist.fullname;
const therapistID = therapist._id;

const clientsNo = document.querySelector("#clientsNo");
const totalRevenue = document.querySelector("#totalRevenue");

let noOfClient = 0;
let revenues = 0;

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
    // noOfClient = data.length;

    data.forEach((item) => {
      if (item?.serviceDetails?.serviceData?.therapistID === therapistID) {
        noOfClient = noOfClient + 1;
        clientsNo.innerText = noOfClient;
        console.log(noOfClient);
        revenues += parseInt(item?.serviceDetails?.price);
        totalRevenue.innerText = `R${revenues}`;
        const div = document.createElement("div");
        div.classList.add("col-md-6");
        div.innerHTML = `
        <div class="card border-0 rounded shadow mb-4 ps-4 py-2">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-5 bg-green rounded fs-1 text-white fw-bold d-flex justify-content-center align-items-center">
                                                        ${item?.serviceDetails?.therapistName
                                                          .split(" ")
                                                          .map(
                                                            (word) => word[0]
                                                          )
                                                          .join("")}
                                                    </div>
                                                    <div class="col-6 h-100 m-auto border-2 border-green rounded p-4">
                                                        <p class="fw-bold text-center mb-4">
                                                            ${
                                                              item
                                                                ?.serviceDetails
                                                                ?.service
                                                            }
                                                        </p>
                                                        <p class="fs-14 mb-0">
                                                            Nail Care : ${
                                                              item
                                                                ?.serviceDetails
                                                                ?.serviceData
                                                                ?.serviceDetails
                                                                ?.nailCare
                                                            } <br> <br>
                                                            Massage : ${
                                                              item
                                                                ?.serviceDetails
                                                                ?.serviceData
                                                                ?.serviceDetails
                                                                ?.massage
                                                            } <br> <br>
                                                            Facials : ${
                                                              item
                                                                ?.serviceDetails
                                                                ?.serviceData
                                                                ?.serviceDetails
                                                                ?.facials
                                                            } <br> <br>

                                                            Duration : ${
                                                              item
                                                                ?.serviceDetails
                                                                ?.serviceData
                                                                ?.qualifications
                                                                ?.completeTime
                                                            } <br><br>

                                                            Price : R${
                                                              item
                                                                ?.serviceDetails
                                                                ?.price
                                                            } <br><br>

                                                            Area : ${
                                                              item
                                                                ?.serviceDetails
                                                                ?.address
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`;
        therapistListing.appendChild(div);
      }
    });
  });
