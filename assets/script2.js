// assets/scriptAlerts.js
// Provides user feedback for cart additions and newsletter sign-up

document.addEventListener('DOMContentLoaded', () => {
  // ==== Cart Notification Handler ====
  document.querySelectorAll('.add-to-cart-btn').forEach(itemBtn => {
    itemBtn.addEventListener('click', () => {
      alert('Product successfully added to your cart.');
    });
  });

  // ==== Newsletter Subscription Handler ====
  const newsBtn    = document.getElementById('subscribe-btn');
  const emailField = document.getElementById('subscribe-email');

  if (newsBtn && emailField) {
    newsBtn.addEventListener('click', () => {
      const address = emailField.value.trim();
      if (address) {
        alert('You’ve been subscribed! Thanks for joining.');
        emailField.value = '';
      } else {
        alert('Please provide a valid email to subscribe.');
      }
    });
  }
});
