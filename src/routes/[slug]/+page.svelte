<script lang="ts">
  const { data } = $props()
  const { metadata, content } = data
</script>

<article>
  <h1>{metadata.title}</h1>
  <p>Published: {metadata.date}</p>
  <svelte:component this={content} />
</article>
