(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme');
  if(saved==='dark') root.setAttribute('data-theme','dark');

  toggle.addEventListener('click', ()=>{
    const now = root.getAttribute('data-theme') === 'dark' ? null : 'dark';
    if(now) root.setAttribute('data-theme',now); else root.removeAttribute('data-theme');
    localStorage.setItem('theme', now ? 'dark' : 'light');
    toggle.textContent = now ? '☀️' : '🌙';
  });

  // Contact form handler (demo)
  const form = document.getElementById('contact-form');
  const msg = document.getElementById('form-msg');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const fd = new FormData(form);
    // In a real site you'd POST to an API. Here we just show a success message.
    form.reset();
    msg.textContent = 'Thanks! Message received (demo).';
    setTimeout(()=> msg.textContent = '', 5000);
  });
})();