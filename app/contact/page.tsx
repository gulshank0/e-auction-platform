import { GithubIcon, LinkedinIcon, Twitter } from "lucide-react";
import Navvbar from "@/components/ui/navvbar";
import Image from "next/image";

function TeamPage() {
  return (
    <>
      <div className="min-h-screen bg-black ">
        <Navvbar />
        <div className="pt-30 flex justify-center ">
          <div className=" bg-gradient-to-br from-blue-500 to-red-500 rounded-4xl py-40 px-40 flex flex-col hover:bg-transparent transition delay-150 duration-100 ease-in-out hover:translate-y-1 hover:scale-110 ">
            <Image
              src="/CuteCat.png"
              alt="Description"
              width={160}
              height={160}
              className=" flex  w-40 h-40 rounded-full hover:cursor-pointer"
            />

            <p className="text-4xl font-bold text-center pt-4">Linux Guy</p>
            <p className="text-center">
              Full Stack Developer <br /> Using Arch btw
            </p>
            <div className="flex space-x-4 pt-3 justify-center">
              <a
                href="https://x.com/gulshank0"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow on Twitter"
              >
                <Twitter className="cursor-pointer" />
              </a>
              <a
                href="https://github.com/gulshank0"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit GitHub Profile"
              >
                <GithubIcon className="cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/gulshan-kumar-872512270/"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit LinkedIn Profile"
              >
                <LinkedinIcon className="cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamPage;

