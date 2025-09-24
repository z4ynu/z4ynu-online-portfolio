import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            <a
              href="https://github.com/z4ynu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-teal-400 transition-colors duration-200"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/zy-henzo-nunez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-teal-400 transition-colors duration-200"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:zy.henzo@example.com"
              className="text-slate-400 hover:text-teal-400 transition-colors duration-200"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="text-center">
            <p className="text-slate-400 mb-2">© 2025 Zy Henzo S. Nuñez (z4ynu). All rights reserved.</p>
            <p className="text-slate-500 flex items-center justify-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-400" /> and lots of coffee
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
