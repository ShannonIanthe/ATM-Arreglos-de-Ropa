const navBar = () => {
    let nav = document.querySelector('nav');

    nav.innerHTML = `
    <nav id="nav-placeholder" class="navbar">
        <img class="brand-title" src="./images/logo.png" alt="brand logo"/>
        <a href="#" class="toggle-button">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>

        </a>
        <div class="navbar-links">
          <ul>
            <li><a href="./">Home</a></li>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Servicios</a></li>
        <!--    <li><a href="./"><img class="brand-title" alt="brand logo" src="./images/logo.png"/></a></li>-->
            <li><a href="#">Trabajos</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="./ofertas.html">Ofertas</a></li>

          </ul>

        </div>
      </nav>
    `
}

navBar();