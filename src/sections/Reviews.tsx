// components/sections/Reviews.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Review {
  id: string;
  rating: number;
  text: string;
  author: string;
  role: string;
}

const reviews: Review[] = [
  {
    id: "1",
    rating: 5,
    text: "Reliance Staffing has been a game-changer in helping us achieve optimal staffing levels. Their commitment to providing skilled, compassionate candidates is unmatched.",
    author: "Sarah Johnson",
    role: "Care Home Manager"
  },
  {
    id: "2",
    rating: 5,
    text: "Reliance’s flexibility and dedication make a difference daily. They understand our needs deeply and consistently provide outstanding healthcare professionals.",
    author: "Michael Williams",
    role: "Healthcare Director"
  },
  {
    id: "3",
    rating: 5,
    text: "Reliance transformed our staffing process, bringing reliability and quality to every shift. Their staff feels like part of our team.",
    author: "Emma Thompson",
    role: "Care Home Manager"
  }
];

export function Reviews() {
  return (
    <section className="py-16 bg-gray-50" id="reviews">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Trusted by Leading Healthcare Providers Nationwide
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{review.text}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{review.author}</p>
                  <p className="text-gray-600 text-sm">{review.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}