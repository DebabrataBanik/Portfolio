const About = () => {
  return (
    <section id="about">
      <h2 className="font-heading text-3xl tracking-wide font-medium mb-8 relative inline-block">
        About
        <span className="absolute bottom-1.5 ml-1.5 w-7 h-0.5 bg-accent"></span>
      </h2>

      <p className="tracking-wider text-text-secondary">
        I'm an Electronics and Telecommunications graduate from KIIT (2024),
        self-taught in web development over the past two years. I work mainly
        with React, TypeScript and Tailwind and I'm picking up Node, Express and
        MongoDB for the backend. Right now I'm also going through Scaler program
        for DSA fundamentals, system design and mentorship alongside building
        projects.
      </p>

      <div>
        <h3 className="font-heading text-xl font-medium mt-12 mb-5 tracking-wide">
          Skills
        </h3>
        <ul className="space-y-1">
          <li className="skill">
            <span className="skill-tag text-text-primary">Languges:</span>
            JavaScript, TypeScript, JAVA, SQL
          </li>
          <li className="skill">
            <span className="skill-tag text-text-primary">Frontend:</span>
            React, React Router, Tailwind CSS, HTML, CSS
          </li>
          <li className="skill">
            <span className="skill-tag text-text-primary">Backend:</span>
            Node.js, Express.js, REST APIs, MongoDB
          </li>
          <li className="skill">
            <span className="skill-tag text-text-primary">
              Libraries & Tools:
            </span>
            TanStack Query, Zustand, Zod, Git, GitHub, Postman, Figma
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-heading text-xl font-medium mt-12 mb-5 tracking-wide">
          Experience
        </h3>
        <div>
          <h4 className="font-medium tracking-wide mt-5 mb-2">
            Web Developer Intern - ZYMO (Mar-Jun 2025)
          </h4>
          <ul className="list-disc pl-5 space-y-1">
            <li className="list-item">
              Owned the end-to-end frontend redesign of 5 product sections,
              turning Figma designs into responsive React/Tailwind components
            </li>
            <li className="list-item">
              Worked with backend engineers on the 'Buy' user journey, handling
              frontend responsiveness and edge cases
            </li>
            <li className="list-item">
              Set up sitewide typography standards adopted across the app
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium tracking-wide mt-5 mb-2">
            Open Source Contributor - EduHaven (Sep-Oct 2025, GSSoC)
          </h4>
          <ul className="list-disc pl-5 space-y-1">
            <li className="list-item">
              Contributed frontend performance fixes, responsive UI rebuilds and
              skeleton loading states
            </li>
            <li className="list-item">
              Extended MongoDB schemas and built the matching frontend UI for
              new user stats
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
