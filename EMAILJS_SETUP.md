# EmailJS Setup Guide

To enable the contact form to send emails to tedyshimelis160@gmail.com, follow these steps:

## Your EmailJS Configuration (Already Set Up)
- Service ID: `service_ib1p0ke`
- Template ID: `template_dg93gau`
- Public Key: `Z14JsaNWA7YUQ6El1`

## IMPORTANT: Configure Your Email Template

Go to https://dashboard.emailjs.com/admin/templates/template_dg93gau and update your template:

### Email Template Settings:

**From Name:** {{user_name}}

**From Email:** {{user_email}} (or your verified email)

**To Email:** tedyshimelis160@gmail.com

**Reply-To:** {{user_email}} ← IMPORTANT! This allows you to reply directly

**Subject:** New Portfolio Message from {{user_name}}

**Content (HTML or Plain Text):**
```
You have received a new message from your portfolio website!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FROM:
Name: {{user_name}}
Email: {{user_email}}

MESSAGE:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To reply, simply click "Reply" in your email client.
The reply will go directly to: {{user_email}}
```

### Key Points:
1. **Reply-To field** is the most important - set it to `{{user_email}}`
2. This ensures when you click "Reply" in Gmail, it goes to the sender
3. The sender's name and email will be clearly visible in the message body
4. You can reply directly without copying their email

### Test Your Form:
1. Fill out the contact form on your portfolio
2. Check tedyshimelis160@gmail.com
3. Click "Reply" - it should automatically address the sender's email

That's it! Your contact form will now send emails with full sender information.

