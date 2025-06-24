import React from 'react';
import { motion } from 'framer-motion';
import { Code, Coffee, Lightbulb, Target, Cpu, Database, Globe, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Architecture',
      description: 'Building scalable applications with SOLID principles and modern design patterns.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Constantly exploring cutting-edge technologies and implementing creative solutions.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Target,
      title: 'Performance Focused',
      description: 'Optimizing for speed, efficiency, and exceptional user experiences.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Coffee,
      title: 'Team Player',
      description: 'Collaborating effectively in agile environments and mentoring fellow developers.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const techStack = [
    { name: 'React', level: 95, icon: '⚛️' },
    { name: 'TypeScript', level: 90, icon: '🔷' },
    { name: 'Node.js', level: 88, icon: '🟢' },
    { name: 'Python', level: 85, icon: '🐍' },
    { name: 'PostgreSQL', level: 87, icon: '🐘' },
    { name: 'AWS', level: 82, icon: '☁️' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-6xl">{'<>'}</div>
        <div className="absolute top-40 right-20 text-4xl">{'{ }'}</div>
        <div className="absolute bottom-40 left-20 text-5xl">{'[ ]'}</div>
        <div className="absolute bottom-20 right-10 text-6xl">{'</>'}</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Cpu className="text-white" size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
          </motion.div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Developer Avatar with Code Animation */}
            <div className="relative max-w-md mx-auto">
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-emerald-500/20 rounded-3xl p-8 backdrop-blur-sm border border-slate-700">
                <div className="w-full h-full bg-slate-800/50 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="text-8xl mb-4">👨‍💻</div>
                  
                  {/* Floating Code Elements */}
                  <motion.div
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                    className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg"
                  >
                    <Code size={28} className="text-white" />
                  </motion.div>
                  
                  <motion.div
                    animate={{ 
                      rotate: -360,
                      y: [0, -10, 0]
                    }}
                    transition={{ 
                      rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
                      y: { duration: 3, repeat: Infinity }
                    }}
                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg"
                  >
                    <Database size={28} className="text-white" />
                  </motion.div>

                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                    className="absolute top-1/2 -right-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                  >
                    <Globe size={20} className="text-white" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Zap className="text-yellow-400" size={32} />
                Passionate Developer with Vision
              </h3>
              
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>
                  With over <span className="text-blue-400 font-semibold">5+ years</span> of experience 
                  in full-stack development, I specialize in creating digital solutions that merge 
                  cutting-edge technology with intuitive user experiences.
                </p>
                
                <p>
                  My journey began with curiosity about how things work, which evolved into a passion 
                  for building applications that solve real-world problems. I believe in writing code 
                  that not only functions flawlessly but is also maintainable and scalable.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>

            {/* Tech Stack Visualization */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Code size={20} className="text-blue-400" />
                Current Tech Stack
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all duration-300"
                  >
                    <span className="text-2xl">{tech.icon}</span>
                    <div className="flex-1">
                      <div className="text-white font-medium">{tech.name}</div>
                      <div className="w-full bg-slate-600 rounded-full h-2 mt-1">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className={`w-12 h-12 bg-gradient-to-r ${highlight.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <highlight.icon className="text-white" size={24} />
              </div>
              
              <h4 className="font-bold text-white mb-3 text-lg">{highlight.title}</h4>
              <p className="text-slate-400 leading-relaxed">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;