const received = document.getElementById("received");
const approved = document.getElementById("approved");
const applicationTable = document.getElementById("application-table");

// get all bookings
fetch(`https://serenity-well-server.vercel.app/api/v1/customerBookings`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => {
    approved.innerHTML = data.length;
    received.innerHTML = data.length;

    data.forEach((item) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <tr>
                                    <td class="border-0 p-3">
                                    ${item?.serviceDetails?.therapistName}
                                    </td>
                                    <td class="border-0 p-3">${item?.serviceDetails?.service}</td>
                                    <td class="border-0 p-3">
                                        ${item?.serviceDetails?.serviceData?.serviceDetails?.nailCare},
                                        ${item?.serviceDetails?.serviceData?.serviceDetails?.masage},
                                        ${item?.serviceDetails?.serviceData?.serviceDetails?.facials}
                                    </td>
                                    <td class="border-0 p-3">
                                        ${item?.serviceDetails?.address}
                                    </td>
                                    <td class="border-0 p-3">
                                    Approved
                                    </td>
                                    <td class="border-0 p-3">
                                        <button class="btn">
                                            <i class="fa fa-ellipsis-v"></i>
                                        </button>
                                    </td>
                                </tr>
                                `;
      applicationTable.appendChild(tr);
    });
  });
