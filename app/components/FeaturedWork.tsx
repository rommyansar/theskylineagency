'use client';

import { useReveal } from '../hooks/useReveal';

const featured = [
  {
    image: '/projects/spendtrack.png',
    name: 'Finance Tracker',
    description: 'A personal finance tracker app with spending analytics and charts.',
    category: 'App',
    review: 'Amazing experience! The platform is seamless and exactly fits our business requirements.',
    client: 'Alex M., Founder'
  },
  {
    image: '/projects/software-1-azure.png',
    name: 'Azure Hub',
    description: 'Enterprise resource planning and dashboard tracking.',
    category: 'Software',
    review: 'Highly professional and responsive. The final product elevated our digital presence.',
    client: 'David C., Operations Director'
  },
  {
    image: '/projects/ai-orbivo.png',
    name: 'Orbivo',
    description: 'Intelligent workflow automation platform for scaling business productivity.',
    category: 'AI',
    review: 'Amazing experience! The platform is seamless and exactly fits our business requirements.',
    client: 'Jessica L., Operations Lead'
  },
];

export default function FeaturedWork() {
  const sectionRef = useReveal();

  return (
    <section className="featured-section" id="work" ref={sectionRef}>
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-label">Our best</span>
          <h2 className="section-title">Featured Work</h2>
        </div>
        <div className="featured-grid">
          {featured.map((project, i) => (
            <div className={`featured-card reveal reveal-delay-${i + 1}`} key={i}>
              <div className="featured-image-wrap">
                <img
                  src={project.image}
                  alt={project.name}
                  className="featured-image"
                  loading="lazy"
                />
                <div className="featured-overlay">
                  <span className="featured-category">{project.category}</span>
                </div>
              </div>
              <div className="featured-info">
                <h3 className="featured-name">{project.name}</h3>
                <p className="featured-desc">{project.description}</p>
                {project.review && (
                  <div className="featured-review">
                    <p className="featured-review-text">&ldquo;{project.review}&rdquo;</p>
                    <span className="featured-review-author">— {project.client}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
