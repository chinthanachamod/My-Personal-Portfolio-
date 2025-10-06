# Web3Forms Setup Instructions

## What is Web3Forms?

Web3Forms is a free service that allows you to receive form submissions directly to your email without needing a backend server.

## Setup Steps

### 1. Get Your Access Key

1. Visit [web3forms.com](https://web3forms.com)
2. Enter your email address where you want to receive messages
3. Click "Create Access Key"
4. You'll receive an email with your access key

### 2. Configure Your Portfolio

1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Open the `.env` file and replace the placeholder with your actual access key:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your-actual-access-key-from-web3forms
   ```

### 3. Test the Contact Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact section of your portfolio
3. Fill out and submit the form
4. Check your email for the message

## Features Included

- ✅ Real-time email delivery
- ✅ Spam protection with honeypot field
- ✅ Form validation
- ✅ Success/error message handling
- ✅ Loading states
- ✅ Automatic subject line formatting
- ✅ Sender name preservation

## Customization

You can customize the email format by modifying the hidden fields in `ContactSection.tsx`:

- `subject`: Email subject line
- `from_name`: Sender's name
- Add custom fields as needed

## Troubleshooting

### Common Issues

1. **Form not sending emails**
   - Check that your access key is correct in the `.env` file
   - Verify the access key is active (check your Web3Forms email)

2. **TypeScript errors**
   - Make sure `vite-env.d.ts` is present in the `src` folder
   - Restart your TypeScript server in VS Code

3. **Environment variable not loading**
   - Restart your development server after changing `.env`
   - Make sure the variable name starts with `VITE_`

### Need Help?

- Web3Forms Documentation: https://docs.web3forms.com
- Web3Forms Support: Available on their website