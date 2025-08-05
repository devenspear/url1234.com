# T3 Stack Demo Landing Page

A comprehensive demonstration of the T3 Stack capabilities, featuring a beautiful dark-themed landing page with interactive components and real-time data fetching.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/devenspear/url1234.com)

## 🚀 Features Demonstrated

### **Frontend Excellence**
- **Next.js 15** with App Router
- **React 19** with modern hooks
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for smooth animations

### **Backend Power**
- **tRPC** for type-safe APIs
- **Prisma ORM** for database management
- **NextAuth.js** for authentication
- **Zod** for input validation

### **Interactive Demonstrations**
- 🔍 **Real-time Search** - Live tRPC queries with instant results
- ✉️ **Email Validation** - Input validation with Zod schemas
- 🔐 **Authentication Flow** - NextAuth.js login/logout
- 📊 **Live Statistics** - Dynamic data fetching
- 🎨 **Responsive Design** - Mobile-first approach

## 🎯 What You'll See

1. **Hero Section** - Animated landing with gradient effects
2. **Feature Showcase** - Interactive cards displaying stack capabilities
3. **Live tRPC Demos** - Working search and validation examples
4. **Authentication Demo** - Sign in to see protected content
5. **Tech Stack Overview** - Comprehensive technology breakdown

## 🛠 Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion |
| **Backend** | tRPC, Prisma ORM, NextAuth.js, Zod Validation |
| **Database** | SQLite (dev), PostgreSQL (production) |
| **Deployment** | Vercel, GitHub Actions |

## 🚀 Quick Deploy to Vercel

1. **Click the Deploy Button Below**:
   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/devenspear/url1234.com)

2. **Set Required Environment Variables** in Vercel:
   ```bash
   # Required - Generate with: node scripts/generate-auth-secret.js
   AUTH_SECRET="your-generated-secret-key"
   
   # Required - For demo purposes, you can use SQLite
   DATABASE_URL="file:./prod.db"
   
   # Optional - For Discord OAuth (leave empty if not using)
   AUTH_DISCORD_ID=""
   AUTH_DISCORD_SECRET=""
   ```

3. **Deploy** - Vercel will automatically build and deploy

### Alternative: Manual Setup
1. Fork this repository
2. Import into Vercel from your GitHub
3. Add the environment variables above
4. Deploy!

## 🏃‍♂️ Local Development

```bash
# Clone the repository
git clone https://github.com/devenspear/url1234.com.git
cd url1234.com

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your values

# Run database migrations
npm run db:push

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the demo.

## 🎨 Key Components

### Interactive tRPC Demos
- **Feature Search**: Real-time search with debounced queries
- **Email Validation**: Live validation with Zod schemas
- **User Profile**: Protected routes with session management

### Animation Features
- **Page Transitions**: Smooth entrance animations
- **Scroll Animations**: Elements animate on scroll
- **Hover Effects**: Interactive card and button states
- **Loading States**: Skeleton screens and spinners

## 📁 Project Structure

```
src/
├── components/ui/     # Reusable UI components
├── lib/              # Utility functions
├── pages/            # Next.js pages
├── server/
│   ├── api/          # tRPC routers
│   └── auth/         # Authentication config
└── styles/           # Global styles
```

## 🔗 Useful Links

- [Live Demo](https://url1234.com) - See it in action
- [T3 Stack Documentation](https://create.t3.gg/)
- [Vercel Deployment Guide](https://vercel.com/docs)

## 📝 Environment Variables

### Required for Deployment:

```bash
# Database (SQLite for demo, PostgreSQL for production)
DATABASE_URL="file:./prod.db"

# NextAuth.js Secret (generate a secure random string)
AUTH_SECRET="your-32-character-secret"

# Optional Discord OAuth
AUTH_DISCORD_ID="optional-discord-client-id"
AUTH_DISCORD_SECRET="optional-discord-client-secret"
```

### Generate AUTH_SECRET:
```bash
# Run this to generate a secure secret
node scripts/generate-auth-secret.js

# Or use OpenSSL
openssl rand -base64 32

# Or use online generator
# https://generate-secret.vercel.app/32
```

## 🤝 Contributing

This is a demonstration project, but feel free to:
- Report issues
- Suggest improvements
- Submit pull requests

## 📜 License

Open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using the T3 Stack**