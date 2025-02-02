"use client";

import type { CardInfo } from "@/types";
import { Card, CardFooter, Image } from "@nextui-org/react";
import Tilt from "react-parallax-tilt";

type FeatureCardProps = {
  feature: CardInfo;
};

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      glareEnable
      glareColor="#34d2eb"
      glareMaxOpacity={0.2}
      glarePosition="all"
      glareBorderRadius="10px"
      className="mx-1"
    >
      <Card
        isFooterBlurred
        radius="lg"
        className="border-none bg-primary-foreground/10 backdrop-blur-sm h-full"
      >
        <Image
          alt={feature.title}
          className="object-cover"
          height={300}
          src={feature.image}
          width={500}
        />
        <CardFooter className="flex-col justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 bg-gray-800/70">
          <h1 className="font-heading text-lg">{feature.title}</h1>
          <p className="text-sm text-white/80">{feature.description}</p>
        </CardFooter>
      </Card>
    </Tilt>
  );
}
