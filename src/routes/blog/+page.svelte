<script lang="ts">
  import { formatDate } from "$/lib/utils"

  const { data } = $props()
</script>

<section class="mt-6">
  <h1 class="font-medium">Blog</h1>
  <p class="text-muted-foreground">Posts, notes, and thoughts</p>

  <ul class="mt-6 space-y-2 text-sm sm:text-base">
    {#each data.posts as { path, metadata }}
      <li>
        <a
          href={path}
          class="clickable -mx-2 block rounded-sm px-2 py-1.5 hover:bg-accent hover:text-accent-foreground"
        >
          <div class="flex justify-between border-b border-dotted border-muted-foreground">
            <span>{metadata.title}</span>
            <span class="whitespace-nowrap text-left font-mono text-muted-foreground">{formatDate(metadata.date)}</span>
          </div>
        </a>
      </li>
    {/each}
  </ul>
</section>
