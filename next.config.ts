import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig : NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Dacă folosești imagini optimizate de Next.js
  },
};

module.exports = nextConfig;
