<script lang="ts">
  import type { Opener } from "$/lib/opener.svelte"
  import { browser } from "$app/environment"
  import * as Command from "$lib/components/ui/command"
  import { getContext } from "svelte"

  const opener = getContext<Opener>("opener")

  function handleKeydown(e: KeyboardEvent) {
    // always allow escape key
    if (e.key === "Escape" && opener.isOpen) {
      e.preventDefault()
      opener.toggle(false)
      return
    }

    // allow command/ctrl + k
    if (!e.metaKey && !e.ctrlKey) return
    if (e.key === "k") {
      e.preventDefault()
      opener.toggle()
    }
  }

  // add keyboard listener on page mount
  $effect(() => {
    if (!browser) return
    document.addEventListener("keydown", handleKeydown)
    return () => {
      document.removeEventListener("keydown", handleKeydown)
    }
  })
</script>

<!-- see: https://github.com/huntabyte/bits-ui/issues/164 -->
<Command.Dialog bind:open={opener.isOpen} onOpenChange={opener.toggle}>
  <Command.Input placeholder="Type a command or search..." />
  <Command.List>
    <Command.Empty>No results found.</Command.Empty>
    <Command.Group heading="Suggestions">
      <Command.Item>
        <span>Calendar</span>
      </Command.Item>
      <Command.Item>
        <span>Search Emoji</span>
      </Command.Item>
      <Command.Item>
        <span>Calculator</span>
      </Command.Item>
    </Command.Group>
    <Command.Separator />
    <Command.Group heading="Settings">
      <Command.Item>
        <span>Profile</span>
        <Command.Shortcut>⌘P</Command.Shortcut>
      </Command.Item>
      <Command.Item>
        <span>Billing</span>
        <Command.Shortcut>⌘B</Command.Shortcut>
      </Command.Item>
      <Command.Item>
        <span>Settings</span>
        <Command.Shortcut>⌘S</Command.Shortcut>
      </Command.Item>
    </Command.Group>
  </Command.List>
</Command.Dialog>
