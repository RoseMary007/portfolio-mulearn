function Projects() {
  const projects = [
    {
      title: "Silly Story Generator",
      description:
        "Random story generator built using JavaScript."
    },
    {
      title: "Image Gallery",
      description:
        "Responsive image gallery website."
    },
    {
      title: "Colgate Custom Bag",
      description:
        "Interactive personalized bag experience."
    }
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;