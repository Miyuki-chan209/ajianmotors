function openModal(id) {
  document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}



window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-in').forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});


function closePopup() {
  const thankYou = document.getElementById('thank-you');
  thankYou.classList.remove('hidden');
  thankYou.classList.add('visible');

  setTimeout(() => {
    document.getElementById('dev-popup').style.display = 'none';
  }, 2000); // Hide popup after 2 seconds
}