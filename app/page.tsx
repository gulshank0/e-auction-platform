"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";
import { LampContainer } from "@/components/ui/lamp";
import Navbar from "@/components/ui/navbar";
export default function Home() {
  const router = useRouter();
  return (
    <>
      <Navbar />

      <main>
        <div>
          <div className=" bg-black text-4xl text-white flex items-center justify-center relative h-[100vh] ">
            <LampContainer>
              <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-2 px-2 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
              >
                <div className="flex gap-8 justify-center text-4xl ">
                  <GradientButton onClick={() => router.push("/knowMore")}>
                    Know More
                  </GradientButton>
                  <GradientButton
                    variant="variant"
                    onClick={() => router.push("/homePage")}
                  >
                    Lets Go
                  </GradientButton>
                </div>
                E-Auction's bring Transparency, Efficiency,
                <br /> making Buying and Selling Smarter and Faster. <br /> the
                right way
              </motion.h1>
            </LampContainer>
          </div>
        </div>
      </main>
    </>
  );
}
