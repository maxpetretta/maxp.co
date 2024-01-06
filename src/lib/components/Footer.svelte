<script>
  import { Button } from "$/lib/components/ui/button"

  const socials = [
    {
      name: "email",
      href: "mailto:hello@maxpetretta.com",
    },
    {
      name: "github",
      href: "https://github.com/maxpetretta",
    },
    {
      name: "farcaster",
      href: "https://warpcast.com/maxp.eth",
    },
    {
      name: "twitter",
      href: "https://twitter.com/maxpetretta",
    },
    {
      name: "linkedin",
      href: "https://linkedin.com/in/maxpetretta",
    },
  ]
</script>

<footer class="-mx-4 mb-8">
  <address class="flex items-center justify-between not-italic">
    {#each socials as social}
      <Button href={social.href} target="_blank" variant="ghost" class="text-xs text-zinc-500 dark:text-zinc-400">
        {social.name}
      </Button>
    {/each}
  </address>
</footer>
