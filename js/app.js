window.addEventListener('load', function(event) {
  var listNaveg = document.querySelector('.navbar-btn-list');
  var listNavegation = document.querySelector('.navbar-list');
  var listPadreNavegacion = document.createElement('ul');

  function navbarList(event) {
    var list = ['About', 'Services', 'Contact'];

    for (var i = 0 ; i < list.length; i++) {
      var listHijoNavegacion = document.createElement('li');
      listHijoNavegacion.textContent = list[i];
      listPadreNavegacion.appendChild(listHijoNavegacion);
    }
    console.log(listPadreNavegacion);
    listPadreNavegacion.style.color = 'white';
    // listPadreNavegacion.classList('.list-desplegable');
    // listNavegation.classList.toggle('.view-desktop');
    // listNavegation.classList.toggle('.view-desktop');
    // console.log(document.querySelector('.navbar-list').firstChild);
    // console.log((document.querySelector('.navbar-list').lastElementChild).classList.toggle('.view-mobile'));
    // (document.querySelector('.navbar-list').lastElementChild).classList.toggle('');
    var navBar = document.querySelector('.nav-bar');
    navBar.appendChild(listPadreNavegacion);
  }

  listNaveg.addEventListener('click', navbarList);
  // listNavegation.classList.toggle('.view-desktop');
});
