<script lang="ts">
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let index = $state(0)
</script>

<!-- <Typewriter mode="cascade" interval={50} delay={300} cursor={true} keepCursorOnFinish={true}> -->
<section class="mt-6 text-zinc-400">
  <h2>Software Engineer</h2>
  <h3>New York, NY</h3>
</section>

<div class="mt-6 flex">
  <div class="h-4 w-10 rounded-lg bg-white" role="link" tabindex="0" on:mouseenter={() => (index = 0)} />
  <div class="h-4 w-10 rounded-lg bg-white" role="link" tabindex="0" on:mouseenter={() => (index = 1)} />
  <div class="h-4 w-10 rounded-lg bg-white" role="link" tabindex="0" on:mouseenter={() => (index = 2)} />
  <div class="h-4 w-10 rounded-lg bg-white" role="link" tabindex="0" on:mouseenter={() => (index = 3)} />
  <div class="h-4 w-10 rounded-lg bg-white" role="link" tabindex="0" on:mouseenter={() => (index = 4)} />
  <div class="absolute h-4 w-10 rounded-lg bg-red-500" />
</div>

<!-- </Typewriter> -->
