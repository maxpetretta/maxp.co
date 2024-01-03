<script lang="ts">
  import "$/app.css"
  import { browser } from "$app/environment"
  import { page } from "$app/stores"

  function toggleTheme() {
    if (!browser) return
    document.documentElement.classList.toggle("dark")

    const isDark = document.documentElement.classList.contains("dark")
    window.localStorage.setItem("theme", isDark ? "dark" : "light")
  }
</script>

<div
  class="mx-auto flex min-h-screen max-w-2xl flex-col justify-between bg-white px-4 text-black dark:bg-black dark:text-white"
>
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

  <main class="">
    <slot />
  </main>

  <footer>
    <address class="mb-8 flex items-center justify-between not-italic">
      <a href="mailto:hello@maxpetretta.com" target="_blank">email</a>
      <a href="https://github.com/maxpetretta" target="_blank">github</a>
      <a href="https://warpcast.com/maxp.eth" target="_blank">farcaster</a>
      <a href="https://twitter.com/maxpetretta" target="_blank">twitter</a>
      <a href="https://linkedin.com/in/maxpetretta" target="_blank">linkedin</a>
    </address>
  </footer>
</div>
