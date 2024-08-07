

export default function Home() {
    return (
        <div className="bg-sky-700 w-screen" >
            <div>
                Hello world!
            </div>
            <Image
                className=""
                src="/cat.jpg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
            />
        </div>
    );
}

