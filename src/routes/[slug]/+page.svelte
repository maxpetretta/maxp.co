<script lang="ts">
  import { Button } from "$lib/components/ui/button"
  import { formatDate } from "$lib/utils.js"

  const { data } = $props()
  const { metadata, content } = $derived(data)
</script>

<article class="prose prose-stone dark:prose-invert prose-headings:text-base prose-headings:font-medium">
  <h1 class="-mb-0.5 mt-6">{metadata.title}</h1>
  <time class="mb-6 text-muted-foreground">{formatDate(metadata.date)}</time>

  <svelte:component this={content} />

  <Button href="/blog" variant="outline" class="mx-auto my-12 block w-fit no-underline">More posts</Button>
</article>
