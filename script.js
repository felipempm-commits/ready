// Adicionar interatividade
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Validar formulário
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your message was sent.');
    this.reset();
});
