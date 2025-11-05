import React from "react";
import { Title, Text } from "@mantine/core";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "4rem 1rem",
        background: "#FAF6E3",
      }}
    >
      {/* Animated Logo */}
      <motion.img
        src="/images/logo.jpeg"
        alt="Speed Clinic & Pharma Logo"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          width: "300px",
          height: "200px",
          objectFit: "contain",
          margin: "0 auto 1rem",
        }}
      />

      {/* Animated Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      >
        <Title
          order={1}
          style={{
            color: "#1E40AF", // Tailwind blue-800
            fontWeight: 700,
            letterSpacing: "0.5px",
          }}
        >
          Speed Clinic & Pharma
        </Title>
      </motion.div>

      {/* Animated Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Text size="lg" mt="md" italic c="dimmed">
          "The best medicine is the one which you never have to take"
        </Text>
      </motion.div>

      {/* Animated Description */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <Text mt="md" size="md">
          Providing compassionate, confidential, and convenient healthcare — both in-person
          and online — under the guidance of <strong>Dr. Kuval H. J.</strong>
        </Text>
      </motion.div>
    </div>
  );
}
