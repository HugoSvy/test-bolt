"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604762524889-3e2fcc145683?q=80&w=2071')] bg-cover bg-center opacity-20" />
      <div className="relative max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center mb-6"
        >
          <Leaf className="h-12 w-12 text-green-600 mr-2" />
          <h1 className="text-5xl font-bold text-gray-900">Edgar</h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl text-gray-700 mb-8 max-w-2xl mx-auto"
        >
          Votre compagnon végétal intelligent qui rend la culture des plantes accessible à tous
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Découvrir Edgar
          </Button>
        </motion.div>
      </div>
    </section>
  );
}