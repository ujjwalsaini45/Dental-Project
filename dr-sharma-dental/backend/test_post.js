(async function(){
  try {
    const payload = {
      name: 'Test User',
      phone: '9999999999',
      service: 'Teeth Cleaning',
      datetime: '2026-06-18T10:00:00Z',
      message: 'Test appointment',
      submittedAt: new Date().toISOString()
    };

    const res = await fetch('http://localhost:3000/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const text = await res.text();
    console.log('Status:', res.status);
    console.log('Response:', text);
  } catch (err) {
    console.error('Error posting test appointment:', err);
  }
})();
