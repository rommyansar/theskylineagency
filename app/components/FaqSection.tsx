'use client';

import { useRef } from 'react';

export default function FaqSection() {
  const qsRef = useRef<HTMLDivElement>(null);

  const handleToggle = (e: React.SyntheticEvent<HTMLDetailsElement>) => {
    const target = e.currentTarget;
    if (target.open && qsRef.current) {
      const allDetails = qsRef.current.querySelectorAll<HTMLDetailsElement>('details');
      allDetails.forEach((d) => {
        if (d !== target && d.open) {
          d.open = false;
        }
      });
    }
  };

  const faqs = [
    {
      q: 'So... are you a marketing agency?',
      a: 'Not really. Marketing is one of the things we do, but stopping there would defeat the point. Skyline works across the business wherever transformation is needed.',
    },
    {
      q: 'Do I need to know which services I need?',
      a: 'No. Tell us what&apos;s happening in the business, what isn&apos;t working or where you want to go. Figuring out what needs changing is our job.',
    },
    {
      q: 'Do you replace my existing team?',
      a: 'Not unless there&apos;s a reason to. We can work alongside your team, fill capability gaps, build systems around them or take ownership of areas that currently have nobody responsible for them.',
    },
    {
      q: 'How much AI do you actually use?',
      a: 'As much as makes sense. We don&apos;t force AI into something just so we can call it AI-powered. We use it when it makes the work faster, smarter, more scalable or genuinely better.',
    },
    {
      q: 'Can you build custom software or AI tools?',
      a: 'Yes. Websites, applications, internal tools, AI systems, agents, automations and custom software are all within scope.',
    },
    {
      q: 'Can you help us set up an entirely new business?',
      a: 'Yes. Strategy, branding, technology, marketing, hiring, processes, documentation, systems and launch can all sit under Skyline.',
    },
    {
      q: 'Where are you based and who do you work with?',
      a: 'We work with business owners in the United States and the United Kingdom, remotely, with WhatsApp as the front door. More on <a href="#talk">where we work</a>.',
    },
    {
      q: 'What if what I need isn’t listed?',
      a: 'Ask us anyway.',
    },
  ];

  return (
    <section className="s14" id="faq" aria-labelledby="s14h">
      <picture className="wall" aria-hidden="true">
        <source media="(max-width: 760px)" srcSet="/assets/s14/wall-m.webp" />
        <img src="/assets/s14/wall.webp" alt="" width={2560} height={1440} loading="lazy" decoding="async" />
      </picture>
      <div className="wrap">
        <div className="head">
          <span className="k">FAQ</span>
          <h2 id="s14h">Questions are cheaper than mistakes.</h2>
        </div>
        <div className="qs" ref={qsRef}>
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              open={idx === 0 ? true : undefined}
              onToggle={handleToggle}
            >
              <summary>{faq.q}</summary>
              <p dangerouslySetInnerHTML={{ __html: faq.a }} />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

