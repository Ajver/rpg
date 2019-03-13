
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
   
    removeCurtain();
  }

  window.onload = () => {
    let mainContent = document.querySelector('main').innerHTML;

    document.querySelector('body').innerHTML = pageBodyFrame;
    document.querySelector('main').innerHTML = mainContent;

    initSystems();
  }

  const removeCurtain = () => {
    document.querySelector('body').classList.add('loaded');
  } 

  const pageBodyFrame = `
    <header class="page-header">
      <div class="top-bar">
        <h1 class="page-logo" id="page-logo">RPG</h1>
        <nav class="main-nav">
          <a href="index.html">Wstęp</a>
          <a href="systems.html">Systemy&nbsp;&nbsp;RPG</a>
          <a href="gallery.html">Galeria</a>
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