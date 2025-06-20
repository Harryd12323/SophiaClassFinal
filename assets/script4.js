// assets/script4.js
// User interaction alerts for contact and subscribe 

document.addEventListener('DOMContentLoaded', () => {
  // ==== Reach-Out Notification ====
  const reachOutBtn = document.getElementById('contact-btn');
  if (reachOutBtn) {
    reachOutBtn.addEventListener('click', () => {
      alert('We appreciate your message—expect our reply soon!');
    });
  }

  // ==== Newsletter Sign-Up Handler ====
  const signUpBtn = document.getElementById('subscribe-btn');
  const newsletterField = document.getElementById('subscribe-email');
  if (signUpBtn && newsletterField) {
    signUpBtn.addEventListener('click', () => {
      const address = newsletterField.value.trim();
      if (address) {
        alert('Subscription successful! Thanks for joining.');
        newsletterField.value = '';
      } else {
        alert('Oops! Please provide an email to subscribe.');
      }
    });
  }
});
