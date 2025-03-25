import { SectionProps, SectionHeaderProps } from "@/types/section";
import React from "react";

export function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative my-6 lg:my-24 min-h-screen ${className || ""}`}
    >
      {children}
    </section>
  );
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="head-text primary-gradient">{title}</h1>
      {description && <p className="text-2xl max-w-lg mt-4">{description}</p>}
    </div>
  );
} 