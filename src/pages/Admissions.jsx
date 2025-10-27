import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import admissionsHeroBg from '../assets/images/admissions-hero.jpg';

const Admissions = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'requirements', label: 'Requirements' },
    { id: 'tuition', label: 'Tuition & Fees' }
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Submit Application',
      description: 'Complete our online application form with required documents'
    },
    {
      number: '2',
      title: 'Schedule Tour',
      description: 'Visit our campus and meet our teaching staff'
    },
    {
      number: '3',
      title: 'Assessment',
      description: 'Age-appropriate assessment to understand your child\'s needs'
    },
    {
      number: '4',
      title: 'Enrollment',
      description: 'Complete enrollment process and welcome to our family'
    }
  ];

  const requirements = [
    {
      category: 'Required Documents',
      items: [
        'Completed application form',
        'Birth certificate copy',
        'Immunization records',
        'Previous school records (if applicable)',
        'Emergency contact information',
        'Medical information form'
      ]
    },
    {
      category: 'Age Requirements',
      items: [
        'Toddlers: 18 months - 2 years',
        'Preschool: 3 - 4 years old',
        'Pre-K: 4 - 5 years old',
        'After School: Elementary age (5-12 years)'
      ]
    },
    {
      category: 'Health Requirements',
      items: [
        'Up-to-date immunizations',
        'Annual physical examination',
        'Allergy and medication information',
        'Emergency medical authorization',
        'Health insurance information'
      ]
    }
  ];

  const tuitionPrograms = [
    {
      title: 'Toddlers (18 months - 2 years)',
      options: [
        {
          price: '$1,200/month',
          type: 'Full-time',
          features: ['Diaper changing', 'Nap time', 'Sensory play', 'Nutritious meals']
        },
        {
          price: '$800/month',
          type: 'Part-time',
          features: []
        }
      ]
    },
    // ... other programs
  ];

  const additionalFees = [
    { name: 'Registration Fee (one-time)', amount: '$150' },
    { name: 'Activity Fee (annual)', amount: '$200' },
    { name: 'Field Trip Fee (per trip)', amount: '$25-50' },
    { name: 'Extended Care (per hour)', amount: '$15' }
  ];

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const openApplicationModal = () => setIsModalOpen(true);
  const closeApplicationModal = () => setIsModalOpen(false);

  return (
    <div className="admissions">
      {/* Page Hero */}
      <section className="page-hero" style={{backgroundImage: `url(${admissionsHeroBg})`}}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Join Our School Family
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Begin your child's educational journey with us
          </motion.p>
          <div className="hero-buttons">
            <motion.button
              className="btn btn-primary"
              onClick={openApplicationModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
            </motion.button>
            <Link to="/contact" className="btn btn-secondary">Schedule Tour</Link>
          </div>
          
          {/* Admissions Navigation Tabs */}
          <div className="admissions-nav">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                className={`admissions-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Content Sections */}
      <section className="admissions-content">
        <div className="container">
          <AnimatePresence mode="wait">
            {/* Overview Section */}
            {activeTab === 'overview' && (
              <motion.div
                id="overview"
                className="admissions-section active"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {/* Admission Process */}
                <div className="admission-process">
                  <div className="section-header">
                    <h2>Admission Process</h2>
                    <p>Our simple four-step admission process ensures a smooth transition for your child</p>
                  </div>
                  
                  <motion.div 
                    className="process-steps"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {processSteps.map((step, index) => (
                      <motion.div
                        key={index}
                        className="process-step"
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                      >
                        <div className="step-number">{step.number}</div>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Important Dates */}
                <div className="important-dates">
                  <div className="section-header">
                    <h2>Important Dates</h2>
                  </div>
                  
                  <div className="dates-table">
                    <table>
                      <thead>
                        <tr>
                          <th>2024-2025 Academic Year</th>
                          <th>Rolling Admissions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Application Deadline</td>
                          <td>May 31, 2024</td>
                        </tr>
                        <tr>
                          <td>School Year Begins</td>
                          <td>August 26, 2024</td>
                        </tr>
                        <tr>
                          <td>Orientation Week</td>
                          <td>August 19-23, 2024</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="dates-note">
                    <p>We accept applications throughout the year based on availability. Early applications are encouraged for better placement opportunities.</p>
                    <p>Mid-year enrollment is available for all programs. Contact us to check current availability.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Requirements Section */}
            {activeTab === 'requirements' && (
              <motion.div
                id="requirements"
                className="admissions-section active"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="section-header">
                  <h2>Admission Requirements</h2>
                  <p>Please ensure you have all required documents and meet the criteria before applying.</p>
                </div>
                
                <motion.div 
                  className="requirements-grid"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {requirements.map((requirement, index) => (
                    <motion.div
                      key={index}
                      className="requirement-category"
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                    >
                      <h3>{requirement.category}</h3>
                      <ul className="requirements-list">
                        {requirement.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {/* Tuition & Fees Section */}
            {activeTab === 'tuition' && (
              <motion.div
                id="tuition"
                className="admissions-section active"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="section-header">
                  <h2>Tuition & Fees</h2>
                  <p>Transparent pricing for all our programs with flexible payment options</p>
                </div>
                
                <motion.div 
                  className="tuition-grid"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {tuitionPrograms.map((program, index) => (
                    <motion.div
                      key={index}
                      className="tuition-program"
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                    >
                      <h3>{program.title}</h3>
                      <div className="tuition-options">
                        {program.options.map((option, optIndex) => (
                          <motion.div
                            key={optIndex}
                            className="tuition-option"
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="tuition-price">{option.price}</div>
                            <div className="tuition-type">{option.type}</div>
                            {option.features.length > 0 && (
                              <ul className="tuition-features">
                                {option.features.map((feature, featIndex) => (
                                  <li key={featIndex}>{feature}</li>
                                ))}
                              </ul>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* Additional Information */}
                <motion.div 
                  className="additional-info"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="info-section">
                    <h3>Payment Options</h3>
                    <ul>
                      <li>Monthly payment plans available</li>
                      <li>10% discount for annual payment</li>
                      <li>Sibling discount: 15% off second child</li>
                      <li>Financial assistance available</li>
                    </ul>
                  </div>
                  
                  <div className="info-section">
                    <h3>Additional Fees</h3>
                    <div className="fees-list">
                      {additionalFees.map((fee, index) => (
                        <div key={index} className="fee-item">
                          <span className="fee-name">{fee.name}</span>
                          <span className="fee-amount">{fee.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply" className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Get Started?</h2>
            <p>Join our school community and give your child the best educational foundation</p>
            <div className="cta-buttons">
              <motion.button
                className="btn btn-primary"
                onClick={openApplicationModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Application
              </motion.button>
              <Link to="/contact" className="btn btn-secondary">Schedule Campus Tour</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            id="applicationModal"
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="modal-header">
                <h2>Student Application Form</h2>
                <motion.span
                  className="close-modal"
                  onClick={closeApplicationModal}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  &times;
                </motion.span>
              </div>
              <div className="modal-body">
                {/* Application form would go here */}
                <p>Application form content...</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Admissions;