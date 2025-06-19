// assets/storage.js
// Handles all client-side storage and UI alerts for cart, subscriptions, and contact form

// Ensure DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // ==== Basket Addition Handler ====
  document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
      const basket = JSON.parse(sessionStorage.getItem('cart') || '[]');
      basket.push({ id: button.dataset.id, name: button.dataset.name });
      sessionStorage.setItem('cart', JSON.stringify(basket));
      alert('Item added to your basket');
    });
  });

  // ==== Clear Basket Button ====
  const clearBasketBtn = document.getElementById('clear-cart-btn');
  if (clearBasketBtn) {
    clearBasketBtn.addEventListener('click', () => {
      const basket = JSON.parse(sessionStorage.getItem('cart') || '[]');
      if (basket.length) {
        sessionStorage.removeItem('cart');
        alert('Basket emptied');
      } else {
        alert('Basket is already empty');
      }
    });
  }

  // ==== Order Submission Handler ====
  const submitOrderBtn = document.getElementById('process-order-btn');
  if (submitOrderBtn) {
    submitOrderBtn.addEventListener('click', () => {
      const basket = JSON.parse(sessionStorage.getItem('cart') || '[]');
      if (basket.length) {
        sessionStorage.removeItem('cart');
        alert('Order confirmed, thank you!');
      } else {
        alert('Your basket is empty');
      }
    });
  }

  // ==== Newsletter Subscription ====
  const subscribeBtn = document.getElementById('subscribe-btn');
  const emailField   = document.getElementById('subscribe-email');
  if (subscribeBtn && emailField) {
    subscribeBtn.addEventListener('click', () => {
      if (emailField.value.trim()) {
        alert('Thanks for subscribing!');
        emailField.value = '';
      } else {
        alert('Please provide a valid email');
      }
    });
  }

  // ==== Contact Form Submission ====
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      const formData = {
        name:    contactForm.querySelector('#name').value,
        email:   contactForm.querySelector('#email').value,
        message: contactForm.querySelector('#message').value
      };
      localStorage.setItem('order', JSON.stringify(formData));
      alert('We received your message, thank you!');
      contactForm.reset();
    });
  }
});
