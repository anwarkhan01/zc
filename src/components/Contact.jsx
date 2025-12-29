import { Mail, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-blue-50 to-red-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Get in Touch
        </h2>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <p className="text-center text-gray-700 mb-8 text-lg">
                Have questions? We're here to help. Reach out to us through any of the following channels, and our team will get back to you shortly.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="p-3 bg-red-100 rounded-lg">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:info@zeanclassess.com"
                      className="text-blue-600 hover:underline"
                    >
                      info@zeanclassess.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a
                      href="tel:+919876543210"
                      className="text-blue-600 hover:underline"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

