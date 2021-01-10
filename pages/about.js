import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About - Max Petretta</title>
        <meta name="description" content="A blog by Max Petretta, software development engineer" />
      </Head>
      <section>
        <h1>About Me</h1>
        <p>Hi!  My name is Max Petretta, I live in Milwaukee, WI. I work as a Software Engineer at GE Healthcare.  My focus is in the cloud infrastructure space, working to modernize applications for the cloud using Infrastructure-as-Code.</p>
        <p>I am originally from Michigan, and graduated with a B.S. in Computer Science from the University of Michigan.  While working towards my degree, I also studied abroad at University College London.</p>
        <p>This website is relatively new, but I hope to use it to share my thoughts on some of my favorite topics.  Including but not limited to...</p>
        <ul>
          <li>Technology</li>
          <li>Productivity</li>
          <li>Software Development</li>
          <li>and Coffee! ☕️</li>
        </ul>
        <img src="/max.jpg" alt="A picture of the author, Max Petretta" />
      </section>
    </>
  )
}
