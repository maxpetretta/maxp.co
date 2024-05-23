<script lang="ts">
  import { formatDate } from "$/lib/utils.js"

  const { data } = $props()
  const { metadata, content } = data
</script>

<article class="prose prose-stone dark:prose-invert prose-headings:text-base prose-headings:font-medium">
  <h1 class="-mb-0.5 mt-6">{metadata.title}</h1>
  <time class="mb-6 text-muted-foreground">{formatDate(metadata.date)}</time>

  <svelte:component this={content} />
</article>
