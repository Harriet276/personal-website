// import React, { useState } from 'react'
// import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   })

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Handle form submission here
//     console.log('Form submitted:', formData)
//     // Reset form
//     setFormData({ name: '', email: '', message: '' })
//     alert('Thank you for your message! I\'ll get back to you soon.')
//   }

//   const contactInfo = [
//     {
//       icon: <Mail size={24} />,
//       title: 'Email',
//       value: 'sigallaharriet@gmail.com',
//       link: 'mailto:sigallaharriet@gmail.com'
//     },
//     {
//       icon: <Phone size={24} />,
//       title: 'Phone',
//       value: '+971 55 156 4673',
//       link: 'tel:+971551564673'
//     },
//     {
//       icon: <MapPin size={24} />,
//       title: 'Location',
//       value: 'Dubai, UAE',
//       link: '#'
//     }
//   ]

//   const socialLinks = [
//     {
//       icon: <Github size={24} />,
//       name: 'GitHub',
//       url: 'https://github.com/Harriet276',
//       color: 'hover:text-gray-800'
//     },
//     {
//       icon: <Linkedin size={24} />,
//       name: 'LinkedIn',
//       url: 'https://linkedin.com/in/harrietgodfrey',
//       color: 'hover:text-blue-600'
//     },
//     // {
//     //   icon: <Twitter size={24} />,
//     //   name: 'Twitter',
//     //   url: 'https://twitter.com/yourusername',
//     //   color: 'hover:text-blue-400'
//     // }
//   ]

//   return (
//     <section id="contact" className="py-20 bg-white">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             I'm always open to discussing new opportunities, interesting projects, 
//             or just having a chat about technology.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div className="animate-slide-up">
//             <h3 className="text-2xl font-bold mb-8 text-gray-800">Let's Connect</h3>
            
//             <div className="space-y-6 mb-8">
//               {contactInfo.map((info, index) => (
//                 <a
//                   key={info.title}
//                   href={info.link}
//                   className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:shadow-md transition-all duration-300 group"
//                 >
//                   <div className="p-3 bg-primary-100 text-primary-600 rounded-full group-hover:bg-primary-200 transition-colors duration-300">
//                     {info.icon}
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-800">{info.title}</h4>
//                     <p className="text-gray-600">{info.value}</p>
//                   </div>
//                 </a>
//               ))}
//             </div>

//             {/* Social Links */}
//             <div>
//               <h4 className="text-lg font-semibold mb-4 text-gray-800">Follow Me</h4>
//               <div className="flex space-x-4">
//                 {socialLinks.map((social) => (
//                   <a
//                     key={social.name}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`p-3 bg-gray-100 rounded-full text-gray-600 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
//                   >
//                     {social.icon}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
//                   placeholder="Your Name"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
//                   placeholder="your.email@example.com"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={5}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
//                   placeholder="Tell me about your project or just say hello!"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
//               >
//                 <Send size={20} />
//                 <span>Send Message</span>
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Contact


import React from 'react'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'sigallaharriet@gmail.com',
      link: 'mailto:sigallaharriet@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+447849093669',
      link: 'tel:+447849093669'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Birmingham, UK'
    }
  ]

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      url: 'https://github.com/Harriet276',
      color: 'hover:text-gray-800'
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/harrietgodfrey',
      color: 'hover:text-blue-600'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-slide-up">
          <h3 className="text-2xl font-bold mb-8 text-gray-800">
            Let's Connect
          </h3>

          <div className="space-y-6 mb-8">
            {contactInfo.map((info) => {
              const content = (
                <>
                  <div className="p-3 bg-primary-100 text-primary-600 rounded-full group-hover:bg-primary-200 transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {info.title}
                    </h4>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </>
              )

              const className =
                'flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:shadow-md transition-all duration-300 group'

              return info.link ? (
                <a key={info.title} href={info.link} className={className}>
                  {content}
                </a>
              ) : (
                <div key={info.title} className={className}>
                  {content}
                </div>
              )
            })}
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">
              Follow Me
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`p-3 bg-gray-100 rounded-full text-gray-600 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact