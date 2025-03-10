import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="flex justify-between text-pretty p-4  bg-gradient-to-r from-lime-200  to accent-lime-500">
        <div>
          <p>Logo</p>
        </div>

        <Button className="bg-gradient-to-r from-lime-500 to from-lime-200 text-pretty text-black">
          Home{" "}
        </Button>
        <Button>Feedback</Button>
        <Button>About us</Button>
        <Button>Contact Us</Button>
        <Button>Blogs </Button>

        <div>
          <Button>Sign in</Button>

          <Button>Sign up</Button>
        </div>
      </div>
    </>
  );
}
