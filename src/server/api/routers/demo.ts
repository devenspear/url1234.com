import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

// Simulated data for demo purposes
const features = [
  { id: 1, name: "Type-Safe APIs", description: "End-to-end type safety with tRPC", status: "active" },
  { id: 2, name: "Authentication", description: "NextAuth.js integration", status: "active" },
  { id: 3, name: "Database", description: "Prisma ORM with type safety", status: "active" },
  { id: 4, name: "Styling", description: "Tailwind CSS for beautiful UI", status: "active" },
  { id: 5, name: "Animations", description: "Framer Motion for smooth interactions", status: "active" },
];

const stats = {
  totalUsers: 1247,
  apiCalls: 15678,
  uptime: "99.9%",
  responseTime: "120ms",
};

export const demoRouter = createTRPCRouter({
  // Public procedures for landing page
  getFeatures: publicProcedure.query(() => {
    return features;
  }),

  getStats: publicProcedure.query(() => {
    return stats;
  }),

  validateEmail: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .query(({ input }) => {
      return {
        email: input.email,
        isValid: true,
        domain: input.email.split('@')[1],
        timestamp: new Date().toISOString(),
      };
    }),

  searchFeatures: publicProcedure
    .input(z.object({ query: z.string().min(1) }))
    .query(({ input }) => {
      const filtered = features.filter(feature =>
        feature.name.toLowerCase().includes(input.query.toLowerCase()) ||
        feature.description.toLowerCase().includes(input.query.toLowerCase())
      );
      return {
        query: input.query,
        results: filtered,
        total: filtered.length,
      };
    }),

  // Protected procedures for authenticated users
  getUserProfile: protectedProcedure.query(({ ctx }) => {
    return {
      id: ctx.session.user.id,
      name: ctx.session.user.name,
      email: ctx.session.user.email,
      image: ctx.session.user.image,
      joinedAt: new Date().toISOString(),
      role: "user",
    };
  }),

  updatePreferences: protectedProcedure
    .input(z.object({
      theme: z.enum(["light", "dark"]).optional(),
      notifications: z.boolean().optional(),
      language: z.string().optional(),
    }))
    .mutation(({ input, ctx }) => {
      // In a real app, this would update the database
      return {
        userId: ctx.session.user.id,
        preferences: input,
        updated: true,
        timestamp: new Date().toISOString(),
      };
    }),

  getPersonalizedContent: protectedProcedure.query(({ ctx }) => {
    return {
      welcomeMessage: `Welcome back, ${ctx.session.user.name}!`,
      recentActivity: [
        { action: "Login", timestamp: new Date().toISOString() },
        { action: "View Dashboard", timestamp: new Date(Date.now() - 300000).toISOString() },
        { action: "Update Profile", timestamp: new Date(Date.now() - 600000).toISOString() },
      ],
      recommendations: [
        "Check out our new API features",
        "Complete your profile setup",
        "Join our community Discord",
      ],
    };
  }),
});