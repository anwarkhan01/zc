import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const branches = [
  {
    name: "Zean at Papdi",
    courses: [
      "VII–X (SSC Maharashtra Board)",
      "XI–XII (HSC Maharashtra Board)",
    ],
  },
  {
    name: "Zean at Manikpur",
    courses: [
      "VII–X (SSC Maharashtra Board)",
      "XI–XII (HSC Maharashtra Board)",
      "BCOM ",
      "BAF",
    ],
  },
];

export default function Branches() {
  return (
    <section id="branches" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Our Branches
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {branches.map((branch, index) => (
            <Card
              key={index}
              className="shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-200"
            >
              <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <CardTitle className="text-2xl">{branch.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 text-gray-900">
                  Courses Offered:
                </h3>
                <ul className="space-y-3">
                  {branch.courses.map((course, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <span className="text-red-600 mt-1">•</span>
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
