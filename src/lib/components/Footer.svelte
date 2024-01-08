<script>
  import { Button } from "$/lib/components/ui/button"
  import { SOCIALS } from "$/lib/constants"

  const socials = Object.entries(SOCIALS).map(([name, href]) => ({ name, href }))
</script>

<footer class="-mx-4 mb-8">
  <address class="flex items-center justify-center not-italic">
    {#each socials as social}
      <Button href={social.href} target="_blank" variant="ghost" class="text-zinc-500 dark:text-zinc-400">
        {social.name}
      </Button>
    {/each}
  </address>
</footer>
