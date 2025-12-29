import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const classImages = [
  {
    id: 1,
    title: "Interactive Classroom",
    url: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&h=500&fit=crop",
  },
  {
    id: 2,
    title: "Focused Learning",
    url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=500&fit=crop",
  },
  {
    id: 3,
    title: "Modern Computer Lab",
    url: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&h=500&fit=crop",
  },
  {
    id: 4,
    title: "Collaborative Study",
    url: "https://images.unsplash.com/photo-1523580846011-23a25c1a0f2b?w=800&h=500&fit=crop",
  },
  {
    id: 5,
    title: "Science Classroom",
    url: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&h=500&fit=crop",
  },
  {
    id: 6,
    title: "Library Session",
    url: "https://images.unsplash.com/photo-1518607692857-bff9babd9ab5?w=800&h=500&fit=crop",
  },
  {
    id: 7,
    title: "Group Discussion",
    url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=500&fit=crop",
  },
  {
    id: 8,
    title: "Presentation Room",
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop",
  },
];

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const totalSlides = Math.ceil(classImages.length / itemsPerView);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Gallery
            </h2>
            <p className="mt-2 text-gray-600">
              A glimpse into our classrooms, labs and learning spaces.
            </p>
          </div>
          <Link to="/gallery" className="hidden sm:inline-block">
            <Button
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-50"
            >
              View all
            </Button>
          </Link>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className={`min-w-full grid gap-6 ${
                    itemsPerView === 1
                      ? "grid-cols-1"
                      : itemsPerView === 2
                      ? "grid-cols-2"
                      : "grid-cols-3"
                  }`}
                >
                  {classImages
                    .slice(
                      slideIndex * itemsPerView,
                      (slideIndex + 1) * itemsPerView
                    )
                    .map((image) => (
                      <Card
                        key={image.id}
                        className="overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                      >
                        <div className="h-56 md:h-64 w-full overflow-hidden">
                          <img
                            src={image.url}
                            alt={image.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-4">
                          <p className="font-medium text-gray-800">
                            {image.title}
                          </p>
                        </div>
                      </Card>
                    ))}
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg hover:bg-gray-50"
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg hover:bg-gray-50"
            onClick={goToNext}
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link to="/gallery" className="inline-block">
            <Button variant="link" className="text-red-600">
              View all
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
