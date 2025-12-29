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

export default function Gallery() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Gallery
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-gray-600">
              Explore all the moments captured from our classrooms, labs and
              campus events.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {classImages.map((image) => (
              <div
                key={image.id}
                className="group overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium text-gray-800">
                    {image.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
