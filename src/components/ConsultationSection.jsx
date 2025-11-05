import React from "react";
import { Button, Title, Text, Card, Group } from "@mantine/core";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function ConsultationSection() {
  return (
    <section className="w-full bg-[#FAF6E3] py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <Title
          order={2}
          className="text-3xl mb-8 text-blue-800 font-semibold tracking-wide"
        >
          Free Text Consultation
        </Title>

        <Card
          shadow="md"
          radius="lg"
          padding="xl"
          className="bg-[#FCF9EA] border border-gray-100 max-w-3xl mx-auto"
        >
          <Text className="text-lg leading-relaxed m-4">
            Have a quick health question or need a doctor’s opinion before booking a visit?
            <br></br>
            <strong> Dr. Kuval H. J.</strong> offers free text consultations so you can connect
            with him directly and receive trusted medical guidance from the comfort of your home.
          </Text>

          <Text className="text-lg leading-relaxed m-4">
            You can easily reach out via{" "}
            WhatsApp or{" "}
            Instagram.
            Simply send your query — no registration or app download required.
          </Text>

          <Text className="text-lg leading-relaxed m-4">
            The <strong>first text consultation is free</strong>. Based on your concern,
            Dr. Kuval may suggest a detailed <strong>phone or video consultation</strong>,
            which can be scheduled on the same or next day at just{" "}
            <strong>₹299</strong>.
          </Text>

          <Text className="text-lg leading-relaxed m-4">
            For <strong>in-person visits</strong>, simply share your preferred
            date and time — our team will confirm your slot and make all necessary
            arrangements for a seamless experience.
          </Text>

          <Group
            position="center"
            spacing="xl"
            className="m-8 flex flex-wrap justify-center gap-4"
          >
            {/* WhatsApp Button */}
            <Button
              size="lg"
              radius="xl"
              component="a"
              href="https://wa.me/917760945779"
              target="_blank"
              rel="noreferrer"
              leftSection={<FaWhatsapp size={22} color="#25D366" />}
              className="hover:scale-105 transition-transform duration-200 shadow-md bg-white text-green-700 border border-green-300 hover:bg-green-50"
            >
              Chat on WhatsApp
            </Button>

            {/* Instagram Button */}
            <Button
              size="lg"
              radius="xl"
              component="a"
              href="https://www.instagram.com/speed_health_bengaluru?igsh=MWFpcHQ5dWxiMDljYQ=="
              target="_blank"
              rel="noreferrer"
              leftSection={
                <FaInstagram
                  size={22}
                  color="#fff"
                  style={{
                    background:
                      "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                    borderRadius: "50%",
                    padding: "3px",
                  }}
                />
              }
              className="hover:scale-105 transition-transform duration-200 shadow-md bg-white text-pink-700 border border-pink-300 hover:bg-pink-50"
            >
              Connect on Instagram
            </Button>
          </Group>
        </Card>
      </div>
    </section>
  );
}
