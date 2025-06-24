import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      type: 'Full-time',
      description: [
        'Led development of microservices architecture serving 100K+ daily active users',
        'Architected and implemented real-time collaboration features using WebSocket technology',
        'Mentored junior developers and established coding standards and best practices',
        'Improved application performance by 40% through optimization and caching strategies'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes']
    },
    {
      title: 'Full-Stack Developer',
      company: 'Innovation Labs',
      location: 'Austin, TX',
      period: '2020 - 2022',
      type: 'Full-time',
      description: [
        'Developed and maintained multiple client-facing web applications',
        'Collaborated with design team to implement pixel-perfect responsive interfaces',
        'Built RESTful APIs and integrated third-party services',
        'Participated in code reviews and agile development processes'
      ],
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Firebase', 'Tailwind CSS']
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      location: 'Remote',
      period: '2019 - 2020',
      type: 'Contract',
      description: [
        'Created responsive web applications for various industry clients',
        'Implemented modern frontend frameworks and build tools',
        'Optimized websites for performance and SEO',
        'Worked closely with clients to gather requirements and deliver solutions'
      ],
      technologies: ['React', 'JavaScript', 'SCSS', 'Webpack', 'Git']
    },
    {
      title: 'Junior Developer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      period: '2018 - 2019',
      type: 'Full-time',
      description: [
        'Contributed to the development of a fintech application',
        'Learned modern development practices and frameworks',
        'Participated in daily standups and sprint planning',
        'Fixed bugs and implemented minor features under supervision'
      ],
      technologies: ['JavaScript', 'HTML/CSS', 'Bootstrap', 'jQuery', 'PHP']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            My professional journey and the impactful projects I've contributed to
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-emerald-400"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 z-10">
                  <div className="w-full h-full bg-blue-400 rounded-full animate-pulse"></div>
                </div>

                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300"
                  >
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-2 text-blue-400 font-semibold mb-2">
                          <Briefcase size={18} />
                          <span>{experience.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end text-right">
                        <div className="flex items-center gap-2 text-slate-300 mb-1">
                          <Calendar size={16} />
                          <span className="text-sm">{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400 mb-1">
                          <MapPin size={16} />
                          <span className="text-sm">{experience.location}</span>
                        </div>
                        <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs">
                          {experience.type}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {experience.description.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 text-slate-300"
                        >
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-700/50 text-slate-400 rounded-full text-sm border border-slate-600 hover:border-slate-500 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to know more about my experience?
            </h3>
            <p className="text-slate-300 mb-6">
              I'm always happy to discuss my projects and share insights about my professional journey.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>Let's Connect</span>
              <Briefcase size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;