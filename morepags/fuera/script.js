window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
    });
});

function showImage(imageId, rotation) {
    const sky = document.querySelector('#image-360');
    sky.setAttribute('src', imageId);
    sky.setAttribute('rotation', rotation);
    sky.emit('fade'); // Inicia la animación de desvanecimiento
  }
  function changeSky(imageId, rotation) {
    const sky = document.querySelector('#image-360');
    
    // Inicia la animación de desvanecimiento hacia negro
    sky.emit('fade');
    
    // Cambia la imagen después de un pequeño retraso para permitir el fade-out
    setTimeout(() => {
      sky.setAttribute('src', imageId);
      sky.setAttribute('rotation', rotation);
      sky.emit('fadeback'); // Inicia la animación de desvanecimiento de regreso al color original
    }, 300); // Alineado con la duración de la animación `fade` (300 ms)
  }
  let menu_icon_box = document.querySelector(".menu_icon_box");
let box = document.querySelector(".box");


menu_icon_box.onclick = function(){
    menu_icon_box.classList.toggle("active");
    box.classList.toggle("active_box");
}
document.onclick = function(e){
    if (!menu_icon_box.contains(e.target) && !box.contains(e.target) ) {
        menu_icon_box.classList.remove("active");
        box.classList.remove("active_box");
    }
}

function updateSky(imageId, buttonElement) {
  const sky = document.querySelector('#image-360');
  const buttons = document.querySelectorAll('.link');

  // Emit the fade-out event
  sky.emit('fade');

  // Reactivate all buttons
  buttons.forEach(button => {
    button.setAttribute('material', 'opacity', 1); // Restablece la opacidad completa para todos los botones
    button.setAttribute('class', 'link'); // Reactiva todos los botones
  });

  // Set a timeout to change the sky image and disable the clicked button
  setTimeout(() => {
    sky.setAttribute('src', imageId);
    buttonElement.setAttribute('material', 'opacity', 0.5); // Reduce la opacidad del botón desactivado
    buttonElement.setAttribute('class', ''); // Desactiva el botón actual
    sky.emit('fadeback'); // Emit the fade-in event
  }, 500); // Duración que coincide con la animación fade
}

function toggleMenu() {
  document.querySelector('.box').classList.toggle('active_box');
  document.querySelector('.menu_icon_box').classList.toggle('active');
}