import React from "react";
import { Title, Text, Card } from "@mantine/core";

export default function InternationalSection() {
  return (
    <section className="w-full bg-[#FAF6E3] py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <Title
          order={2}
          className="text-3xl mb-8 text-blue-800 font-semibold"
        >
          For Indians Living Abroad
        </Title>

        <Card
          shadow="md"
          radius="md"
          padding="xl"
          className="border border-gray-100 shadow-lg bg-[#FCF9EA]"
        >
          <Text className="text-lg leading-relaxed m-4">
            Are you an <strong>Indian living abroad</strong> and missing the comfort of
            familiar, trustworthy medical advice? <strong>Dr. Kuval H. J.</strong> now offers secure
            <strong> virtual consultations</strong> designed especially for NRIs who prefer
            expert healthcare with a personal Indian touch.
          </Text>

          <Text className="text-lg leading-relaxed m-4">
            Whether you need a second opinion, ongoing guidance for a health condition, or
            general wellness advice, Dr. Kuval provides <strong>confidential, timely, and
            convenient online consultations</strong>. Each appointment is handled with care,
            empathy, and attention to detail — just as if you were visiting the clinic in
            person.
          </Text>

          <Text className="text-lg leading-relaxed m-4">
            We understand the challenges of managing health across time zones. That’s why
            <strong> appointments are flexible and scheduled according to your local time</strong>,
            ensuring a stress-free experience. Prescriptions and medical notes are shared
            digitally, and follow-ups can be arranged through WhatsApp or email for
            continued support.
          </Text>

          <Text className="text-lg leading-relaxed m-4">
            If you’re helping coordinate care for your parents or family members in India,
            we also offer <strong>cross-border family consultations</strong> — allowing you to
            stay informed and involved in every step of their treatment.
          </Text>

          <Text className="text-lg leading-relaxed m-4">
            Distance should never come between you and your health. With
            <strong> Speed Clinic & Pharma</strong>, Dr. Kuval brings compassionate, accessible,
            and professional healthcare to your fingertips — no matter where in the world you are.
          </Text>
        </Card>
      </div>
    </section>
  );
}
