import React from 'react'
import { Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold gradient-text mb-2">
              &lt;HarrietBuilds/&gt;
            </div>
            <p className="text-gray-400">
              Building the future, one line of code at a time.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>by Harriet Sigalla</span>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Harriet Sigalla. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
