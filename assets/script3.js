// assets/script3.js
// Handles user-triggered alerts for event sign-up and newsletter subscription

document.addEventListener('DOMContentLoaded', () => {
  // ==== Event Registration Alert ====
  const joinBtn = document.querySelector('.cta-button');
  if (joinBtn) {
    joinBtn.addEventListener('click', () => {
      alert('You’re signed up! Can’t wait to see you there.');
    });
  }

  // ==== Newsletter Sign-Up Validation ====
  const subscriptionBtn = document.getElementById('subscribe-btn');
  const emailField      = document.getElementById('subscribe-email');

  if (subscriptionBtn && emailField) {
    subscriptionBtn.addEventListener('click', () => {
      const address = emailField.value.trim();
      if (address) {
        alert('Subscription confirmed – thanks for joining!');
        emailField.value = '';
      } else {
        alert('Oops! Please provide a valid email.');
      }
    });
  }
});
