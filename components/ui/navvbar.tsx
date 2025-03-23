"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

export default function Navvbar() {
  const router = useRouter();

  return (
    <>
      <nav className="bg-transparent-2xl p-4 sticky top-0 z-50 ">
        <div className="container mx-auto flex justify-between items-center space-x-5 ">
          <div
            className="text-white text-3xl text-pretty font-bold hover:cursor-pointer "
            onClick={() => window.location.reload()}
          >
            E-Auction Platform
          </div>
          <div className="flex items-center space-x-4">
            <Button
              className="text-white text-2xl bg-black hover:bg-gray-600 cursor-pointer"
              onClick={() => router.push("/")}
            >
              Home
            </Button>
            <Button
              className="text-white text-2xl bg-black hover:bg-gray-600 cursor-pointer"
              onClick={() => router.push("/signin")}
            >
              Auctions
            </Button>
            <Button className="text-white text-2xl bg-black hover:bg-gray-600 cursor-pointer ">
              Contact
            </Button>
            <div className="ml-8 space-x-4 ">
              <Button
                variant="outline"
                className="text-black-600 hover:cursor-pointer"
              >
                Sign In
              </Button>
              <Button
                variant="default"
                className=" text-white hover:cursor-pointer "
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

