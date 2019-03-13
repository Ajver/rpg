
(function(){

  const initSystems = () => {
    const getElementHeight = elementName => {
        return document.querySelector(elementName).clientHeight;
    }
  
    const getTopBarHeight = () => {
        return getElementHeight('.top-bar');
    }
  
    const scrollToSection = (sectionName, time) => {
        $.scrollTo($(sectionName).offset().top - getTopBarHeight(), time);
    }
  
    document.querySelector('#sword').addEventListener('click', () => {
        scrollToSection('main', 500);
    });
  }

  let curtain = document.createElement('div');
  curtain.classList.add('loading-curtain');
  curtain.style = `
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: black;
    z-index: 1000;
  `;
  document.querySelector('html').appendChild(curtain);

  window.onload = () => {
    let mainContent = document.querySelector('main').innerHTML;

    document.querySelector('head').innerHTML = pageHeadFrame;
    document.querySelector('body').innerHTML = pageBodyFrame;
    document.querySelector('main').innerHTML = mainContent;
    document.querySelector('html').removeChild(curtain);

    initSystems();
  }

  const pageHeadFrame = `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RPG</title>
    <link rel="stylesheet" href="css/style.css">
  `;

  const pageBodyFrame = `
    <header class="page-header">
      <div class="top-bar">
        <h1 class="page-logo" id="page-logo">RPG</h1>
        <nav class="main-nav">
          <a href="">Wstęp</a>
          <a href="">Systemy&nbsp;&nbsp;RPG</a>
          <a href="">Galeria</a>
        </nav>
      </div>
      <div class="sword" id="sword"></div>
    </header>
    <main></main>
    <footer class="page-footer">
      <p>Wykonanie: <a href="http://zawlocki-palka.epizy.com" target="_blank">Dominik Zawlocki</a></p>
    </footer>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="js/jquery.scrollTo.min.js"></script>
    <script src="js/main.js"></script>
    <script src="js/frame.js"></script>
  `;

})();