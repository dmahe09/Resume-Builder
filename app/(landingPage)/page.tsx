import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { ChevronRight, Video, Cpu, Share2, Shield } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <div className="hero-section w-full min-h-screen">
        <div className="w-full flex flex-col items-center justify-center py-10 max-w-4xl mx-auto">
          <div className="rounded-full flex items-center font-medium gap-1 text-sm h-auto p-2 bg-muted max-w-80">
            <div className="p-2 h-5 shrink-0 flex items-center text-xs justify-center text-white bg-primary rounded-full">
              New
            </div>
            Developed By MAHE Digne 
            <ChevronRight className="w-4 h-4" />
          </div>

          <div className="flex flex-col mt-5 items-center text-center">
            <h1 className="text-6xl font-black">
              <p>Get dream jobs with our</p>
              <p>
                <span className="bg-gradient-to-r from-primary via-purple-300 to-primary bg-clip-text text-transparent animate-sparkle">
                Candid
                </span>
                {"  "}
                resume builder
              </p>
            </h1>
            <p className="block text-xl mt-3 font-medium text-white">
              Build a professional resume with our free builder, and share it with a shareable link.
            </p>

            <br />
            <div className="flex items-center gap-2">
              <Button className="h-12 text-base font-medium min-w-32" asChild>
                <RegisterLink>Get Started</RegisterLink>
              </Button>
              <Button
                variant="outline"
                className="h-12 border-primary text-primary text-base font-medium min-w-32"
                asChild
              >
                <a className="flex items-center gap-1">
                  <Video size="17px" />
                  Watch Video
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full relative max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-full h-[400px] bg-gradient-to-r from-primary to-blue-500 rounded-full blur-3xl opacity-40 z-0" />
          <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-xl shadow-lg bg-background">
            <div className="relative w-full h-full rounded-md">
              <Image
                src="/images/MD.png"
                alt="App dashboard"
                fill
                className="object-contain w-full h-full rounded-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full bg-background pt-12 pb-16">
        <div className="max-w-4xl mx-auto text-center text-white px-6">
          <h2 className="text-4xl font-black bg-gradient-to-r from-primary via-purple-300 to-primary bg-clip-text text-transparent animate-sparkle mb-20">
            Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[{
              icon: Cpu,
              title: "Automatic",
              description: "Leverage your skills to create tailored, impactful resumes that stand out.",
            },
            {
              icon: Share2,
              title: "Easy Sharing",
              description: "Share your resume via a unique, shareable link or download as a PDF.",
            },
            {
              icon: Shield,
              title: "Secure and Reliable",
              description: "Rest assured your data is safe with our state-of-the-art security measures.",
            }].map((feature, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center justify-center text-center p-6 hover:scale-105 transform transition-all w-auto mx-auto"
              >
                <feature.icon className="text-primary w-16 h-16 mb-4" />
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-lg">{feature.description}</p>
                <a
                  href="#"
                  className="mt-4 text-primary hover:underline text-sm"
                  aria-label={`Learn more about ${feature.title}`}
                />
                
                {/* Glowing Background with Gradient and Blur */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-400 opacity-40 rounded-full blur-xl transform scale-110 transition-all duration-500 ease-in-out hover:scale-125 hover:rotate-[8deg] hover:opacity-60"></div>
                {/* Glowing Outline */}
                <div className="absolute inset-0 border-2 border-gradient-to-r from-primary via-purple-300 to-primary opacity-30 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions Section */}
      <div className="w-full bg-background py-12">
        <div className="max-w-4xl mx-auto text-center text-white px-6">
        <h2 className="text-4xl font-black bg-gradient-to-r from-primary via-purple-300 to-primary bg-clip-text text-transparent animate-sparkle mb-12">
  Frequently Asked Questions
</h2>
          <div className="space-y-6 text-left">
            
            <div className="border-b pb-4">
              <h3 className="text-2xl font-medium">How do I get started?</h3>
              <p className="mt-2 text-lg">
              Getting started is quick and simple! Just click the "Get Started" button on our homepage to sign up. Once you've created your account, our user-friendly platform will guide you step by step in building a standout resume. You'll have access to customizable templates and  tips to make the process efficient.
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-2xl font-medium">Is the resume builder free?</h3>
              <p className="mt-2 text-lg">
              Yes, our resume builder is 100% free to use! There are no subscription fees, hidden charges, or premium features requiring payment. We believe that everyone deserves access to the tools they need to achieve their career goals without financial barriers, empowering job seekers at every stage of their journey.
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-2xl font-medium">Can I download my resume?</h3>
              <p className="mt-2 text-lg">
              Of course! Once you've completed your resume, you can download it in a professionally formatted PDF file with just one click. This format ensures your resume is ready to share with potential employers, whether you're applying online or in person, giving you a polished and competitive edge in the employment market.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium">How can I contact support?</h3>
              <p className="mt-2 text-lg">
              We’re here to help! If you have any questions or need assistance, visit the "Contact Us" section located in the footer of our website. From there, you can send us a message or find additional resources to get your issue resolved promptly, ensuring you have a smooth, hassle-free, innovative, Optimal and productive experience. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
