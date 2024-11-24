import React from 'react';
import { Button } from '@/components/ui/button';
import Head from 'next/head';
import Contect from './_components/Contect';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";

const Page = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <Head>
        <title>AI Mock Interview</title>
        <meta name="description" content="Ace your next interview with AI-powered mock interviews" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/75 border-b">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AI Mock Interview
              </h1>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
                <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
                <div className="flex items-center space-x-4">
                  <iframe
                    src="https://github.com/sponsors/modamaan/button"
                    title="Sponsor modamaan on GitHub"
                    height="32"
                    width="114"
                    className="border-0 rounded-lg"
                  />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/modamaan/Ai-mock-Interview"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 max-w-4xl leading-tight">
                Master Your Interview Skills with 
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> AI-Powered Practice</span>
              </h2>
              <p className="mt-6 text-xl text-gray-600 max-w-2xl">
                Get personalized feedback, realistic scenarios, and comprehensive analysis to boost your confidence and interview performance.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a href="/dashboard">
                  <Button className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all">
                    Start Practicing Now
                  </Button>
                </a>
                <a href="#features">
                  <Button variant="outline" className="text-lg px-8 py-6 rounded-full border-2 hover:bg-gray-50">
                    Explore Features
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900">Powerful Features</h2>
              <p className="mt-4 text-xl text-gray-600">Everything you need to excel in your interviews</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Mock Interviews",
                  description: "Practice with our advanced AI interviewer that adapts to your responses and provides realistic scenarios.",
                  gradient: "from-blue-500 to-indigo-500"
                },
                {
                  title: "Instant Feedback",
                  description: "Receive real-time analysis of your answers, body language, and communication skills.",
                  gradient: "from-indigo-500 to-purple-500"
                },
                {
                  title: "Comprehensive Reports",
                  description: "Get detailed performance analytics and personalized improvement recommendations.",
                  gradient: "from-purple-500 to-pink-500"
                }
              ].map((feature, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  <div className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">What Our Users Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote: "The AI mock interviews were incredibly helpful. I felt much more confident going into my real interview.",
                  author: "Alex Johnson",
                  role: "Software Engineer"
                },
                {
                  quote: "The feedback was spot on and helped me improve my answers. Highly recommend this service!",
                  author: "Sarah Williams",
                  role: "Product Manager"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <p className="text-gray-600 text-lg italic leading-relaxed">{testimonial.quote}</p>
                  <div className="mt-6">
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-blue-600">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gray-50">
          <Contect />
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 AI Mock Interview. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Page;