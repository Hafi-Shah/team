// pages/index.tsx
import React from "react";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Next.js with TypeScript</h1>

      <Link href="/about">Go to About Page</Link>
    </div>
  );
};

export default HomePage;
