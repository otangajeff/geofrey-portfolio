
import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Mail, Linkedin } from "lucide-react";

export const metadata = {
  title: "Geofrey Otanga | Freelance Data Entry & Content Writing",
  description: "Explore the freelance portfolio of Geofrey Otanga, a skilled data entry specialist and content writer with expertise in SEO, marketing, and digital research.",
  keywords: "Geofrey Otanga, freelance writer Kenya, data entry, SEO content, digital marketing, Kenya freelancers, tech writing, portfolio website"
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Geofrey Otanga</h1>
        <div className="flex items-center gap-4 mb-6">
          <a
            href="mailto:jeffotanga7@gmail.com"
            className="flex items-center text-blue-600 hover:underline"
          >
            <Mail className="w-4 h-4 mr-1" /> jeffotanga7@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/jeff-otanga-9817332b2/"
            className="flex items-center text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-4 h-4 mr-1" /> LinkedIn
          </a>
        </div>

        <Card className="mb-6">
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Profile Summary</h2>
            <p>
              I’m a dedicated freelancer with experience in <strong>data entry, sales, digital marketing, and content writing</strong>.
              I take pride in delivering timely, high-quality work that meets and exceeds client expectations.
              I’m passionate about helping businesses grow through smart digital solutions and organized data management.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Skills & Services</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Data Entry & Management</li>
              <li>Online Research</li>
              <li>Affiliate & Digital Marketing</li>
              <li>Content & Article Writing (SEO Optimized)</li>
              <li>Sales Strategy & Client Relations</li>
              <li>Microsoft Office (Excel, Word, PowerPoint)</li>
              <li>Google Workspace Tools</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Work Experience</h2>
            <div className="mb-4">
              <h3 className="font-bold">Data Entry Clerk - Keju Computers</h3>
              <p className="text-sm text-gray-600">Jan 2023 – Jan 2024</p>
              <ul className="list-disc list-inside ml-4">
                <li>Entered and managed customer and product data</li>
                <li>Organized and updated sales and inventory files</li>
                <li>Performed data audits to ensure accuracy</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="font-bold">Affiliate Marketing & Sales - Kwetu Affiliate Marketing</h3>
              <p className="text-sm text-gray-600">Feb 2024 – Present</p>
              <ul className="list-disc list-inside ml-4">
                <li>Promoted products through digital platforms</li>
                <li>Created marketing content and tracked performance</li>
                <li>Engaged and converted leads via social media</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Content Writer - Kenya Writers Hub</h3>
              <p className="text-sm text-gray-600">Jan 2023 – Dec 2023</p>
              <ul className="list-disc list-inside ml-4">
                <li>Wrote engaging and SEO-friendly articles on various topics</li>
                <li>Collaborated with editors to meet publication guidelines</li>
                <li>Managed deadlines and delivered high-quality content on time</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Education</h2>
            <div>
              <h3 className="font-bold">Jomo Kenyatta University of Agriculture and Technology</h3>
              <p className="text-sm text-gray-600">Bachelor of Science in Information Technology (2022 – 2026)</p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Relevant Projects</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Product Catalog Digitization (Keju Computers)</strong> – Compiled and digitized inventory data into structured Excel spreadsheets to enhance accuracy and accessibility.
              </li>
              <li>
                <strong>SEO Blog Series on Technology Trends (Kenya Writers Hub)</strong> – Authored a 10-part series focused on emerging tech topics optimized for Google search visibility.
              </li>
              <li>
                <strong>Customer Feedback Data Entry Project</strong> – Managed feedback form entries into Google Sheets with over 1,000 entries for performance review and analysis.
              </li>
              <li>
                <strong>Freelance Article Contributions</strong> – Created well-researched content for online blogs covering business, education, and digital marketing.
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="text-center mt-10">
          <h2 className="text-2xl font-semibold mb-4">Let’s Work Together</h2>
          <p className="mb-4">I’m open for freelance projects and collaborations. Reach out today!</p>
          <Button asChild>
            <a href="mailto:jeffotanga7@gmail.com">Contact Me</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
