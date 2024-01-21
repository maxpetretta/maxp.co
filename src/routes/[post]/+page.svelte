<script lang="ts">
  const { data } = $props()
  const { metadata, content } = data
  console.log("🚀 ~ metadata:", metadata)
</script>

<article>
  <h1>{metadata.title}</h1>
  <svelte:component this={content} />
</article>
