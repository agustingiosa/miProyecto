window.addEventListener('scroll', function() {
    var elemento = document.querySelector('.iconoWppFixed');
    var elemento2 = document.querySelector('.iconoWppFixed2');
    var alturaDeLaVentana = window.innerHeight;
    var desplazamientoActual = window.scrollY;

    if (desplazamientoActual >= alturaDeLaVentana) {
        elemento.style.display = 'flex';
        elemento2.style.display = 'flex';
    }
    if (desplazamientoActual <= alturaDeLaVentana) {
        elemento.style.display = 'none';
        elemento2.style.display = 'none';
    }
});

window.addEventListener('scroll', function() {
    var elemento = document.querySelector('.navbar');
    var colorNavbar = document.querySelectorAll('.nav-link');
    var alturaDeLaVentana = window.innerHeight;
    var desplazamientoActual = window.scrollY;

    if (desplazamientoActual >= alturaDeLaVentana) {
        elemento.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';

        colorNavbar.forEach(function(elemento) {
            elemento.style.color = 'black'; 
        });
    }

    if (desplazamientoActual <= alturaDeLaVentana) {
        elemento.style.backgroundColor = '#333333';

        colorNavbar.forEach(function(elemento) {
            elemento.style.color = 'white'; 
        });

        elemento.classList.remove('filtro-blur');
    }
});

