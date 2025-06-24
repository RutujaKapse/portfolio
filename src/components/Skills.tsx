import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Palette, Wrench, Zap, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 95, color: 'from-blue-400 to-blue-600', icon: '⚛️' },
        { name: 'TypeScript', level: 90, color: 'from-blue-500 to-blue-700', icon: '🔷' },
        { name: 'Next.js', level: 88, color: 'from-slate-400 to-slate-600', icon: '▲' },
        { name: 'Tailwind CSS', level: 92, color: 'from-cyan-400 to-cyan-600', icon: '🎨' },
        { name: 'JavaScript', level: 94, color: 'from-yellow-400 to-yellow-600', icon: '⚡' }
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-emerald-500 to-teal-500',
      skills: [
        { name: 'Node.js', level: 89, color: 'from-green-400 to-green-600', icon: '🟢' },
        { name: 'Python', level: 85, color: 'from-blue-400 to-yellow-400', icon: '🐍' },
        { name: 'PostgreSQL', level: 87, color: 'from-blue-500 to-blue-700', icon: '🐘' },
        { name: 'MongoDB', level: 83, color: 'from-green-500 to-green-700', icon: '🍃' },
        { name: 'Express.js', level: 88, color: 'from-gray-400 to-gray-600', icon: '🚀' }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Wrench,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git', level: 93, color: 'from-orange-400 to-orange-600', icon: '📝' },
        { name: 'Docker', level: 82, color: 'from-blue-400 to-blue-600', icon: '🐳' },
        { name: 'AWS', level: 78, color: 'from-orange-500 to-yellow-500', icon: '☁️' },
        { name: 'Linux', level: 85, color: 'from-gray-600 to-gray-800', icon: '🐧' },
        { name: 'CI/CD', level: 80, color: 'from-purple-400 to-purple-600', icon: '🔄' }
      ]
    }
  ];

  const additionalSkills = [
    { name: 'GraphQL', icon: '🔗', color: 'from-pink-500 to-rose-500' },
    { name: 'Redis', icon: '🔴', color: 'from-red-500 to-red-600' },
    { name: 'Kubernetes', icon: '⚙️', color: 'from-blue-500 to-indigo-500' },
    { name: 'Microservices', icon: '🏗️', color: 'from-green-500 to-emerald-500' },
    { name: 'WebRTC', icon: '📹', color: 'from-purple-500 to-violet-500' },
    { name: 'Socket.io', icon: '🔌', color: 'from-yellow-500 to-amber-500' },
    { name: 'Prisma', icon: '💎', color: 'from-indigo-500 to-purple-500' },
    { name: 'Jest', icon: '🧪', color: 'from-orange-500 to-red-500' },
    { name: 'Cypress', icon: '🌲', color: 'from-green-500 to-teal-500' },
    { name: 'Figma', icon: '🎨', color: 'from-pink-500 to-purple-500' }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
          `
        }}></div>
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
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
              <Cpu className="text-white" size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
          </motion.div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-6">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-500 relative overflow-hidden">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                {/* Skills */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 
                      }}
                      viewport={{ once: true }}
                      className="relative group/skill"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="text-slate-200 font-medium text-lg">{skill.name}</span>
                        </div>
                        <span className="text-slate-400 font-mono text-sm">{skill.level}%</span>
                      </div>
                      
                      <div className="h-3 bg-slate-700/50 rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                            ease: 'easeOut'
                          }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
                          <motion.div
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              ease: 'linear',
                              delay: categoryIndex * 0.2 + skillIndex * 0.1 + 1
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Zap className="text-yellow-400" size={28} />
            <h3 className="text-3xl font-bold text-white">Also Working With</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                }}
                className={`group px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-slate-500 transition-all duration-300 cursor-default relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="flex items-center gap-3 relative z-10">
                  <span className="text-xl">{tech.icon}</span>
                  <span className="text-slate-300 font-medium group-hover:text-white transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;