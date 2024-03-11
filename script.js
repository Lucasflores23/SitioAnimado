document.addEventListener('DOMContentLoaded', function() {
    var parallaxSections = document.querySelectorAll('.parallax-section');

    window.addEventListener('scroll', function() {
        parallaxSections.forEach(function(section) {
            var speed = section.getAttribute('data-speed');
            var yPos = -(window.pageYOffset * speed / 2);
            section.style.transform = 'translateY(' + yPos + 'px)';
        });
    });

});
document.addEventListener('DOMContentLoaded', function() {
    var logo = document.getElementById('logo');
    var images = [
        "https://iconape.com/wp-content/png_logo_vector/padrinos-magicos-logo.png",
        "https://cn.i.cdn.ti-platform.com/cnlatam/content/734/showpage/tio-grandpa/ve/showpano.png?imwidth=640",
        "https://cn.i.cdn.ti-platform.com/cnlatam/content/90/showpage/las-chicas-superpoderosas/ve/showpano.png",
        "https://cn.i.cdn.ti-platform.com/content/65/the-amazing-world-of-gumball/showpage/cl/showpagehero_gumball1x.8935514c.png",
        "https://cn.i.cdn.ti-platform.com/content/2017/ben-10/showpage/sa/ben10pano.d284046e.png",
        "https://i.pinimg.com/originals/4d/74/ef/4d74efd894517b7d1d0325d9767fd799.png",
        "https://imagenesparapeques.com/wp-content/uploads/2015/03/IMAGENES-BOB-ESPONJA-39.png",
        "https://fcbk.su/_data/stickers/adventure_time/adventure_time_00.png",
        "https://www.pngarts.com/files/4/Tom-And-Jerry-PNG-Picture.png",
        "https://i.pinimg.com/originals/d4/f5/f5/d4f5f5e22a50f68348f8f7a1f8ec30b5.png",
        "https://play-lh.googleusercontent.com/iRK5KR2I-BKeWPqQK7uQvjlmQFUEtcDNv8q7pHeWCppYPtJCx4fF01_tYi4zEgZVkBjc",

        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3cd770b2-3e49-4672-99fb-8483b9dd9bf0/dfm8h7h-1578aacb-50f6-4802-bf2e-0976d61d67b1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNjZDc3MGIyLTNlNDktNDY3Mi05OWZiLTg0ODNiOWRkOWJmMFwvZGZtOGg3aC0xNTc4YWFjYi01MGY2LTQ4MDItYmYyZS0wOTc2ZDYxZDY3YjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.72UD8TakaZyLu3UDcQpwbSfcA10p3NQDTBxj6iEAiUI",

        "https://es.dragon-ball-official.com/assets/img/news/comment/login_alert_mv.png",

        "https://i.pinimg.com/originals/ad/a9/96/ada996040e93da6a0d695ac66419a5b6.png",


    ];

    var currentImageIndex = 0;

    function changeLogoImage() {
        // Cambia la opacidad a 0 antes de cambiar la imagen
        logo.style.opacity = 0;

        // Espera un breve momento para que la opacidad cambie antes de cambiar la imagen
        setTimeout(function() {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            logo.src = images[currentImageIndex];

            // Restaura la opacidad a 1 después de cambiar la imagen
            logo.style.opacity = 1;
        }, 500); // Ajusta el tiempo según sea necesario (debe ser igual o mayor al tiempo de la transición de opacidad)
    }

    var intervalId = setInterval(changeLogoImage, 5000);

    logo.addEventListener('click', function() {
        clearInterval(intervalId);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var categoriasBtn = document.getElementById('categoriasBtn');
    var opcionesCategorias = document.getElementById('opcionesCategorias');

    categoriasBtn.addEventListener('click', function() {
        // Cambia la visibilidad de la lista de opciones al hacer clic en el botón
        opcionesCategorias.style.display = (opcionesCategorias.style.display === 'block') ? 'none' : 'block';
    });

    // Resto del código...
});