'use client';

import React from 'react';
import Image from "next/image";
import { motion, useAnimation } from 'framer-motion';
import { MessageSquare, FileSearch, TrendingUp, ShieldAlert, Phone } from 'lucide-react';

interface AnimatedSectionProps {
  timelineData: Array<{ title: string; content: React.ReactNode }>;
}

export default function AnimatedSection({ timelineData }: AnimatedSectionProps) {
  const achievements = [
    { 
      text: "Improved client's Q&A chatbot, boosting accuracy by 290%", 
      icon: <MessageSquare className="w-6 h-6 text-teal-400" />,
    },
    { 
      text: "Built pipeline to process unstructured text and surface actionable insights", 
      icon: <FileSearch className="w-6 h-6 text-blue-400" />,
    },
    { 
      text: "Led development of NLP solutions for financial advisor call analysis", 
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
    },
    { 
      text: "Engineered fraud detection system to identify elder abuse signs", 
      icon: <ShieldAlert className="w-6 h-6 text-teal-400" />,
    },
    { 
      text: "Product lead for AI-driven call summarization tool integrated with Salesforce", 
      icon: <Phone className="w-6 h-6 text-blue-400" />,
    },
  ];

  const controls = useAnimation();

  React.useEffect(() => {
    const animateItems = async () => {
      await controls.start("headerVisible");
      await controls.start("itemsVisible");
    };
    animateItems();
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-gradient-to-b from-zinc-800 to-zinc-900 shadow-lg transition-all duration-300 hover:shadow-xl drop-shadow-md mb-4" // Added drop-shadow-md and mb-4
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-10 py-12">
        <div className="flex flex-col md:flex-row items-start gap-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-2/3"
          >
            <h2 className="font-bold text-3xl md:text-4xl mb-6 text-zinc-100">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="inline-block bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-transparent bg-clip-text"
              >
                So who am I?
              </motion.span>
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-zinc-300 text-lg mb-6"
            >
              As a Senior Data Scientist and AI Consultant at Ernst & Young, I focus on R&D with large language models (LLMs) and developing AI-driven solutions at the enterprise level.
            </motion.p>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={controls}
              variants={{
                headerVisible: {
                  opacity: 1,
                  transition: { delay: 0.9, duration: 0.5 }
                }
              }}
              className="font-semibold text-2xl mb-4 text-zinc-100"
            >
              Key Achievements:
            </motion.h3>
            <motion.div
              initial="hidden"
              animate={controls}
              variants={{
                hidden: {},
                itemsVisible: {
                  transition: { staggerChildren: 0.5 }
                }
              }}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    itemsVisible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.4 }
                    }
                  }}
                  className="flex items-center space-x-3 mb-3"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {achievement.icon}
                  </motion.div>
                  <p className="text-zinc-300 text-base">
                    {achievement.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: achievements.length * 0.5 + 1 }} // Adjusted delay
              className="text-zinc-400 mt-6 text-lg italic"
            >
              Explore my timeline below to discover the key moments that have shaped my career and personal interests.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full md:w-1/3 relative h-[300px] md:ml-8"
          >
            <Image
              src="/headshot-v2.jpeg"
              alt="Headshot"
              fill
              style={{ objectFit: "cover", width: "400px", height: "400px" }}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}