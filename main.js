$('.education-card').on('click', function () {
    const pdfUrl = this.dataset.src;
    const pdfEmbed = document.getElementById('pdf-embed');
    pdfEmbed.src = pdfUrl;

    $('#modal').css('display', 'flex');
});

$("#cerrar-modal").on("click", function () {
    document.getElementById("modal").style.display = "none";
});
