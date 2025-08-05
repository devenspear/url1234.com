import Head from "next/head";
import Link from "next/link";

// Force deployment trigger

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello World | url1234.com</title>
        <meta name="description" content="Welcome to url1234.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen flex flex-col items-center justify-center bg-black">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center mb-8">
          Hello World
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link 
            href="/t3demo"
            className="text-lg md:text-xl text-blue-400 hover:text-blue-300 transition-colors underline"
          >
            T3 Stack Demo →
          </Link>
          <span className="text-gray-500 hidden sm:inline">|</span>
          <Link 
            href="/OADemo"
            className="text-lg md:text-xl text-purple-400 hover:text-purple-300 transition-colors underline"
          >
            OA Demo →
          </Link>
        </div>
      </div>
    </>
  );
}