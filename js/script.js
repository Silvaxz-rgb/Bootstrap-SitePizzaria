window.addEventListener('scroll', function () {
    const posicao = window.scrollY;
    const navbar = document.getElementById("navbar");

    if (posicao > 100) {
        let alfa = (posicao >= 300) ? 1 : (posicao - 100) / 200;

        // Aplica o fundo com transparência progressiva
        navbar.style.backgroundColor = `rgba(248, 249, 250, ${alfa})`;

        // Aplica sombra, desfoque e transição suave
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.transition = 'background-color 0.3s ease, box-shadow 0.3s ease';

    } else {
        // Quando no topo, deixa totalmente transparente e remove sombra
        navbar.style.backgroundColor = 'rgba(248, 249, 250, 0)';
        navbar.style.boxShadow = 'none';
        navbar.style.backdropFilter = 'none';
    }
});

