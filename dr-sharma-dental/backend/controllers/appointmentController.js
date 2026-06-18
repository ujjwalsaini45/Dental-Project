const Appointment = require('../models/Appointment');
let inMemoryAppointments = [];

exports.createAppointment = async (req, res) => {
  try {
    const payload = req.body;
    let appointment;

    if (Appointment && Appointment.create) {
      try {
        appointment = await Appointment.create({
          name: payload.name,
          phone: payload.phone,
          service: payload.service,
          datetime: payload.datetime,
          message: payload.message,
          submittedAt: payload.submittedAt || new Date()
        });
      } catch (dbErr) {
        console.warn('MongoDB save failed, storing appointment in memory instead.', dbErr.message);
        appointment = { ...payload, submittedAt: payload.submittedAt || new Date().toISOString() };
        inMemoryAppointments.push(appointment);
      }
    } else {
      appointment = { ...payload, submittedAt: payload.submittedAt || new Date().toISOString() };
      inMemoryAppointments.push(appointment);
    }

    return res.status(201).json({ success: true, appointment });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};
