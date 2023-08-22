const activeTherapist = JSON.parse(localStorage.getItem("activeTherapist"));
const avatar = document.querySelector("#avatar");

console.log(activeTherapist);

if (activeTherapist) {
  // get fullName from activeUser and display only the first letter of the first 2 words words in avatar as innerText
  const fullName = activeTherapist.fullname.split(" ").slice(0, 2).join(" ");
  const firstLetter = fullName
    .split(" ")
    .map((word) => word[0])
    .join("");
  avatar.innerText = firstLetter;
}


// log out
const logoutBtn = document.getElementById('logout');

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('activeTherapist');
    window.location.href = 'therapist-login.html';
});