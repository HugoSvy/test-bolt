"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

export function FeatureCard({ icon: Icon, title, description, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-4">
          <Icon className="h-8 w-8 text-green-600" />
          <h3 className="text-xl font-semibold ml-3">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </Card>
    </motion.div>
  );
}