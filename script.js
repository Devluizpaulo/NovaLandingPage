// Menu hambúrguer
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMobile = document.querySelector('.nav-mobile');
  
  if (menuToggle && navMobile) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      navMobile.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um link
    const mobileLinks = navMobile.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        navMobile.classList.remove('active');
      });
    });
    
    // Fechar menu ao clicar fora
    document.addEventListener('click', function(e) {
      if (!menuToggle.contains(e.target) && !navMobile.contains(e.target)) {
        menuToggle.classList.remove('active');
        navMobile.classList.remove('active');
      }
    });
  }
});

// Formulário de contato
document.getElementById('form-contato').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Mensagem enviada! Em breve entraremos em contato.');
  this.reset();
}); 