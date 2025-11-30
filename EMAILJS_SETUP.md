# EmailJS Setup Guide

This project uses EmailJS for sending emails directly from the browser (client-side).

## Environment Variables Required

Create a `.env.local` file in the project root with the following variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Important**: These must be prefixed with `NEXT_PUBLIC_` so they're accessible in the browser/client-side code.

## Getting Your EmailJS Credentials

1. **Sign up for EmailJS**
   - Visit https://www.emailjs.com/
   - Create a free account

2. **Create an Email Service**
   - Go to Email Services in the dashboard
   - Add a new service (Gmail, Outlook, etc.)
   - Connect your email account
   - Copy the **Service ID**

3. **Create an Email Template**
   - Go to Email Templates in the dashboard
   - Create a new template
   - Add these variables to your template:
     - `{{user_name}}` - Customer's name
     - `{{user_email}}` - Customer's email
     - `{{phone}}` - Customer's phone number
     - `{{service}}` - Service type requested
     - `{{location}}` - Service location
     - `{{preferred_date}}` - Preferred service date
     - `{{message}}` - Customer's message
     - `{{subject}}` - Email subject line
   - Copy the **Template ID**

4. **Get Your Public Key**
   - Go to Account → General
   - Find your **Public Key** (also called User ID)

## Implementation Details

- EmailJS is called **directly from the client-side** (browser)
- The form component (`components/quote-form.tsx`) uses `@emailjs/browser` SDK
- No server-side API route is used (EmailJS requires browser requests)
- All environment variables are public and accessible in the browser

## After Setting Up

1. Add the environment variables to `.env.local`
2. Restart your Next.js dev server (`npm run dev` or `pnpm dev`)
3. Test the form submission

## Troubleshooting

- **403 Error**: Make sure you're using the browser SDK, not server-side calls
- **Missing variables error**: Ensure all three `NEXT_PUBLIC_*` variables are set
- **Email not received**: Check your EmailJS dashboard logs and email service configuration

