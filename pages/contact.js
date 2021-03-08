import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Max Petretta</title>
        <meta name="description" content="A blog by Max Petretta, software engineer" />
      </Head>
      <section>
        <h1>Contact</h1>
        <p>Do you have a question on one of my articles?  A comment you'd like to share?  Or maybe you just want to talk;  The easiest way to reach me is <a href="https://twitter.com/maxpetretta">via Twitter</a>.  You can also send me an email if you'd like:</p>
      </section>
      <section>
        <form action="https://formspree.io/f/xeqpbarr" method="POST">
          <input className="form" type="email" name="_replyto" tabIndex="1" placeholder="Email address"/>
          <input type="hidden" name="_subject" value="Contact Form"/>
          <textarea className="form" rows="8" type="text" tabIndex="2" placeholder="Message"/>
          <input className="btn block mr-0 ml-auto transform px-8 outline-none cursor-pointer hover:scale-110 focus:scale-110 
          text-gray-100 bg-accent hover:text-white hover:bg-accent-light focus:bg-accent-light 
          dark:bg-accent dark:hover:text-white dark:hover:bg-accent-light" type="submit" tabIndex="3" value="Send"/>
        </form>
      </section>
    </>
  )
}
