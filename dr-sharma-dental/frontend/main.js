// Minimal frontend JS: handles appointment form submission by opening WhatsApp if backend is not configured.
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('appointmentForm');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const data = {
      name: form.name.value,
      phone: form.phone.value,
      service: form.service.value,
      datetime: form.datetime.value,
      message: form.message.value
    };
    const msg = `New Appointment Request!\n\nName: ${data.name}\nPhone: ${data.phone}\nService: ${data.service || 'Not specified'}\nPreferred Time: ${data.datetime || 'Not specified'}\nMessage: ${data.message || 'None'}`;
    const waURL = `https://wa.me/919876543210?text=${encodeURIComponent(msg)}`;
    window.open(waURL, '_blank');
    form.style.display = 'none';
    const success = document.getElementById('form-success');
    if (success) success.style.display = 'block';
  });
});
