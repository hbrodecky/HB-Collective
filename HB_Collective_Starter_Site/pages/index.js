
import React from "react";
import Link from "next/link";
import Image from "next/image";

const posts = [];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-pink-50 p-4">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-pink-600">HB Collective</h1>
        <p className="text-md text-gray-600 italic mt-2">Curated outfits to shop & pin 💖</p>
      </header>

      <div className="text-center text-gray-400">
        <p>No outfits yet. Come back soon for fresh looks! 💅</p>
      </div>
    </div>
  );
}
