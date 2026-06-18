'use client';

import { useState } from 'react';

interface TaskItem {
  id: number;
  text: string;
  completed: boolean;
}

export default function KaiTestimonial() {
  const [tasks, setTasks] = useState<TaskItem[]>([
    { id: 1, text: '1. UI/UX Prototype Sign-Off', completed: true },
    { id: 2, text: '2. Database Schema Integration', completed: true },
    { id: 3, text: '3. Custom API & Backend Development', completed: false },
    { id: 4, text: '4. App Store & Production Launch', completed: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <section className="testimonial-section">
      <div className="section-container">
        <div className="grid-two-col">
          {/* Left Column - Quote & Info */}
          <div className="testimonial-quote-block">
            <span className="testimonial-label">CUSTOM SOFTWARE</span>
            
            <div style={{ position: 'relative' }}>
              <span className="quote-mark-large">“</span>
              <h2 className="testimonial-quote-text" style={{ position: 'relative', zIndex: 2 }}>
                Skyline engineered a custom operational system that perfectly maps our client workflow. The development was fast, transparent, and built exactly to our specifications.
              </h2>
            </div>

            <p className="testimonial-desc" style={{ marginTop: '24px' }}>
              Skyline connects all your client communications, documents, and task lists into one centralized collaborative system.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)' }}>Pretium Group</span>
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--text-muted)' }}></div>
              <span style={{ fontSize: '15px', color: 'var(--text-muted)' }}>G2 Verified Review</span>
            </div>

            <a href="#case-studies" className="testimonial-link">
              How Skyline saves each team member 18.5 hours a week
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="1" y1="6" x2="13" y2="6" />
                <polyline points="7 1 13 6 7 11" />
              </svg>
            </a>
          </div>

          {/* Right Column - Interactive Checklist Mockup */}
          <div>
            <div className="mockup-card-container">
              <div className="mockup-header">
                <div>
                  <h3 className="mockup-title">Custom App Milestones</h3>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>Development Sprints Active</p>
                </div>
                <span className="mockup-badge">Skyline AI</span>
              </div>

              <div className="mockup-list">
                {tasks.map(task => (
                  <div 
                    key={task.id} 
                    className={`mockup-item ${task.completed ? 'completed' : ''}`}
                    onClick={() => toggleTask(task.id)}
                    style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
                  >
                    <div className="mockup-checkbox">
                      {task.completed && (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="1 4.5 3.5 7 9 1" />
                        </svg>
                      )}
                    </div>
                    <span className="mockup-item-text">{task.text}</span>
                  </div>
                ))}
              </div>

              {/* Action/Progress Indicator */}
              <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px' }}>
                <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>
                  Progress: {tasks.filter(t => t.completed).length} of {tasks.length} tasks completed
                </span>
                <span style={{ 
                  color: tasks.every(t => t.completed) ? 'var(--accent-teal-hover)' : 'var(--text-primary)',
                  fontWeight: 700,
                  transition: 'color 0.3s'
                }}>
                  {tasks.every(t => t.completed) ? '✓ Ready to Launch' : '○ In Active Development'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
