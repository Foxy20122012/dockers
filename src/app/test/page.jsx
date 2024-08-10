import Image from "next/image";
import Card from "../components/card"
import cardData from "../utils/Card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {cardData.map((card, index) => (
        <Card key={index}>
          <Card.Image src={card.imageUrl} alt={card.title} />
          <Card.Title>{card.title}</Card.Title>
          <Card.Description>{card.description}</Card.Description>
        </Card>
      ))}
    </div>
  </div>
  );
}
