<script lang="ts">
  import "$/app.css"

  import CommandBar from "$/lib/components/CommandBar.svelte"
  import { createOpener } from "$/lib/stores/opener.svelte"
  import Footer from "$lib/components/Footer.svelte"
  import Header from "$lib/components/Header.svelte"
  import { setContext } from "svelte"

  const opener = createOpener()
  setContext("opener", opener)
</script>

<div class="mx-auto flex min-h-screen max-w-2xl flex-col px-5 md:px-0">
  <Header />

  <main class="grow">
    <slot />
  </main>

  <Footer />
  <CommandBar />
</div>
