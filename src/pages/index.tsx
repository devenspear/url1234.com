import Head from "next/head";

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

      </div>
    </>
  );
}