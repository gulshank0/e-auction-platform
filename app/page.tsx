"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";
import { LampContainer } from "@/components/ui/lamp";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/navbar";
export default function Home() {
  const router = useRouter();
  return (
    <>
      <Navbar />

      <main>
        <div>
          <div className="bg-black text-4xl text-white flex items-center justify-center relative h-[100vh]">
            <LampContainer>
              <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 px-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
              >
                E-Auctions bring Transparency, Efficiency,
                <br /> making Buying and Selling Smarter and Faster. <br /> 
                the right way
                
                <div className="flex gap-8 justify-center text-4xl mt-12">
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
              </motion.h1>
            </LampContainer>
          <Footer />
          </div>
         
        </div>
      </main>
    </>
  );
}
