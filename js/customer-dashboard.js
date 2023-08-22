const avatar = document.querySelector('#avatar');

const activeUser = JSON.parse(localStorage.getItem('activeUser'));

if(activeUser){
    // get fullName from activeUser and display only the first letter of the words in avatar as innerText
    const fullName = activeUser.fullName.split(" ").slice(0, 2).join(" ");
    const firstLetter = fullName.split(' ').map(word => word[0]).join('');
    avatar.innerText = firstLetter;
}