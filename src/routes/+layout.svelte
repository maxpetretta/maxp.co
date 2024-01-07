<script lang="ts">
  import "$/app.css"

  import Command from "$/lib/components/Command.svelte"
  import { createOpener } from "$/lib/opener.svelte"
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
  <Command />
</div>
