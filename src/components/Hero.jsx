import React from 'react'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-gray-800">Hello, I'm</span>
            <span className="gradient-text">Harriet Godfrey Sigalla</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Software Developer and AI/ML Engineer passionate about creating innovative solutions and beautiful user experiences
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="#contact"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a
              href="#portfolio"
              className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Harriet276"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-gray-50"
            >
              <Github size={24} className="text-gray-700" />
            </a>
            <a
              href="https://linkedin.com/in/harrietgodfrey"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-gray-50"
            >
              <Linkedin size={24} className="text-gray-700" />
            </a>
            <a
              href="mailto:sigallaharriet@gmail.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-gray-50"
            >
              <Mail size={24} className="text-gray-700" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </div>
    </section>
  )
}

export default Hero
