"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";
import { LampContainer } from "@/components/ui/lamp";
import { use } from "react";
export default function Home() {
  return (
    <>
      <nav className="bg-gradient-to-r from-slate-950  to-cyan-400 p-4">
        <div className="container mx-auto flex justify-between items-center space-x-5 ">
          <div className="text-white text-3xl text-pretty font-bold">E-Auction Platform</div>
          <div className="flex items-center space-x-4">
            <Button className="text-white bg-gray-900">Home</Button>
            <Button className="text-white bg-gray-900">Auctions</Button>
            <Button className="text-white bg-gray-900 ">Contact</Button>
            <div className="ml-8 space-x-4 ">
              <Button variant="outline" className="text-black-600">Sign In</Button>
              <Button variant="default" className="text-black-600 text-white">Sign Up</Button>
            </div>
          </div>
        </div>
      </nav>
<main>
<div>
  <div className=" bg-black text-4xl text-white flex items-center justify-center relative h-[100vh] " >
    

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
      <GradientButton>Know More</GradientButton>
      <GradientButton variant="variant">Let's Go</GradientButton>
    </div>

        E-auctions bring transparency, efficiency,<br/> making buying and selling smarter and faster. <br /> the right way
      </motion.h1>
    </LampContainer>
   


  </div>

</div>



</main>




    </>
  );
}
