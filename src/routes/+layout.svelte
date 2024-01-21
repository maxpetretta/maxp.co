<script lang="ts">
  import "$/app.css"

  import CommandBar from "$/lib/components/CommandBar.svelte"
  import { createFlag } from "$/lib/stores/flag.svelte"
  import { browser } from "$app/environment"
  import Footer from "$lib/components/Footer.svelte"
  import Header from "$lib/components/Header.svelte"
  import { setContext } from "svelte"

  const opener = createFlag()
  setContext("opener", opener)

  const theme = createFlag(browser && document.documentElement.classList.contains("dark"))
  setContext("theme", theme)
</script>

<div class="mx-auto flex min-h-screen max-w-2xl flex-col px-5 md:px-0">
  <Header />

  <main class="grow">
    <slot />
  </main>

  <Footer />
  <CommandBar />
</div>
