<script lang="ts">
  import Experiences from "$/lib/components/Experiences.svelte"
  import Projects from "$/lib/components/Projects.svelte"
</script>

<section class="mt-6 text-muted-foreground">
  <h2>Software Engineer</h2>
  <h3>New York, NY</h3>
</section>

<section class="mt-16 space-y-5">
  <h3 class="mb-4 font-medium">About</h3>
  <p>I didn't set out to be a web developer.</p>
  <p>But what I found was the most robust, powerful system for building applications in the world.</p>
  <p>That's worth sticking around for.</p>
</section>

<section class="mt-16">
  <h3 class="mb-5 font-medium">Projects</h3>
  <Projects />
</section>

<section class="mb-20 mt-16">
  <h3 class="mb-4 font-medium">Experience</h3>
  <Experiences />
</section>
