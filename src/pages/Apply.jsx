import { useState, useMemo } from "react"
import { Link } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

export default function Apply() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    branch: "",
    category: "",
    standard: "",
    degree: "",
    year: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const resetAcademicFields = () => {
    handleChange("category", "")
    handleChange("standard", "")
    handleChange("degree", "")
    handleChange("year", "")
  }

  const allowedCategories = useMemo(() => {
    if (formData.branch === "Papdi") {
      return ["SSC", "HSC"]
    }
    if (formData.branch === "Manikpur") {
      return ["SSC", "HSC", "Degree"]
    }
    return []
  }, [formData.branch])

  const handleSubmit = (e) => {
    e.preventDefault()

    let emailBody = `Student Name: ${formData.name}\n`
    emailBody += `Phone Number: ${formData.phone}\n`
    emailBody += `Email: ${formData.email}\n`
    emailBody += `Branch: ${formData.branch}\n`
    emailBody += `Category: ${formData.category}\n`

    if (formData.category === "SSC") {
      emailBody += `Standard (SSC): ${formData.standard}\n`
    }

    if (formData.category === "HSC") {
      emailBody += `Class (HSC): ${formData.standard}\n`
    }

    if (formData.category === "Degree") {
      emailBody += `Degree: ${formData.degree}\n`
      emailBody += `Year: ${formData.year}\n`
    }

    const subject = encodeURIComponent("New Admission Enquiry - Zean Classes")
    const body = encodeURIComponent(emailBody)
    window.location.href = `mailto:info@zeanclassess.com?subject=${subject}&body=${body}`

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50 flex items-center justify-center py-20">
          <Card className="max-w-md w-full shadow-lg">
            <CardContent className="p-8 text-center">
              <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Thank You!
              </h2>
              <p className="text-gray-700 mb-6">
                Our team will contact you via call or email shortly.
              </p>
              <Link to="/">
                <Button className="bg-red-600 hover:bg-red-700">
                  Return to Home
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white">
                <CardTitle className="text-2xl md:text-3xl">
                  Admission Enquiry Form
                </CardTitle>
              </CardHeader>

              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label>Student Name *</Label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label>Phone Number *</Label>
                    <Input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label>Email *</Label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label>Branch *</Label>
                    <Select
                      value={formData.branch}
                      onValueChange={(value) => {
                        handleChange("branch", value)
                        resetAcademicFields()
                      }}
                      required
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select branch" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Papdi">Zean at Papdi</SelectItem>
                        <SelectItem value="Manikpur">Zean at Manikpur</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {formData.branch && (
                    <div>
                      <Label>Category *</Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) => {
                          handleChange("category", value)
                          handleChange("standard", "")
                          handleChange("degree", "")
                          handleChange("year", "")
                        }}
                        required
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {allowedCategories.includes("SSC") && (
                            <SelectItem value="SSC">School (SSC)</SelectItem>
                          )}
                          {allowedCategories.includes("HSC") && (
                            <SelectItem value="HSC">
                              Junior College (HSC)
                            </SelectItem>
                          )}
                          {allowedCategories.includes("Degree") && (
                            <SelectItem value="Degree">Degree</SelectItem>
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {(formData.category === "SSC" ||
                    formData.category === "HSC") && (
                    <div>
                      <Label>
                        {formData.category === "SSC"
                          ? "Standard (VII–X) *"
                          : "Class (XI–XII) *"}
                      </Label>
                      <Select
                        value={formData.standard}
                        onValueChange={(value) =>
                          handleChange("standard", value)
                        }
                        required
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          {formData.category === "SSC" ? (
                            <>
                              <SelectItem value="VII">VII</SelectItem>
                              <SelectItem value="VIII">VIII</SelectItem>
                              <SelectItem value="IX">IX</SelectItem>
                              <SelectItem value="X">X</SelectItem>
                            </>
                          ) : (
                            <>
                              <SelectItem value="XI">XI</SelectItem>
                              <SelectItem value="XII">XII</SelectItem>
                            </>
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {formData.category === "Degree" && (
                    <>
                      <div>
                        <Label>Degree *</Label>
                        <Select
                          value={formData.degree}
                          onValueChange={(value) =>
                            handleChange("degree", value)
                          }
                          required
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select degree" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="BCOM">BCOM</SelectItem>
                            <SelectItem value="BAF">BAF</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Academic Year *</Label>
                        <Select
                          value={formData.year}
                          onValueChange={(value) =>
                            handleChange("year", value)
                          }
                          required
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Starting">Starting</SelectItem>
                            <SelectItem value="FY">FY</SelectItem>
                            <SelectItem value="SY">SY</SelectItem>
                            <SelectItem value="TY">TY</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg"
                  >
                    Submit Enquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
