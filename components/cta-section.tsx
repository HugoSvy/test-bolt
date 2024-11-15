"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-24 bg-green-600 text-white"
    >
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-6">
          Prêt à révolutionner votre expérience du jardinage ?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Rejoignez la communauté Edgar et transformez votre espace en un paradis végétal
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="bg-white text-green-600 hover:bg-gray-100"
        >
          Précommander maintenant
        </Button>
      </div>
    </motion.section>
  );
}