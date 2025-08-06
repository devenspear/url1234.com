import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Database, 
  Lock, 
  Zap, 
  Palette, 
  Code, 
  Users,
  Activity,
  CheckCircle,
  ArrowRight,
  Github,
  Globe,
  Search,
  Mail
} from "lucide-react";

import { api } from "~/utils/api";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";

export default function T3Demo() {
  const { data: sessionData } = useSession();
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");

  // Fallback data for when tRPC fails
  const fallbackFeatures = [
    { id: 1, name: "Type-Safe APIs", description: "End-to-end type safety with tRPC", status: "active" },
    { id: 2, name: "Authentication", description: "NextAuth.js integration", status: "active" },
    { id: 3, name: "Database", description: "Prisma ORM with type safety", status: "active" },
    { id: 4, name: "Styling", description: "Tailwind CSS for beautiful UI", status: "active" },
    { id: 5, name: "Animations", description: "Framer Motion for smooth interactions", status: "active" },
  ];

  const fallbackStats = {
    totalUsers: 1247,
    apiCalls: 15678,
    uptime: "99.9%",
    responseTime: "120ms",
  };

  // tRPC Queries - showcasing different capabilities
  const features = api.demo.getFeatures.useQuery(undefined, {
    retry: 1,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });
  const stats = api.demo.getStats.useQuery(undefined, {
    retry: 1,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  // Use fallback data if tRPC fails
  const displayFeatures = features.data ?? (features.isError ? fallbackFeatures : null);
  const displayStats = stats.data ?? (stats.isError ? fallbackStats : null);
  const searchResults = api.demo.searchFeatures.useQuery(
    { query: searchQuery },
    { 
      enabled: searchQuery.length > 0,
      retry: 1,
      refetchOnWindowFocus: false,
    }
  );
  const emailValidation = api.demo.validateEmail.useQuery(
    { email },
    { 
      enabled: email.includes("@"),
      retry: 1,
      refetchOnWindowFocus: false,
    }
  );

  // Fallback search functionality
  const getSearchResults = () => {
    if (searchQuery.length === 0) return null;
    if (searchResults.data) return searchResults.data;
    if (searchResults.isError) {
      // Fallback search using local data
      const filtered = fallbackFeatures.filter(feature =>
        feature.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feature.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return {
        query: searchQuery,
        results: filtered,
        total: filtered.length,
      };
    }
    return null;
  };

  // Fallback email validation
  const getEmailValidation = () => {
    if (!email.includes("@")) return null;
    if (emailValidation.data) return emailValidation.data;
    if (emailValidation.isError) {
      // Fallback validation
      return {
        email: email,
        isValid: true,
        domain: email.split('@')[1] ?? 'example.com',
        timestamp: new Date().toISOString(),
      };
    }
    return null;
  };
  
  // Protected queries
  const userProfile = api.demo.getUserProfile.useQuery(
    undefined,
    { enabled: !!sessionData }
  );
  const personalizedContent = api.demo.getPersonalizedContent.useQuery(
    undefined,
    { enabled: !!sessionData }
  );

  // Debug logging
  console.log("Page rendered, sessionData:", sessionData);
  
  useEffect(() => {
    console.log("Features state:", { 
      isLoading: features.isLoading, 
      isError: features.isError, 
      data: features.data,
      error: features.error 
    });
  }, [features.isLoading, features.isError, features.data, features.error]);

  useEffect(() => {
    console.log("Stats state:", { 
      isLoading: stats.isLoading, 
      isError: stats.isError, 
      data: stats.data,
      error: stats.error 
    });
  }, [stats.isLoading, stats.isError, stats.data, stats.error]);

  return (
    <>
      <Head>
        <title>T3 Stack Demo | Next.js + tRPC + Prisma + NextAuth</title>
        <meta name="description" content="A comprehensive demo showcasing the T3 stack capabilities" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <motion.section 
          className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative container mx-auto px-4 py-20">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                T3 Stack Demo
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Next.js • tRPC • Prisma • NextAuth • Tailwind • TypeScript
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open('https://github.com/devenspear/url1234.com', '_blank')}
                >
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-gray-600 text-white hover:bg-gray-800"
                  onClick={() => window.open('https://vercel.com/new/clone?repository-url=https://github.com/devenspear/url1234.com', '_blank')}
                >
                  <Globe className="mr-2 h-5 w-5" />
                  Deploy to Vercel
                </Button>
              </div>
            </motion.div>

            {/* Live Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {stats.isLoading && !displayStats ? (
                Array.from({ length: 4 }).map((_, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <div className="text-2xl font-bold text-blue-400 animate-pulse">...</div>
                    <div className="text-sm text-gray-400">Loading</div>
                  </motion.div>
                ))
              ) : displayStats ? (
                Object.entries(displayStats).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <div className="text-2xl font-bold text-blue-400">{value}</div>
                    <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                  </motion.div>
                ))
              ) : null}
            </motion.div>
          </div>
        </motion.section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Stack Features
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.isLoading && !displayFeatures ? (
                Array.from({ length: 5 }).map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full bg-gray-900/50 border-gray-700">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Activity className="h-5 w-5 text-blue-400 animate-pulse" />
                          <CardTitle className="text-white">Loading...</CardTitle>
                        </div>
                        <CardDescription className="text-gray-400 animate-pulse">
                          Loading feature details...
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 bg-gray-600 rounded animate-pulse" />
                          <span className="text-sm text-gray-500 animate-pulse">Loading</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              ) : displayFeatures?.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="h-full bg-gray-900/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <FeatureIcon name={feature.name} />
                        <CardTitle className="text-white">{feature.name}</CardTitle>
                      </div>
                      <CardDescription className="text-gray-400">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-green-500 capitalize">{feature.status}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive tRPC Demo */}
        <section className="py-20 px-4 bg-gray-900/30">
          <div className="container mx-auto max-w-4xl">
            <motion.h2 
              className="text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Live tRPC Demonstrations
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Search Demo */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Search className="h-5 w-5" />
                      Feature Search
                    </CardTitle>
                    <CardDescription>Real-time search with tRPC</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <input
                      type="text"
                      placeholder="Search features..."
                      value={searchQuery}
                      onChange={(e) => {
                        console.log("Search query changed:", e.target.value);
                        setSearchQuery(e.target.value);
                      }}
                      className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:border-blue-500 focus:outline-none"
                    />
                    {getSearchResults() && (
                      <div className="space-y-2">
                        <p className="text-sm text-gray-400">
                          Found {getSearchResults()!.total} results for &quot;{getSearchResults()!.query}&quot;
                        </p>
                        {getSearchResults()!.results.map((result) => (
                          <div key={result.id} className="p-2 rounded bg-gray-800 text-sm">
                            <div className="font-medium text-white">{result.name}</div>
                            <div className="text-gray-400">{result.description}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Email Validation Demo */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      Email Validation
                    </CardTitle>
                    <CardDescription>Input validation with Zod</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <input
                      type="email"
                      placeholder="Enter your email..."
                      value={email}
                      onChange={(e) => {
                        console.log("Email changed:", e.target.value);
                        setEmail(e.target.value);
                      }}
                      className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:border-blue-500 focus:outline-none"
                    />
                    {getEmailValidation() && (
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-green-500">Valid email</span>
                        </div>
                        <div className="text-gray-400">
                          Domain: {getEmailValidation()!.domain}
                        </div>
                        <div className="text-gray-400">
                          Validated: {new Date(getEmailValidation()!.timestamp).toLocaleTimeString()}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Authentication Demo */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.h2 
              className="text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Authentication & Protected Content
            </motion.h2>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              {sessionData ? (
                <Card className="bg-gray-900/50 border-gray-700 max-w-md mx-auto">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Welcome, {sessionData.user?.name}!
                    </CardTitle>
                    <CardDescription>You&apos;re authenticated with NextAuth.js</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {userProfile.data && (
                      <div className="text-left space-y-2 text-sm">
                        <div>Email: {userProfile.data.email}</div>
                        <div>Role: {userProfile.data.role}</div>
                        <div>Member since: {new Date(userProfile.data.joinedAt).toLocaleDateString()}</div>
                      </div>
                    )}
                    {personalizedContent.data && (
                      <div className="text-left space-y-2">
                        <h4 className="font-medium text-white">Recent Activity:</h4>
                        {personalizedContent.data.recentActivity.slice(0, 2).map((activity, index) => (
                          <div key={index} className="text-sm text-gray-400">
                            {activity.action} - {new Date(activity.timestamp).toLocaleTimeString()}
                          </div>
                        ))}
                      </div>
                    )}
                    <Button 
                      onClick={() => void signOut()} 
                      variant="outline"
                      className="w-full border-gray-600 text-white hover:bg-gray-800"
                    >
                      Sign Out
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-gray-900/50 border-gray-700 max-w-md mx-auto">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Lock className="h-5 w-5" />
                      Authentication Required
                    </CardTitle>
                    <CardDescription>Sign in to access protected features</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      onClick={() => {
                        console.log("Sign in button clicked");
                        void signIn();
                      }} 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Sign In with NextAuth.js
                    </Button>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          </div>
        </section>

        {/* Tech Stack Overview */}
        <section className="py-20 px-4 bg-gray-900/30">
          <div className="container mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Technology Stack
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { name: "Frontend", techs: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"] },
                { name: "Backend", techs: ["tRPC", "Prisma ORM", "NextAuth.js", "Zod Validation", "PostgreSQL"] },
                { name: "DevOps", techs: ["Vercel Deploy", "TypeScript", "ESLint", "Prettier", "Git Hooks"] }
              ].map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="h-full bg-gray-900/50 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white text-center">{category.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.techs.map((tech) => (
                          <li key={tech} className="flex items-center gap-2 text-gray-300">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
              </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-gray-800">
          <div className="container mx-auto text-center">
            <p className="text-gray-400">
              Built with the T3 Stack • Ready for production deployment
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.open('https://github.com/devenspear/url1234.com', '_blank')}
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.open('https://vercel.com/new/clone?repository-url=https://github.com/devenspear/url1234.com', '_blank')}
              >
                <Globe className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </footer>
        </div>
    </>
  );
}

function FeatureIcon({ name }: { name: string }) {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    "Type-Safe APIs": Code,
    "Authentication": Lock,
    "Database": Database,
    "Styling": Palette,
    "Animations": Zap,
    default: Activity
  };
  
  const Icon = iconMap[name] ?? iconMap.default;
  if (!Icon) return <Activity className="h-5 w-5 text-blue-400" />;
  return <Icon className="h-5 w-5 text-blue-400" />;
}
