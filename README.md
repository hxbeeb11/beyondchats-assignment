# BeyondChats - Chatbot Onboarding Assignment

This project is my submission for the BeyondChats Frontend Developer position assignment. The task was to create a comprehensive UI/UX for setting up chatbots, focusing on user experience throughout the onboarding process - from user registration to chatbot integration.

The implementation demonstrates my approach to creating intuitive, engaging, and professional user interfaces while adhering to modern web development practices and the provided evaluation criteria.

🔗 **Live Demo**: [Your deployment URL here]


## Features

### 1. User Authentication
- Email/Password authentication
- Google OAuth integration (optional)
- Secure email verification system
- Smooth transitions between authentication steps

### 2. Organization Setup
- Company profile creation
- Website URL validation and meta-description fetching
- Automated website content scanning
- Real-time scanning progress indicators
- Content preview functionality

### 3. Chatbot Integration
- One-click website integration
- Developer-friendly code snippets
- Email integration instructions
- Integration testing tools
- Success celebration animations

### 4. Admin Dashboard
- Comprehensive analytics
- Training data management
- Performance metrics
- Quick action buttons
- Knowledge base management

### 5. Chat Testing Interface
- Real-time chat simulation
- Message history
- Typing indicators
- Quick test questions
- Mobile-responsive design

## Technical Stack

- **Frontend**: Next.js 13+ (App Router)
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **UI Components**: Custom components with Tailwind
- **Icons**: React Icons
- **Animations**: Framer Motion
- **Toast Notifications**: React Hot Toast

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/beyond-chatbot.git
cd beyond-chatbot
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file with the following:
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
beyond-chatbot/
├── app/
│   ├── (auth)/
│   │   ├── signin/
│   │   └── verify/
│   ├── dashboard/
│   │   ├── admin/
│   │   ├── chat/
│   │   ├── setup/
│   │   └── integration/
│   ├── components/
│   └── lib/
├── public/
└── ...config files
```

## Key Features Implementation

### Authentication Flow
- Custom email/password authentication
- Secure verification code system
- Session management with NextAuth.js

### Website Scanning
- Simulated website content scanning
- Progress tracking
- Content chunking and preview

### Chatbot Integration
- Code snippet generation
- Integration testing
- Success/failure handling

### Admin Interface
- Real-time statistics
- Training data management
- Quick actions panel

## Design Decisions

1. **Color Scheme**: Professional indigo-based palette with clear contrast
2. **Typography**: Clean, readable fonts optimized for both desktop and mobile
3. **Layout**: Responsive grid system with smooth transitions
4. **Components**: Reusable, accessible UI components
5. **User Flow**: Intuitive progression through setup steps


