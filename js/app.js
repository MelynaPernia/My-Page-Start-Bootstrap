window.addEventListener('load', function() {
  var listNaveg = document.querySelector('.navbar-btn-list');
  var listNavegation = document.querySelector('.navbar-list');
  var listPadreNavegacion = document.createElement('ul');
  var cont = 0;
  var navBar = document.querySelector('.nav-bar');

  listNaveg.addEventListener('click', navbarList);

  function createList() {

    var list = ['About', 'Services', 'Contact'];
    for (var i = 0 ; i < list.length; i++) {
      var listHijoNavegacion = document.createElement('li');
      listHijoNavegacion.textContent = list[i];
      listPadreNavegacion.appendChild(listHijoNavegacion);
    }
    listPadreNavegacion.className = 'list-disabled list-style col-xs-12';
    navBar.appendChild(listPadreNavegacion);
  }

  function navbarList(){
    if(cont < 1){
      createList();
      cont++;
    }
    navBar.lastElementChild.classList.toggle('list-disabled');
  }

});
