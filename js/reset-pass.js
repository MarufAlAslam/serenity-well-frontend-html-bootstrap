const resetPassword = document.querySelector('#resetPassword');
const reqEmail = JSON.parse(localStorage.getItem('reqEmail'));

resetPassword.addEventListener('submit', (e) => {
    e.preventDefault();

    const form = e.target;
    const newPass = form.newPass.value;

    const password = {
        password: newPass
    }

    fetch(`http://localhost:8000/api/v1/customers/updatePassword/${reqEmail}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(password)
    })
    .then(res => res.json())
    .then(data => {
        if(data){
            alert("Password Updated Successfully");
            window.location.href = "customer-login.html";
        }
        else{
            alert("Invalid Credentials");
        }
    })
})