<script lang="ts">
  import { COMMANDS, runCommand, type CommandType } from "$/lib/commands"
  import CommandItem from "$/lib/components/CommandItem.svelte"
  import type { Opener } from "$/lib/stores/opener.svelte"
  import { browser } from "$app/environment"
  import * as Command from "$lib/components/ui/command"
  import { getContext } from "svelte"

  const opener = getContext<Opener>("opener")
  let lastKey = $state("")

  // split commands into their respective groups
  const groups = COMMANDS.reduce<Record<string, CommandType[]>>((group, command) => {
    ;(group[command.group] = group[command.group] || []).push(command)
    return group
  }, {})

  // map shortcut keys to commands for performance
  const shortcuts = COMMANDS.reduce<Record<string, CommandType>>((shortcut, command) => {
    if (command.shortcut) {
      shortcut[command.shortcut.join()] = command
    }
    return shortcut
  }, {})

  function handleKeydown(e: KeyboardEvent) {
    // always allow escape key
    if (e.key === "Escape" && opener.isOpen) {
      e.preventDefault()
      opener.toggle(false)
      return
    }

    // open command bar on command/ctrl + k
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      opener.toggle()
    }

    // run shortcut for given key or chord
    if (!opener.isOpen) {
      const chord = `${lastKey}${e.key}`.trim().toUpperCase()
      const command = shortcuts[chord]
      if (command) runCommand(command.id, opener)
    }

    // save the keypress for chords
    lastKey = e.key

    // clear the last key after a timeout
    setTimeout(() => {
      lastKey = ""
    }, 500)
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

{#if opener}
  <!-- see: https://github.com/huntabyte/bits-ui/issues/164 -->
  <Command.Dialog bind:open={opener.isOpen} onOpenChange={opener.toggle}>
    <Command.Input placeholder="Type a command or search..." />
    <Command.List>
      <Command.Empty>No results found.</Command.Empty>

      {#each Object.entries(groups) as [group, commands]}
        <Command.Group heading={group}>
          {#each commands as command}
            <CommandItem {command} {opener} />
          {/each}
        </Command.Group>
        <Command.Separator />
      {/each}
    </Command.List>
  </Command.Dialog>
{/if}
