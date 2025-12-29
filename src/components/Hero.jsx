import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-12 md:py-20 bg-linear-to-br from-red-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gray-200 shadow-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                  alt="Dr. Rajesh Kumar - Founder and Principal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-red-600 text-white p-4 rounded-lg shadow-xl">
                <GraduationCap className="h-8 w-8" />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Dr. Rajesh Kumar
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              With over 25 years of dedicated teaching experience, I have been
              committed to shaping young minds and fostering academic
              excellence. At Zean Classes, we believe in discipline, mentorship,
              and long-term student growth.
            </p>

            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-2 text-gray-700">
                <span className="font-semibold">Qualifications:</span>
                <span>M.Sc., Ph.D. in Mathematics</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="font-semibold">Experience:</span>
                <span>25+ Years of Teaching</span>
              </div>
            </div>

            <div className="pt-4">
              <Link to="/apply">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg"
                >
                  Apply for Admission
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
