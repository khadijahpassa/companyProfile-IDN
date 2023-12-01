let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

function fireSweetAlert() {
    Swal.fire({
        title: "Thank You!",
        text: "We will swallow your message! 🫡",
        icon: "success",
        confirmButtonColor: "#315FE7",
        iconColor: "#FB6938",
      });
}