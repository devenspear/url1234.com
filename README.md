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

1. **Fork this repository**
2. **Connect to Vercel** - Import your GitHub repo
3. **Set Environment Variables**:
   ```bash
   DATABASE_URL="postgresql://..."  # Your database URL
   AUTH_SECRET="your-secret-key"
   AUTH_DISCORD_ID="optional"       # For Discord OAuth
   AUTH_DISCORD_SECRET="optional"
   ```
4. **Deploy** - Vercel will automatically build and deploy

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

Required for full functionality:

```bash
# Database
DATABASE_URL="your-database-url"

# NextAuth.js
AUTH_SECRET="your-secret-key"
AUTH_DISCORD_ID="optional-discord-client-id"
AUTH_DISCORD_SECRET="optional-discord-client-secret"
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