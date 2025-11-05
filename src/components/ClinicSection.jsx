import React from "react";
import { Title, Text, Card, Divider } from "@mantine/core";
import { motion } from "framer-motion";

export default function ClinicSection() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="bg-[#FAF6E3] py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card
            shadow="md"
            radius="md"
            p="xl"
            className="border border-gray-100 shadow-lg bg-[#FCF9EA]"
          >
            <motion.div variants={fadeUp}>
              <Title
                order={2}
                className="text-3xl font-bold text-blue-800 m-4 text-center md:text-left"
              >
                Speed Clinic & Pharma
              </Title>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Text size="lg" className="text-gray-700 leading-relaxed m-6">
                Founded by <strong>Dr. Kuval H. J.</strong>, Speed Clinic & Pharma
                is a modern, patient-centered healthcare space built on trust,
                compassion, and innovation. We combine in-clinic consultations with
                advanced telemedicine to make high-quality healthcare accessible to
                everyone — from local residents to global patients.
              </Text>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Text size="lg" className="text-gray-700 leading-relaxed m-6">
                Our clinic provides a complete spectrum of medical services — from
                general checkups to long-term health management. We emphasize
                evidence-based care and preventive health to ensure that every
                patient receives not just treatment, but lasting wellness guidance.
              </Text>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Divider my="lg" />
            </motion.div>

            <motion.div variants={fadeUp}>
              <Title
                order={3}
                className="text-2xl font-semibold text-blue-700 m-4 text-center md:text-left"
              >
                For Indians Living Abroad
              </Title>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Text size="lg" className="text-gray-700 leading-relaxed m-4">
                If you are an <strong>Indian living abroad</strong>, you can now
                receive personalized virtual consultations directly from{" "}
                <strong>Dr. Kuval</strong>. Our international service ensures
                complete privacy, secure digital records, and seamless coordination
                for prescriptions and follow-ups — no matter where you are in the
                world.
              </Text>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Text size="lg" className="text-gray-700 leading-relaxed m-4">
                We understand the challenges of accessing trusted medical care when
                you’re away from home. That’s why Speed Clinic & Pharma bridges this
                gap with compassionate, reliable healthcare tailored to your needs
                — anytime, anywhere.
              </Text>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
