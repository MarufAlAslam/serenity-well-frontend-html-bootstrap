const therapistCount = document.getElementById("therapistCount");
const therapistTable = document.getElementById("therapist-table");
// get therapist count

fetch("http://localhost:8000/api/v1/therapists", {
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
      ${therapist.fullname}
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

//   get all therapists
