<script lang="ts">
  import type { Post } from "$lib/utils"
  import { formatDate } from "$lib/utils"
  import { getContext } from "svelte"

  const posts = getContext<Post[]>("posts")
</script>

<section class="mt-6">
  <h1 class="font-medium">Blog</h1>
  <p class="text-muted-foreground">Posts, notes, and thoughts</p>

  <ul class="mt-6 space-y-2 text-sm sm:text-base">
    {#each posts as { path, metadata }}
      <li>
        <a
          href={path}
          class="clickable -mx-2 block rounded-sm px-2 py-1.5 hover:bg-accent hover:text-accent-foreground"
        >
          <div class="flex justify-between border-b border-dotted border-muted-foreground">
            <span>{metadata.title}</span>

            <!-- TODO: can i use a media query here? -->
            <span class="whitespace-nowrap text-left font-mono text-muted-foreground sm:hidden"
              >{formatDate(metadata.date, { year: "numeric", month: "short", day: "numeric" })}</span
            >
            <span class="hidden whitespace-nowrap text-left font-mono text-muted-foreground sm:inline"
              >{formatDate(metadata.date, { year: "numeric", month: "long", day: "numeric" })}</span
            >
          </div>
        </a>
      </li>
    {/each}
  </ul>
</section>
