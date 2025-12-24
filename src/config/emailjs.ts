// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables:
//    - {{to_email}} - The recipient email (caelmarraconcierge@gmail.com)
//    - {{from_name}} - Sender's full name
//    - {{from_email}} - Sender's email
//    - {{phone}} - Sender's phone
//    - {{company}} - Sender's company
//    - {{experience}} - Travel experience they're looking for
//    - {{message}} - Additional message
// 4. Replace the values below with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_28563yr', // Replace with your EmailJS service ID
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_fsx3ibn', // Replace with your EmailJS template ID
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'akXNGebowwJTux_el', // Replace with your EmailJS public key
};

// Example template content for EmailJS:
/*
Subject: New Inquiry from {{from_name}}

You have received a new inquiry from your website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}

Travel Experience Desired:
{{experience}}

Additional Message:
{{message}}

---
This email was sent to: {{to_email}}
*/
