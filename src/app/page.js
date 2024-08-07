import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-cyan-600 w-screen h-screen">
      <div>
        Hello world!
      </div>
      <Image
        className=""
        src="/cat.jpg"
        alt="Next.js Logo"
        width={990}
        height={907}
        priority
      />
    </div>
  );
}
