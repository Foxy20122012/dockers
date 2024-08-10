import Image from "next/image";

function Card({ children }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {children}
    </div>
  );
}

Card.Image = function CardImage({ src, alt }) {
  return (
    <Image
      className="w-full h-auto object-contain"
      src={src}
      alt={alt}
      width={500}
      height={300}
      priority
    />
  );
};

Card.Title = function CardTitle({ children }) {
  return (
    <h2 className="text-xl font-bold text-gray-800 p-4">{children}</h2>
  );
};

Card.Description = function CardDescription({ children }) {
  return (
    <p className="text-gray-600 p-4">{children}</p>
  );
};

export default Card;
