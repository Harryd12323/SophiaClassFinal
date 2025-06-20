document.addEventListener('DOMContentLoaded', () => {
  // —— Add-to-Cart buttons ——
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Item added to the cart');
    });
  });

  // —— Subscribe feature ——
  const subscribeBtn = document.getElementById('subscribe-btn');
  const emailInput  = document.getElementById('subscribe-email');

  if (subscribeBtn && emailInput) {
    subscribeBtn.addEventListener('click', () => {
      const email = emailInput.value.trim();
      if (email) {
        alert('Thank you for subscribing');
        emailInput.value = '';
      } else {
        alert('Please enter an email address');
      }
    });
  }
});
