import React from "react";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Aarav Nair",
    location: "Bangalore",
    text: "Dr. Kuval is one of the most patient and understanding doctors I’ve met. He doesn’t rush through appointments and truly listens. His diagnosis for my recurring headaches was spot on!",
  },
  {
    name: "Priya Menon",
    location: "Dubai",
    text: "Even though I live abroad, the online consultation felt as personal as visiting in person. He explained everything clearly and made sure I got the right treatment promptly.",
  },
  {
    name: "Rahul Deshmukh",
    location: "Mysore",
    text: "I really appreciate the professionalism and kindness shown at Speed Clinic & Pharma. The staff and Dr. Kuval made me feel comfortable and cared for. Highly recommended!",
  },
  {
    name: "Sneha Iyer",
    location: "London",
    text: "Getting an appointment from overseas was so easy. Dr. Kuval’s follow-ups and attention to detail make you feel truly cared for. I trust his advice completely!",
  },
  {
    name: "Manoj Pillai",
    location: "Bangalore",
    text: "I had an amazing experience! Dr. Kuval doesn’t just prescribe medicine — he explains the root cause and gives lifestyle advice that genuinely works.",
  },
  {
    name: "Ritika Sharma",
    location: "Chennai",
    text: "Very kind and approachable. It’s rare to find a doctor who is both professional and empathetic. Speed Clinic feels like a place that truly cares for your well-being.",
  },
];

export default function ReviewSection() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="w-full bg-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl mb-12 text-blue-800 font-semibold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What Our Patients Say
        </motion.h2>

        {/* Animated Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={card}
              className="bg-[#FCF9EA] rounded-xl shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left"
            >
              <p className="text-gray-700 italic mb-4 leading-relaxed">
                “{review.text}”
              </p>
              <h3 className="font-semibold text-blue-700">{review.name}</h3>
              <div className="flex items-center text-gray-500 mt-1">
                <MapPin size={16} className="text-blue-600 mr-1" />
                <span className="text-sm">{review.location}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
