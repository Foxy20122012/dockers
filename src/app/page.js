import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-teal-300 w-screen h-screen p-2">
      <div>
        Hello world!
        change number three
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
