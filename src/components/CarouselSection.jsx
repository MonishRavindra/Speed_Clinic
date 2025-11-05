import React, { useState } from "react";
import { Button } from "@mantine/core";

const photos = [
  "/Speed_Clinic/images/15.jpeg",
  "/Speed_Clinic/images/1.jpeg",
  "/Speed_Clinic/images/2.jpeg",
  "/Speed_Clinic/images/3.jpeg",
  "/Speed_Clinic/images/4.jpeg",
  "/Speed_Clinic/images/5.jpeg",
  "/Speed_Clinic/images/6.jpeg",
  "/Speed_Clinic/images/9.jpeg",
  "/Speed_Clinic/images/10.jpeg",
  "/Speed_Clinic/images/12.jpeg",
  "/Speed_Clinic/images/16.jpeg",
  "/Speed_Clinic/images/17.jpeg",
];

export default function CarouselSection() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  const next = () =>
    setIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));

  return (
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl text-blue-800 font-semibold mb-8">
        Clinic Gallery
      </h2>
      <div className="relative max-w-3xl mx-auto">
        <img
          src={photos[index]}
          alt={`Clinic photo ${index + 1}`}
          className="w-full h-[400px] object-cover rounded-2xl shadow-md"
        />
        <div className="flex justify-between mt-6">
          <Button onClick={prev} variant="outline" color="blue">
            ◀ Previous
          </Button>
          <Button onClick={next} variant="outline" color="blue">
            Next ▶
          </Button>
        </div>
        <p className="mt-4 text-gray-600">
          Photo {index + 1} of {photos.length}
        </p>
      </div>
    </section>
  );
}
