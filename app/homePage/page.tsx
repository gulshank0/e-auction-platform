"use client";

import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";

import Navvbar from "@/components/ui/navvbar";
import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <>
      <div className="bg-black">
        <Navvbar />
        <div>
          <div className="h-[100vh] w-full bg-black relative overflow-hidden">
            {/* Background with stars */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)]" />
              <div className="stars absolute inset-0" />
            </div>

            {/* Content */}
            <div className=" relative z-10 flex  items-center justify-center h-full text-center">
              <h1 className="text-4xl md:text-4xl font-bold text-white mb-8 grid grid-cols-3 ">
                <Card title=" First dash" />
                <Card title=" Second Elements" />
                <Card title=" Third Elements" />
                <Card title=" Fourth Elements" />
                <Card title=" Fifth Elements" />
                <Card title=" sith Elements" />
              </h1>
            </div>

            {/* Multiple shooting star layers with different colors and speeds */}
            <ShootingStars
              starColor="#9E00FF"
              trailColor="#2EB9DF"
              minSpeed={15}
              maxSpeed={35}
              minDelay={1000}
              maxDelay={2000}
            />
            <ShootingStars
              starColor="#FF0099"
              trailColor="#FFB800"
              minSpeed={10}
              maxSpeed={25}
              minDelay={2000}
              maxDelay={4000}
            />
            <ShootingStars
              starColor="#00FF9E"
              trailColor="#00B8FF"
              minSpeed={20}
              maxSpeed={40}
              minDelay={1500}
              maxDelay={3500}
            />

            <style jsx>{`
              .stars {
                background-image:
                  radial-gradient(2px 2px at 20px 30px, #eee, rgba(0, 0, 0, 0)),
                  radial-gradient(2px 2px at 40px 70px, #fff, rgba(0, 0, 0, 0)),
                  radial-gradient(
                    2px 2px at 50px 160px,
                    #ddd,
                    rgba(0, 0, 0, 0)
                  ),
                  radial-gradient(2px 2px at 90px 40px, #fff, rgba(0, 0, 0, 0)),
                  radial-gradient(
                    2px 2px at 130px 80px,
                    #fff,
                    rgba(0, 0, 0, 0)
                  ),
                  radial-gradient(
                    2px 2px at 160px 120px,
                    #ddd,
                    rgba(0, 0, 0, 0)
                  );
                background-repeat: repeat;
                background-size: 200px 200px;
                animation: twinkle 5s ease-in-out infinite;
                opacity: 0.5;
              }

              @keyframes twinkle {
                0% {
                  opacity: 0.5;
                }
                50% {
                  opacity: 0.8;
                }
                100% {
                  opacity: 0.5;
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </>
  );
}
