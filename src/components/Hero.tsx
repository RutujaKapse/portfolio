import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Terminal, Code2, Zap } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'Full-Stack Developer',
    'React Specialist', 
    'Node.js Expert',
    'UI/UX Enthusiast',
    'Problem Solver'
  ];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const codeSnippets = [
    'const developer = new Developer();',
    'developer.code();',
    'while(learning) { grow(); }',
    'git commit -m "Amazing features"',
    'npm run build-dreams'
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {codeSnippets.map((snippet, index) => (
          <motion.div
            key={index}
            className="absolute text-blue-400/30 font-mono text-sm"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 0.7, 0]
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              delay: index * 2
            }}
          >
            {snippet}
          </motion.div>
        ))}
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 border border-blue-500/10 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 3
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 mx-auto max-w-4xl"
        >
          <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg border border-slate-700 shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-4 text-slate-400 text-sm font-mono">~/portfolio</span>
            </div>
            <div className="p-6 font-mono text-left">
              <div className="text-green-400 mb-2">$ whoami</div>
              <div className="text-white mb-4">Full-Stack Developer & Creative Problem Solver</div>
              <div className="text-green-400 mb-2">$ cat skills.json</div>
              <div className="text-blue-300 mb-4">
                {`{`}<br/>
                &nbsp;&nbsp;"frontend": ["React", "TypeScript", "Next.js"],<br/>
                &nbsp;&nbsp;"backend": ["Node.js", "Python", "PostgreSQL"],<br/>
                &nbsp;&nbsp;"passion": "Building amazing digital experiences"<br/>
                {`}`}
              </div>
              <div className="text-green-400">$ npm start career</div>
              <div className="text-white flex items-center">
                <span className="mr-2">Starting development server...</span>
                <motion.div
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-2 h-5 bg-white"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Hello, I'm
            </span>
            <br />
            <span className="text-white">Your Name</span>
          </motion.h1>
          
          <motion.div 
            className="text-2xl md:text-4xl text-slate-300 mb-8 h-16 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Terminal className="mr-4 text-emerald-400" size={32} />
            <span className="font-mono">
              {text}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-emerald-400"
              >
                |
              </motion.span>
            </span>
          </motion.div>
          
          <motion.p 
            className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            I craft digital experiences that blend innovative design with robust functionality, 
            turning complex problems into elegant solutions through clean, efficient code.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <motion.button
              onClick={scrollToAbout}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
            >
              <Code2 size={20} />
              <span>View My Work</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Zap size={20} />
              </motion.div>
            </motion.button>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-slate-600 rounded-full text-white font-semibold text-lg hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 flex items-center gap-3"
            >
              <Terminal size={20} />
              <span>Let's Connect</span>
            </motion.a>
          </motion.div>

          <motion.div 
            className="flex items-center justify-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-gray-300' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-400' },
              { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email', color: 'hover:text-emerald-400' }
            ].map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : '_self'}
                rel={href.startsWith('http') ? 'noopener noreferrer' : ''}
                whileHover={{ scale: 1.2, y: -5 }}
                className={`p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl text-slate-300 ${color} transition-all duration-300 border border-slate-700 hover:border-slate-500 hover:shadow-lg`}
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <button
            onClick={scrollToAbout}
            className="text-slate-400 hover:text-white transition-colors duration-300 flex flex-col items-center gap-2"
          >
            <span className="text-sm font-mono">scroll down</span>
            <ArrowDown size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;