<script lang="ts">
  import { Switch } from "$/lib/components/ui/switch"
  import { browser } from "$app/environment"
  import { goto } from "$app/navigation"
  import { page } from "$app/stores"
  import { Button } from "$lib/components/ui/button"
  import { Command } from "lucide-svelte"

  function toggleTheme() {
    if (!browser) return
    document.documentElement.classList.add("no-transition")
    const isDark = document.documentElement.classList.toggle("dark")
    window.localStorage.setItem("theme", isDark ? "dark" : "light")
    setTimeout(() => document.documentElement.classList.remove("no-transition"), 100)
  }

  async function handleNameClick() {
    // eslint-disable-next-line svelte/valid-compile
    if ($page.url.pathname === "/") {
      await sharePageUrl()
    } else {
      await goto("/")
    }
  }

  async function sharePageUrl() {
     
    const url = $page.url.href

    try {
      if (navigator.share) {
        await navigator.share({ url })
      } else {
        await navigator.clipboard.writeText(url)
      }
    } catch (error) {
      console.error(error)
    }
  }
</script>

<header class="mt-8 md:mt-16">
  <nav class="flex items-center justify-between">
    <Button href="/" onclick={handleNameClick} variant="ghost" class="-ml-4 text-base">Max Petretta</Button>
    <div class="flex items-center space-x-5">
      <!-- eslint-disable-next-line svelte/valid-compile -->
      {#if $page.url.pathname !== "/"}
        <!-- eslint-disable-next-line svelte/valid-compile -->
        <Button onclick={sharePageUrl} variant="ghost">{$page.url.pathname}</Button>
      {/if}
      <Switch onCheckedChange={toggleTheme} />
      <Button variant="outline" size="icon" class="transition-none">
        <Command />
      </Button>
    </div>
  </nav>
</header>
