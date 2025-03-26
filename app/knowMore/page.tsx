import React from "react";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import Navvbar from "@/components/ui/navvbar";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="bg-black min-h-screen">
          <Navvbar />
          <div className="container mx-auto px-4">
            <div className="pt-24">
              <FeaturesSectionWithHoverEffects />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
