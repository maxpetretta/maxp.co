<script lang="ts">
  import Experiences from "$/lib/components/Experiences.svelte"
  import Projects from "$/lib/components/Projects.svelte"
  import { Button } from "$/lib/components/ui/button"
</script>

<section class="mt-6 text-muted-foreground">
  <h2>Software Engineer</h2>
  <h3>New York, NY</h3>
</section>

<section class="mt-16 space-y-5">
  <h3 class="mb-4 font-medium">About</h3>
  <p>I didn't set out to become a web developer.</p>
  <p>But what I found was the most open, powerful system for building applications in the world.</p>
  <p>That's worth sticking around for.</p>
</section>

<section class="mt-16">
  <h3 class="mb-5 font-medium">Projects</h3>
  <Projects />
</section>

<section class="mt-16">
  <h3 class="mb-4 font-medium">Experience</h3>
  <Experiences />
</section>

<Button href="/blog" variant="outline" class="mx-auto my-12 block w-fit">Check out the blog</Button>
