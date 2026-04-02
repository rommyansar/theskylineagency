'use client';

import { useState, useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';

const categories = ['All', 'Apps', 'Websites', 'Software', 'AI'];

const projects = [
  {
    title: 'Daily Challenge',
    category: 'Apps',
    image: '/projects/sbank.png',
    description: 'Fitness and workout tracker with heart rate and calorie goals.',
    result: '10k+ active users',
    review: 'Top-notch performance and sleek design. We discovered a massive boost in user engagement.',
    clientName: 'Priyanka P., Project Manager',
  },
  {
    title: 'URBN Real Estate',
    category: 'Websites',
    image: '/projects/urbn-1.png',
    description: 'Modern real estate property listing platform with map integration.',
    result: '+45% property inquiries',
    review: 'The team delivered exactly what we needed, exceeding expectations in quality and speed.',
    clientName: 'Mark T., Tech Lead',
  },
  {
    title: 'SBANK',
    category: 'Apps',
    image: '/projects/fitness.png',
    description: 'Neobanking app with card management and subscription tracking.',
    result: '+42% user engagement',
    review: 'A smooth development process from start to finish. Highly recommended for complex integrations.',
    clientName: 'Sarah J., Product Manager',
  },
  {
    title: 'PitchBot',
    category: 'Websites',
    image: '/projects/pitchbot.png',
    description: 'AI-powered sales and service automation dashboard.',
    result: '95% increased conversion',
    review: 'Highly professional and responsive. The final product elevated our digital presence.',
    clientName: 'David C., Operations Director',
  },
  {
    title: 'ReelUp',
    category: 'Websites',
    image: '/projects/reelup.png',
    description: 'Super-fast e-commerce video commerce platform packed with shoppable videos.',
    result: '20X faster product discovery',
    review: 'Amazing experience! The platform is seamless and exactly fits our business requirements.',
    clientName: 'Lisa K., Managing Partner',
  },
  {
    title: 'Sparki',
    category: 'AI',
    image: '/projects/ai-sparki.png',
    description: 'AI-powered email campaign automation and validation flow builder.',
    result: '80% less manual work',
    review: 'We were blown away by the attention to detail and robust functionality provided.',
    clientName: 'Tom R., E-commerce Manager',
  },
  {
    title: 'Orbivo',
    category: 'AI',
    image: '/projects/ai-orbivo.png',
    description: 'Intelligent workflow automation platform for scaling business productivity.',
    result: '10x Faster Setup',
    review: 'Amazing experience! The platform is seamless and exactly fits our business requirements.',
    clientName: 'Jessica L., Operations Lead',
  },
  {
    title: 'Calmnia',
    category: 'Websites',
    image: '/projects/calmnia.png',
    description: 'Personalized AI psychologist companion to listen, reflect, and guide.',
    result: '10k+ active users',
    review: 'A smooth development process from start to finish. Highly recommended for complex integrations.',
    clientName: 'Alex M., Founder',
  },
  {
    title: 'Azure Hub',
    category: 'Software',
    image: '/projects/software-1-azure.png',
    description: 'Enterprise resource planning and dashboard tracking.',
    result: '3x faster decisions',
    review: 'A smooth development process from start to finish. Highly recommended for complex integrations.',
    clientName: 'Greg P., Tech Lead',
  },
  {
    title: 'HirePath',
    category: 'Software',
    image: '/projects/software-2-hirepath.png',
    description: 'Streamlined recruiting and applicant tracking system.',
    result: 'Reduced time-to-hire by 40%',
    review: 'Highly professional and responsive. The final product elevated our digital presence.',
    clientName: 'Sarah M., HR Director',
  },
  {
    title: 'SAASI Campaigns',
    category: 'Software',
    image: '/projects/software-3-saasi.png',
    description: 'Email automation and campaign management platform.',
    result: '+250% engagement rate',
    review: 'The team delivered exactly what we needed, exceeding expectations in quality and speed.',
    clientName: 'Alex K., Marketing VP',
  },
  {
    title: 'Finance Tracker',
    category: 'Apps',
    image: '/projects/spendtrack.png',
    description: 'Personal finance tracker with spending analytics and charts.',
    result: '4.9/5 App Store Rating',
    review: 'The team delivered exactly what we needed, exceeding expectations in quality and speed.',
    clientName: 'Michael S., CEO',
  },
  {
    title: 'URBN Real Estate - Detail View',
    category: 'Websites',
    image: '/projects/urbn-2.png',
    description: 'Detailed property specification view for the URBN platform.',
    result: '+45% property inquiries',
    review: 'Amazing experience! The platform is seamless and exactly fits our business requirements.',
    clientName: 'Chris L., Product Owner',
  },
];

export default function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandAll, setExpandAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // useReveal still benefits from an array of dependencies, but let's just trigger it when data changes
  const sectionRef = useReveal(['SelectedWork', activeFilter, expandAll, isMobile]);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth <= 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleFilterChange = (cat: string) => {
    setActiveFilter(cat);
    setExpandAll(false);
  };

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // On server (not mounted), default to 6 to match typical desktop payload. 
  // On client, show 1 if mobile and not expanded, 6 if desktop and not expanded, or all if expanded.
  const defaultVisibleCount = isMounted && isMobile ? 1 : 6;
  const visibleCount = expandAll ? filtered.length : defaultVisibleCount;
  const displayedProjects = filtered.slice(0, visibleCount);

  return (
    <section className="portfolio-section" id="portfolio" ref={sectionRef}>
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Recent Work</h2>
        </div>

        <div className="filter-bar reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => handleFilterChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {displayedProjects.map((project, i) => (
            <div className={`portfolio-card reveal ${i >= 6 ? 'visible' : ''} reveal-delay-${Math.min(i + 1, 6)}`} key={project.title}>
              <div className="portfolio-image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio-image"
                  loading="lazy"
                />
                <div className="portfolio-hover-overlay">
                  <span className="portfolio-cat-tag">{project.category}</span>
                  {project.result && (
                    <span className="portfolio-result">{project.result}</span>
                  )}
                </div>
              </div>
              <div className="portfolio-info">
                <h3 className="portfolio-name">{project.title}</h3>
                <p className="portfolio-desc">{project.description}</p>
                {project.review && (
                  <div className="portfolio-review-block">
                    <p className="portfolio-review-text">&ldquo;{project.review}&rdquo;</p>
                    <span className="portfolio-review-author">— {project.clientName}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filtered.length > visibleCount && (
          <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
            <button 
              className="cta-button" 
              onClick={() => setExpandAll(true)}
            >
              See More
              <span className="cta-arrow">→</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
