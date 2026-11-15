// Calls the Spring Boot health endpoint to show the app is alive
document.getElementById('statusBtn').addEventListener('click', async () => {
  const el = document.getElementById('status');
  try {
    const res = await fetch('/actuator/health');
    const data = await res.json();
    el.textContent = 'Status: ' + data.status;
  } catch (e) {
    el.textContent = 'Status: unreachable';
  }
});

// Contact form: frontend only for now.
// Later: replace with fetch('/api/contact', { method: 'POST', ... }) once backend + RDS exist.
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('formMsg').textContent = 'Thanks! (Backend not connected yet)';
  e.target.reset();
});
