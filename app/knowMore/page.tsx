import React from "react";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import Navvbar from "@/components/ui/navvbar";

export default function Home() {
  return (
    <>
      <div className="relative bottom-0">
        <Navvbar />

        <div className="bg-black">
          <div className="min-h-screen w-full">
            <div className="absolute top-0 left-0 w-full">
              <FeaturesSectionWithHoverEffects />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
