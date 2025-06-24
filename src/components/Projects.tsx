import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Code, Zap, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built with modern architecture and optimized for performance.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe API', 'Redis'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
      stats: { stars: 234, forks: 45, commits: 892 }
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Business intelligence dashboard with machine learning insights and predictive analytics capabilities. Features real-time data visualization and automated reporting.',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Python', 'TensorFlow', 'D3.js', 'AWS'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
      stats: { stars: 189, forks: 32, commits: 567 }
    },
    {
      title: 'Real-time Collaboration Tool',
      description: 'Collaborative project management tool with real-time updates, file sharing, and team communication features. Supports multiple workspaces and integrations.',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io', 'Tailwind'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
      stats: { stars: 156, forks: 28, commits: 423 }
    },
    {
      title: 'Social Media Platform',
      description: 'Modern social networking app with real-time messaging, content sharing, and community features.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'Node.js', 'GraphQL'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      title: 'Cryptocurrency Tracker',
      description: 'Real-time crypto portfolio tracker with price alerts, news integration, and market analysis tools.',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Express', 'WebSocket', 'Chart.js'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      title: 'Learning Management System',
      description: 'Comprehensive LMS with course creation, progress tracking, and interactive learning modules.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'NestJS', 'PostgreSQL', 'Docker'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-6xl transform rotate-12">{'<code>'}</div>
        <div className="absolute top-40 right-20 text-4xl transform -rotate-12">{'</>'}</div>
        <div className="absolute bottom-40 left-20 text-5xl transform rotate-45">{'{ }'}</div>
        <div className="absolute bottom-20 right-10 text-6xl transform -rotate-45">{'[ ]'}</div>
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
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <Code className="text-white" size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
          </motion.div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-6">
            Showcasing some of my recent work that demonstrates technical expertise and creative problem-solving
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group"
                >
                  <div className="aspect-video rounded-3xl overflow-hidden bg-slate-700 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Overlay Stats */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex items-center gap-4 text-white">
                        <div className="flex items-center gap-1">
                          <Star size={16} className="text-yellow-400" />
                          <span className="text-sm font-mono">{project.stats.stars}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Github size={16} />
                          <span className="text-sm font-mono">{project.stats.forks}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Code size={16} />
                          <span className="text-sm font-mono">{project.stats.commits}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                      scale: { duration: 3, repeat: Infinity }
                    }}
                    className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
                  >
                    <Zap size={20} className="text-white" />
                  </motion.div>
                </motion.div>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                  </div>
                  
                  <div className="p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-emerald-500/5"></div>
                    <p className="text-slate-300 leading-relaxed text-lg relative z-10">
                      {project.description}
                    </p>
                  </div>
                </motion.div>

                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 text-sm bg-slate-700/50 text-slate-300 rounded-full border border-slate-600 hover:border-slate-500 hover:bg-slate-700 transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 px-6 py-3 bg-slate-700/50 backdrop-blur-sm text-white rounded-xl hover:bg-slate-600 transition-all duration-300 border border-slate-600 hover:border-slate-500"
                  >
                    <Github size={20} />
                    <span className="font-medium">Code</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Other Notable Projects</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-500 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                </div>
                
                <div className="p-6 relative z-10">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-slate-700/50 text-slate-400 rounded-full border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 text-xs text-slate-500 font-mono">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="text-slate-400 hover:text-white transition-colors duration-300"
                      >
                        <Github size={18} />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="text-slate-400 hover:text-white transition-colors duration-300"
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    </div>
                    
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-slate-500 group-hover:text-blue-400 transition-colors duration-300"
                    >
                      <ArrowRight size={18} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;