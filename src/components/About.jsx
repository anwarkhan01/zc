import { BookOpen, Users, Award, Target } from "lucide-react"

const values = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description: "We maintain the highest standards of teaching and learning, ensuring every student reaches their full potential.",
  },
  {
    icon: Users,
    title: "Mentorship",
    description: "Our faculty provides personalized guidance and support, fostering long-term growth and development.",
  },
  {
    icon: Award,
    title: "Discipline",
    description: "A structured learning environment that instills values of discipline, dedication, and hard work.",
  },
  {
    icon: Target,
    title: "Student Growth",
    description: "We focus on holistic development, preparing students not just for exams but for life ahead.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            About Zean Classes
          </h2>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              At Zean Classes, we believe that education is not just about passing exams—it's about building a foundation for lifelong success. With over 25 years of experience in the field of education, we have dedicated ourselves to providing quality coaching that combines academic rigor with personal mentorship.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our approach is built on three core principles: discipline, mentorship, and academic excellence. We understand that every student is unique, and our experienced faculty works closely with each individual to identify strengths, address challenges, and chart a path toward their goals.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Whether you're preparing for board examinations or pursuing a degree in commerce, we provide a supportive, structured environment where students can thrive. Our commitment to long-term student growth means we don't just teach—we mentor, guide, and inspire.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-gray-200 bg-gray-50 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-100 rounded-lg">
                      <Icon className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2 text-gray-900">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

