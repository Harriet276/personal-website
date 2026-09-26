import React from 'react'
import { Code, Database, Globe, Smartphone, Award, BookOpen, Users, Code2 } from 'lucide-react'
import profileImage from '../assets/profile.jpg' // your photo

const About = () => {
  const skills = [
    {
      icon: <Code size={32} />,
      title: 'Frontend Development',
      description: 'React, Vue.js, TypeScript, Tailwind CSS',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: <Database size={32} />,
      title: 'Backend Development',
      description: ' Python, PostgreSQL, MySQL',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: <Globe size={32} />,
      title: 'Full Stack',
      description: 'End-to-end application development',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'AI/ML Development',
      description: 'TensorFlow, PyTorch, Scikit-learn, Keras',
      color: 'bg-orange-100 text-orange-600'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 text-sm font-semibold text-primary-600 tracking-wider uppercase">
            Get To Know Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          {/* Profile Image */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <div className="relative w-72 h-72 md:w-80 md:h-80 bg-white rounded-full p-1.5">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full border-4 border-white"
                />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="w-full lg:w-2/3">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              Hello! I'm <span className="text-primary-600">Harriet</span>
            </h3>
            
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                A passionate <span className="font-medium text-gray-800">Software Developer</span> and <span className="font-medium text-gray-800">AI/ML Engineer</span> currently pursuing my MEng in Computer Science and Software Engineering at the University of Birmingham, specializing in Software Engineering and Artificial Intelligence.
              </p>
              
              <p>
                With hands-on experience from multiple tech internships, I bridge the gap between theoretical knowledge and practical application, creating innovative solutions that make a real impact.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Experience</h4>
                    <p className="text-sm text-gray-600">3+ Years in Software Development</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BookOpen className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Education</h4>
                    <p className="text-sm text-gray-600">MEng Computer Science and Software Engineering</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Community</h4>
                    <p className="text-sm text-gray-600">Tech Blogger & Mentor</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Code2 className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Focus</h4>
                    <p className="text-sm text-gray-600">AI/ML & Full-Stack</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-800">
            My <span className="text-primary-600">Skills</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-primary-100"
              >
                <div className={`inline-flex p-3 rounded-lg ${skill.color} mb-4`}>
                  {React.cloneElement(skill.icon, { size: 28 })}
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800">{skill.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-800">
            Tech <span className="text-primary-600">Stack</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {['JavaScript', 'Python', 'React', 'Vite', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'TypeScript', 'Next.js', 'PostgreSQL'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-primary-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


