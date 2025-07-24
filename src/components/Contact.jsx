import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const fadeInUp = {
  initial: { y: 40, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitting: false, success: false, message: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, message: '' });

    const serviceID = 'your_service_id';
    const templateID = 'your_template_id';
    const publicKey = 'your_public_key'; // Make sure it's correct

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setFormStatus({ submitting: false, success: true, message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ ...formStatus, message: '' });
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus({ submitting: false, success: false, message: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <motion.section
      id="contact"
      className="flex flex-col items-center justify-center px-6 py-20 bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        viewport={{ once: true }}
        className="text-4xl font-bold mb-10"
      >
        Get in Touch
      </motion.h2>

      <motion.div
        variants={fadeInUp}
        className="w-full max-w-xl bg-gray-800 p-8 rounded-xl shadow-lg"
      >
        <motion.form onSubmit={handleSubmit} className="space-y-6">
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name..."
            required
            whileFocus={{ scale: 1.02 }}
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email..."
            required
            whileFocus={{ scale: 1.02 }}
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <motion.textarea
            name="message"
            placeholder="Your Message..."
            required
            rows="5"
            whileFocus={{ scale: 1.02 }}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded bg-gray-100 text-black resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={formStatus.submitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
          >
            {formStatus.submitting ? 'Sending...' : 'Send Message'}
          </motion.button>

          {formStatus.message && (
            <motion.div
              className={`text-center mt-4 text-sm ${
                formStatus.success ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {formStatus.message}
            </motion.div>
          )}
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
