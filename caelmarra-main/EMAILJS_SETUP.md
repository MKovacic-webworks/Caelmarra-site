# EmailJS Setup Instructions

The contact form is now configured to send emails automatically using EmailJS. Follow these steps to enable email functionality:

## Step 1: Create an EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up Free" and create an account
3. Verify your email address

## Step 2: Add an Email Service
1. In your EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Give your service a name and click "Create Service"
6. Copy the Service ID (you'll need this)

## Step 3: Create an Email Template
1. Click "Email Templates" in the dashboard
2. Click "Create New Template"
3. Set up your template with these variables:

**To Email:** `{{to_email}}`
**Subject:** `New Inquiry from {{from_name}}`

**Content:**
```
You have received a new inquiry from your website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}

Travel Experience Desired:
{{experience}}

Additional Message:
{{message}}
```

4. Save the template and copy the Template ID

## Step 4: Get Your Public Key
1. Click "Account" in the dashboard
2. Go to the "General" tab
3. Copy your Public Key

## Step 5: Update the Configuration
1. Open `src/config/emailjs.ts`
2. Replace the placeholder values:
   - `YOUR_SERVICE_ID` → Your actual Service ID
   - `YOUR_TEMPLATE_ID` → Your actual Template ID
   - `YOUR_PUBLIC_KEY` → Your actual Public Key

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc123', // Your actual service ID
  TEMPLATE_ID: 'template_xyz789', // Your actual template ID
  PUBLIC_KEY: 'publickey_123456', // Your actual public key
};
```

## Step 6: Test the Form
1. Save your changes
2. Test the form on your website
3. Check your email to confirm it's working

## Important Notes
- The free EmailJS plan allows 200 emails per month
- If EmailJS is not configured, the form will fall back to using `mailto:` links
- Make sure to keep your Public Key secure (don't commit sensitive keys to public repos)
- The form will automatically send to `caelmarraconcierge@gmail.com`

## Troubleshooting
- If emails aren't sending, check the browser console for errors
- Verify all three configuration values are correct
- Make sure your email service is active in EmailJS
- Check that your template variables match exactly