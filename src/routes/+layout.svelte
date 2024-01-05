<script lang="ts">
  import "$/app.css"
  import Footer from "$lib/components/Footer.svelte"
  import Header from "$lib/components/Header.svelte"
</script>

<div class="mx-auto flex min-h-screen max-w-2xl flex-col justify-between px-5 md:px-0">
  <Header />

  <main class="">
    <slot />
  </main>

  <Footer />
</div>
