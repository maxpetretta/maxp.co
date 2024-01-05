<script lang="ts">
  import { browser } from "$app/environment"
  import { page } from "$app/stores"

  function toggleTheme() {
    if (!browser) return
    document.documentElement.classList.toggle("dark")

    const isDark = document.documentElement.classList.contains("dark")
    window.localStorage.setItem("theme", isDark ? "dark" : "light")
  }
</script>

<header class="mt-8 md:mt-16">
  <nav class="flex items-center justify-between">
    <a href="/">Max Petretta</a>
    <div>
      <!-- eslint-disable-next-line svelte/valid-compile -->
      {#if $page.url.pathname !== "/"}
        <!-- eslint-disable-next-line svelte/valid-compile -->
        <span>{$page.url.pathname}</span>
      {/if}
      <button onclick={toggleTheme}>☀️</button>
      <button>⌘</button>
    </div>
  </nav>
</header>
