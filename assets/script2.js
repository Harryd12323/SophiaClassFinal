document.addEventListener('DOMContentLoaded', () => {
  // —— Add-to-Cart buttons ——
  // changed selector from '.add-to-cart-btn' to '.cart-btn' to match HTML buttons
  document.querySelectorAll('.cart-btn').forEach(btn => {
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


// == Updated storage.js ==
// (sessionStorage-backed cart + subscribe + contact form)
document.addEventListener('DOMContentLoaded', () => {
  // —— Add-to-Cart → sessionStorage ——
  // changed selector to '.cart-btn'
  document.querySelectorAll('.cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
      cart.push({ id: btn.dataset.id, name: btn.dataset.name });
      sessionStorage.setItem('cart', JSON.stringify(cart));
      alert('Item added to the cart');
    });
  });

  // —— Clear Cart ——
  const clearBtn = document.getElementById('clear-cart-btn');
  if (clearBtn) clearBtn.addEventListener('click', () => {
    const cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
    if (cart.length) {
      sessionStorage.removeItem('cart');
      alert('Cart cleared');
    } else {
      alert('No items to clear');
    }
  });

  // —— Process Order ——
  const orderBtn = document.getElementById('process-order-btn');
  if (orderBtn) orderBtn.addEventListener('click', () => {
    const cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
    if (cart.length) {
      sessionStorage.removeItem('cart');
      alert('Thank you for your order');
    } else {
      alert('Cart is empty');
    }
  });

  // —— Subscribe (all pages) ——
  const subBtn   = document.getElementById('subscribe-btn');
  const subInput = document.getElementById('subscribe-email');
  if (subBtn && subInput) subBtn.addEventListener('click', () => {
    if (subInput.value.trim()) {
      alert('Thank you for subscribing');
      subInput.value = '';
    } else {
      alert('Please enter an email address');
    }
  });

  // —— Contact Form (About Us) ——
  const form = document.getElementById('contact-form');
  if (form) form.addEventListener('submit', e => {
    e.preventDefault();
    const data = {
      name:    form.querySelector('#name').value,
      email:   form.querySelector('#email').value,
      message: form.querySelector('#message').value
    };
    localStorage.setItem('order', JSON.stringify(data));
    alert('Thank you for your message');
    form.reset();
  });
});
