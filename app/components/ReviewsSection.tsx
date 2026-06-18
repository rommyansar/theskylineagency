'use client';

import { useReveal } from '../hooks/useReveal';

const reviews = [
  {
    rating: 5,
    name: 'Jane Henderson',
    role: 'Managing Director',
    company: 'Apex Partners',
    text: '“Before Skyline, our team spent hours chasing client files and project specifications. Skyline built a custom project portal tailored to our workflow. Now, everything is on autopilot. Our clients love uploading design files and briefs directly there.”',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
  },
  {
    rating: 5,
    name: 'David Chen',
    role: 'Founder & Principal',
    company: 'Chen Consulting Group',
    text: '“The custom booking application and real-time SMS alerts Skyline developed for our business are a game changer. We reduce scheduling conflicts and coordinate client milestones instantly. It is a premium experience.”',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
  },
  {
    rating: 5,
    name: 'Elena Rostova',
    role: 'VP of Operations',
    company: 'Horizon Digital Solutions',
    text: '“Skyline built a custom operations dashboard that gave us the visibility we desperately needed. We track project statuses and capacity in real-time, cutting turnaround times in half. The system paid for itself month one.”',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
  },
  {
    rating: 5,
    name: 'Marcus Vance',
    role: 'Managing Partner',
    company: 'Vance Consulting',
    text: '“We migrated all client communication and project milestones to a custom CRM Skyline built for us. Having one single trusted hub has elevated our brand image and client trust dramatically.”',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
  }
];

export default function ReviewsSection() {
  const sectionRef = useReveal();

  return (
    <section className="reviews-section" id="reviews" ref={sectionRef} style={{ padding: '120px 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--border-light)' }}>
      <div className="section-container">
        {/* Header and trust stats */}
        <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-label" style={{ color: 'var(--accent-teal)' }}>REVIEWS & SOCIAL PROOF</span>
          <h2 className="section-title">Trusted by Top-Performing Businesses</h2>
          
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '16px' }}>
            <div style={{ display: 'flex', color: '#FBBF24' }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="18" height="18" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text-primary)' }}>4.9/5 Rating</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '15px' }}>on G2, Capterra, and Trustpilot</span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="reviews-grid">
          {reviews.map((review, i) => (
            <div className={`review-card reveal reveal-delay-${i + 1}`} key={i}>
              {/* Star Rating & Quote */}
              <div>
                <div style={{ display: 'flex', color: '#FBBF24', marginBottom: '20px' }}>
                  {[...Array(review.rating)].map((_, j) => (
                    <svg key={j} width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '32px', fontStyle: 'normal', fontWeight: '500' }}>
                  {review.text}
                </p>
              </div>

              {/* Author Info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img 
                  src={review.image} 
                  alt={review.name} 
                  style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent-teal)' }}
                />
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>{review.name}</h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: '2px 0 0 0' }}>
                    {review.role} • <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{review.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
