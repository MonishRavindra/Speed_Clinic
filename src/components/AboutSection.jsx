import React from "react";
import { Title, Text, Image, Card } from "@mantine/core";

export default function AboutSection() {
  return (
    <section className="w-full py-16 bg-[#FAF6E3]">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 max-w-7xl mx-auto">
        {/* Text Container */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-start mt-10 md:mt-0">
          <Card
            shadow="md"
            radius="lg"
            padding="xl"
            className="bg-[#FCF9EA] border border-gray-100"
          >
            <Title
              order={1}
              className="m-6 text-center md:text-left text-blue-900 font-semibold"
            >
              About Dr. Kuval H. J.
            </Title>

            <Text className="m-4 text-lg leading-relaxed">
              Dr. Kuval H. J. is a trusted physician based in Bangalore with
              over five years of clinical experience. He completed his MBBS at
              the prestigious Mandya Institute of Medical Sciences, where he
              developed a deep interest in preventive medicine and holistic
              wellness. His dedication to understanding each patient’s lifestyle
              and concerns sets him apart in today’s fast-paced healthcare
              environment.
            </Text>

            <Text className="m-4 text-lg leading-relaxed">
              Known for his approachable nature, Dr. Kuval believes that good
              healthcare begins with active listening. Every consultation —
              whether in person or online — is conducted with patience and
              empathy, ensuring that no symptom or question goes unnoticed. He
              encourages patients to take an active role in their health and
              focuses on sustainable lifestyle changes that reduce dependence on
              medication.
            </Text>

            <Text className="m-4 text-lg leading-relaxed">
              Through his initiative,{" "}
              <strong>Speed Clinic & Pharma</strong>, Dr. Kuval aims to make
              medical care more accessible, confidential, and convenient. The
              clinic offers both physical consultations and online services for
              those seeking discreet or remote medical guidance. From everyday
              ailments to long-term wellness planning, Dr. Kuval provides
              reliable medical advice tailored to each patient’s unique needs.
            </Text>

            <Text className="text-lg leading-relaxed m-4">
              His philosophy is simple yet powerful — “The best medicine is the
              one which you never have to take.” By focusing on prevention,
              education, and lifestyle management, he strives to empower people
              to live healthier, happier, and medicine-free lives.
            </Text>
          </Card>
        </div>

        {/* Image Container */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/Speed_Clinic/images/Dr.Kuval.jpeg"
            alt="Dr. Kuval H. J."
            width={280}
            height={280}
            radius="lg"
            className="shadow-lg border border-white"
          />
        </div>
      </div>
    </section>
  );
}
