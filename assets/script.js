// assets/script.js
// Manages footer subscription, gallery cart actions, and contact form alerts

document.addEventListener('DOMContentLoaded', () => {
  // ==== Footer Newsletter Signup ====
  const footerSubscribeBtn = document.getElementById('subscribe-btn');
  if (footerSubscribeBtn) {
    footerSubscribeBtn.addEventListener('click', () => {
      const emailField = document.getElementById('subscribe-email');
      if (emailField && emailField.value.trim() !== '') {
        alert('Thanks for subscribing!');
        emailField.value = '';
      } else {
        alert('Enter a valid email to subscribe.');
      }
    });
  }

  // ==== Gallery Cart Controls ====  
  let tempCart = [];
  document.querySelectorAll('.add-to-cart-btn').forEach(addBtn => {
    addBtn.addEventListener('click', () => {
      tempCart.push('item');
      alert('Item successfully added to cart.');
    });
  });

  const clearBtn = document.getElementById('clear-cart-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (tempCart.length) {
        tempCart = [];
        alert('Your cart has been cleared.');
      } else {
        alert('No items in the cart to clear.');
      }
    });
  }

  const orderBtn = document.getElementById('process-order-btn');
  if (orderBtn) {
    orderBtn.addEventListener('click', () => {
      if (tempCart.length) {
        alert('Order placed! Thank you.');
        tempCart = [];
      } else {
        alert('Cart is empty, nothing to process.');
      }
    });
  }

  // ==== Contact Form Submission ====
  const formElement = document.getElementById('contact-form');
  if (formElement) {
    formElement.addEventListener('submit', evt => {
      evt.preventDefault();
      alert('We received your message—thank you!');
      formElement.reset();
    });
  }
});
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
