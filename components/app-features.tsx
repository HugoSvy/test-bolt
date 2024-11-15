"use client";

import { motion } from "framer-motion";
import { Sprout, Users, MessageCircle } from "lucide-react";

export function AppFeatures() {
  return (
    <section className="py-24 bg-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Une application intuitive pour tous
            </h2>
            <div className="space-y-6">
              {[
                {
                  icon: Sprout,
                  title: "Suivi en temps réel",
                  description: "Recevez des notifications sur l'état de santé de vos plantes"
                },
                {
                  icon: Users,
                  title: "Communauté active",
                  description: "Échangez avec d'autres passionnés et partagez vos expériences"
                },
                {
                  icon: MessageCircle,
                  title: "Conseils personnalisés",
                  description: "Obtenez des recommandations adaptées à votre niveau"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <feature.icon className="h-6 w-6 text-green-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=1974"
              alt="Application mobile Edgar"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}