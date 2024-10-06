// pages/index.tsx
import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { Team } from "./layout/team/team";
import { motion } from "framer-motion";
const HomePage: React.FC = () => {
  return (
    <div>
      <Team />
    </div>
  );
};

export default HomePage;
