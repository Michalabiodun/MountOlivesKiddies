import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import programsHeroBg from '../assets/images/programs-hero.jpg';
import toddlerprogram from '../assets/images/toddler-program.jpg';

const Programs = () => {
  const [activeTab, setActiveTab] = useState('toddler');

  const programs = {
    toddler: {
      title: 'Toddler Program',
      age: '18 months - 3 years',
      description: 'A nurturing environment focused on early development, sensory exploration, and building foundational social skills.',
      features: [
        'Sensory play activities',
        'Language development',
        'Motor skills development',
        'Social interaction',
        'Creative expression',
        'Potty training support'
      ],
      schedule: 'Monday - Friday, 8:00 AM - 12:00 PM',
      classSize: '8-10 children per class',
      teacherRatio: '1:4'
    },
   

    preschool: {
      title: 'Preschool Program',
      age: '3 years - 4 years',
      description: 'Building on early foundations with a focus on cognitive skills, creativity, and social development through structured activities and play.',
      features: [
        'Early literacy activities',
        'Numeracy basics',
        'Arts and crafts',
        'Outdoor play',
        'Music and movement',
        'Social skills development'
      ],
      schedule: 'Monday - Friday, 8:00 AM - 3:00 PM',
      classSize: '12-15 children per class',
      teacherRatio: '1:6'
    },


     reception: {
      title: 'Reception Program',
      age: '4 years - 5 years',
      description: 'Preparing children for primary school with a focus on foundational academic skills, independence, and social-emotional development.',
      features: [
        'Phonics and reading readiness',
        'Basic math concepts',
        'Science exploration',
        'Physical education',
        'Social-emotional learning',
        'Independence skills'
      ],
      schedule: 'Monday - Friday, 8:00 AM - 4:00 PM',
      classSize: '15-18 children per class',
      teacherRatio: '1:8'
    },


     primary: {
      title: 'Preschool Program',
      age: '18 months - 3 years',
      description: 'extended care program focusing on academic enrichment, extracurricular activities, and holistic development to support young learners.',
      features: [
        'Homework support',
        'STEM activities',
        'Arts and music',
        'Physical fitness',
        'Social skills development',
        'Leadership opportunities'
      ],
      schedule: 'Monday - Friday, 8:00 AM - 4:00 PM',
      classSize: 'varies bases on enrollment',
      teacherRatio: '1:10'
    },
  };

  const programTabs = [
    { id: 'toddler', label: 'Toddler Program' },
    { id: 'preschool', label: 'Preschool Program' },
    { id: 'reception', label: 'Reception Program' },
    { id: 'primary', label: 'Primary Program' }
  ];

  const tabContentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0, 
      x: -50,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="programs">
      {/* Page Hero */}
      <section className="page-hero" style={{backgroundImage: `url(${programsHeroBg})`}}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Educational Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive programs designed to nurture every stage of your child's development.
          </motion.p>
        </div>
      </section>

      {/* Age-Based Programs */}
      <section className="age-programs">
        <div className="container">
          <div className="section-header">
            <h2>Age-Based Programs</h2>
            <p>Each program is carefully designed to meet the developmental needs and learning styles of specific age groups.</p>
          </div>

          {/* Program Navigation */}
          <div className="program-nav">
            {programTabs.map((tab) => (
              <motion.button
                key={tab.id}
                className={`program-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Program Content */}
          <div className="program-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="program-details active"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="program-header">
                  <h3>{programs[activeTab].title}</h3>
                  <div className="program-age">{programs[activeTab].age}</div>
                </div>
                
                <div className="program-layout">
                  <div className="program-text">
                    <p className="program-description">{programs[activeTab].description}</p>
                    
                    <div className="program-features">
                      <h4>Program Features</h4>
                      <ul>
                        {programs[activeTab].features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="program-info">
                      <h4>Program Details</h4>
                      <div className="info-item">
                        <strong>Schedule:</strong> {programs[activeTab].schedule}
                      </div>
                      <div className="info-item">
                        <strong>Class Size:</strong> {programs[activeTab].classSize}
                      </div>
                      <div className="info-item">
                        <strong>Teacher Ratio:</strong> {programs[activeTab].teacherRatio}
                      </div>
                    </div>
                  </div>
                  
                  <div className="program-image">
                    <div className="image-placeholder" >
                      { activeTab === 'toddler' && <img src={toddlerprogram} alt="Toddler Program" /> }
                      { activeTab === 'preschool' && <img src={toddlerprogram} alt="Toddler Program" /> }
                      {/* <span>{programs[activeTab].image} Image</span> */}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>


      

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Enroll Your Child?</h2>
            <p>Join our school community and give your child the foundation they need for lifelong learning and success</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-schedule-tour">Schedule a Tour</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Programs;