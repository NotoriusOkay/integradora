//Obetener la etiqueta para el menu
const navBar = document.querySelector('.navbar')

const createNavbar = () => {
    navBar.innerHTML +=
    `
     <ul class="links-container">
        <li class="link-item">
        <a href="#" class="link">home</a>
        </li>
        <li class="link-item">
        <a href="#" class="link">products</a>
        </li>
        <li class="link-item">
        <a href="#" class="link">about</a>
        </li>
        <li class="link-item">
        <a href="#" class="link">contact</a>
        </li>
     </ul>
     <div class="user-interactions">
        <div class="user">
            <img src="./img/user.png" class="user-icon">
            <div class="user-icon-popup">
                <p>login to your account</p>
                <a>login</a>
            </div>
        </div>
     </div>    
    `
}

createNavbar()