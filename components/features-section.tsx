"use client";

import { Sun, Droplets, Wifi } from "lucide-react";
import { FeatureCard } from "./feature-card";
import { motion } from "framer-motion";

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16 text-gray-900"
        >
          Un pot intelligent qui prend soin de vos plantes
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Sun}
            title="Éclairage Optimisé"
            description="LED intégrées simulant la lumière naturelle pour une croissance optimale"
            delay={0.2}
          />
          <FeatureCard
            icon={Droplets}
            title="Arrosage Intelligent"
            description="Système automatisé qui s'adapte aux besoins de votre plante"
            delay={0.4}
          />
          <FeatureCard
            icon={Wifi}
            title="Connectivité"
            description="Suivi en temps réel via l'application mobile dédiée"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}