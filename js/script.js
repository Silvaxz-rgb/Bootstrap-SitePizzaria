window.addEventListener('scroll', function () {
    const posicao = window.scrollY;
    console.log(posicao);
    if (posicao > 100) {
        document.getElementById("navbar").classList.add("bg-body-tertiary");
    }
    else {
        document.getElementById("navbar").classList.remove("bg-body-tertiary");
    }
});