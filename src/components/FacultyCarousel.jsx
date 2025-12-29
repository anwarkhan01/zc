import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const faculty = [
  { name: "Prof. Anjali Deshmukh", qualification: "M.Sc. Mathematics, Ph.D." },
  { name: "Dr. Vikram Patil", qualification: "M.Com, Ph.D. Commerce" },
  { name: "Prof. Meera Joshi", qualification: "M.Sc. Physics, M.Ed." },
  { name: "Dr. Sanjay Kulkarni", qualification: "M.Com, Ph.D. Accountancy" },
  { name: "Prof. Priya Sharma", qualification: "M.Sc. Chemistry, B.Ed." },
  { name: "Dr. Ramesh More", qualification: "M.Com, Ph.D. Finance" },
  { name: "Prof. Kavita Pawar", qualification: "M.Sc. Mathematics, M.Ed." },
  { name: "Dr. Nitin Jadhav", qualification: "M.Com, Ph.D. Economics" },
  { name: "Prof. Sunita Gaikwad", qualification: "M.Sc. Biology, B.Ed." },
  { name: "Dr. Mahesh Thakur", qualification: "M.Com, Ph.D. Business Studies" },
  { name: "Prof. Deepa Naik", qualification: "M.Sc. Mathematics, M.Ed." },
  { name: "Dr. Ashok Sutar", qualification: "M.Com, Ph.D. Commerce" },
];

export default function FacultyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 3);
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const totalSlides = Math.ceil(faculty.length / itemsPerView);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getVisibleFaculty = () => {
    const start = currentIndex * itemsPerView;
    return faculty.slice(start, start + itemsPerView);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Our Faculty
        </h2>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className={`min-w-full grid gap-6 px-2 ${
                    itemsPerView === 1 ? "grid-cols-1" : "grid-cols-3"
                  }`}
                >
                  {faculty
                    .slice(
                      slideIndex * itemsPerView,
                      (slideIndex + 1) * itemsPerView
                    )
                    .map((member, idx) => (
                      <Card
                        key={idx}
                        className="shadow-md hover:shadow-lg transition-shadow"
                      >
                        <CardContent className="p-6 text-center">
                          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                            <img
                              src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&sig=${idx}`}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="font-semibold text-lg mb-2 text-gray-900">
                            {member.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {member.qualification}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
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

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-8 bg-red-600"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
