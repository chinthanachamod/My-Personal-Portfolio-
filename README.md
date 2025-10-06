# Personal Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Dark/Light theme toggle
- 📱 Fully responsive design
- ✨ Smooth animations with Framer Motion
- 📧 Real-time email contact form using Web3Forms
- 🎯 Interactive particle background
- 📂 Project showcase with live demos
- 🛠️ Skills section with technology stack

## Getting Started

### Prerequisites

- Node.js 16 or higher
- npm or yarn

### Installation

1. Clone the repository
2. Run `npm install`
3. Copy `.env.example` to `.env` and add your Web3Forms access key
4. Run `npm run dev`

### Environment Setup

To enable the contact form functionality:

1. Go to [Web3Forms](https://web3forms.com) and get your free access key
2. Copy `.env.example` to `.env`
3. Replace `your-web3forms-access-key-here` with your actual access key:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your-actual-access-key
   ```

The contact form will now send real emails to your specified email address.
