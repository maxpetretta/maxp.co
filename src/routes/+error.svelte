<script lang="ts">
  import { page } from "$app/stores"
</script>

<!-- eslint-disable-next-line svelte/valid-compile -->
<h1>{$page.status}: {$page.error?.message}</h1>
