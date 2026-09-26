import React, { useState } from 'react'
import { ExternalLink, Github, Plus } from 'lucide-react'

const Portfolio = () => {
  const [projects] = useState([
    {
      id: 1,
      title: 'StudySync — University Planner',
      description: 'StudySync helps students organise their modules and related coursework in one place. I implemented the Modules feature, including full create, read, update, and delete functionality. Signed-in users could save modules to the database, while guest users could manage modules locally in their browser. I also helped keep the teams documentation clear and accessible, and contributed to the Canvas API sync work that brought course information into the app.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Node.js', 'Vite,', 'Express', 'PostgreSQL','Docker'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Harriet276/team70',
      featured: true
    },
    {
      id: 2,
      title: 'Productive',
      subtitle: 'Team project · 2nd place, Microsoft/ASUS Bounty Challenge',
      description: 'Productive brings study tools into one place to help students understand course material and manage their assignments. As part of Team Bread, I contributed to the AI helper, which explains concepts to students, and to the assignments page. I also created and delivered our PowerPoint presentation for the judges.We built Productive during the Google Developer Groups on Campus hackathon at the University of Birmingham Dubai. Our team placed second among 600+ participants from over 30 universities.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'TypeScript', 'FPython', 'Flask', 'SQLite', 'Flask-SQLAlchemy'],
      liveUrl: 'https://drive.google.com/file/d/17VLJcX2BEXc-EbVduGVMqtgH6KJEtGtM/view?usp=sharing',
      githubUrl: 'https://github.com/slkarhmn/gdg-hackathon',
      featured: true
    },
    {
      id: 3,
      title: 'Budget Planner',
      description: 'TZS Budget Planner is a personal finance app designed to help people understand where their money goes and plan towards a monthly savings goal. Users can record income and expenses, organise transactions by category, and view a monthly summary of what they have earned, spent, and have remaining. The currency is set to Tanzanian shillings (TZS) by default, but users can choose a different currency. A savings progress indicator shows how their balance compares with their goal. I designed this as an independent portfolio project inspired by financial inclusion, with a focus on making budget information clear and approachable. The app includes sample data so visitors can explore its features without entering their own financial information.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'TypeScript', 'Vite','Supabase'],
      liveUrl: 'https://drive.google.com/file/d/1-pJ9OpurFgxj6gVVLIXotfmZU_yzf6PY/view?usp=sharing',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website',
      subtitle: 'Individual project · Personal finance',
      description: 'This is my personal portfolio website, built to showcase my projects and skills. It is a responsive website that is optimized for mobile devices and desktops.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['JavaScript', 'Tailwind CSS', 'Vite','HTML'],
      // liveUrl: '#',
      // githubUrl: '#',
      featured: false
    }
  ])

  const [filter, setFilter] = useState('all')

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured' 
    ? projects.filter(p => p.featured)
    : projects

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">My Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Here are some of the projects I've worked on. Each one represents a unique challenge 
            and learning experience.
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4 mb-12">
            {['all', 'featured'].map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === filterType
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {filterType === 'all' ? 'All Projects' : 'Featured'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} className="text-gray-700" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} className="text-gray-700" />
                    </a>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 font-medium transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Project Placeholder */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gray-200 rounded-xl border-2 border-dashed border-gray-400 hover:border-primary-400 hover:bg-primary-50 transition-all duration-300 cursor-pointer group">
            <div className="text-center">
              <Plus size={32} className="text-gray-400 group-hover:text-primary-500 mx-auto mb-2" />
              <p className="text-sm text-gray-500 group-hover:text-primary-600">Add Project</p>
            </div>
          </div>
          <p className="mt-4 text-gray-600">More projects coming soon!</p>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
