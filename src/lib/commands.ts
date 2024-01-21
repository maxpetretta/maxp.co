import { SOCIALS } from "$/lib/constants"
import type { Flag } from "$/lib/stores/flag.svelte"
import { browser } from "$app/environment"
import { goto } from "$app/navigation"

export type CommandType = {
  id: string
  name: string
  group: string
  icon?: string
  shortcut?: string[]
  action: (theme?: Flag) => void // TODO: should flags be passed somewhere else?
}

export async function gotoPage(path: string) {
  await goto(path)
}

export async function gotoSocial(platform: keyof typeof SOCIALS) {
  window.open(SOCIALS[platform], "_blank")
}

export function toggleTheme(theme?: Flag) {
  if (!browser || !theme) return
  document.documentElement.classList.add("no-transition")

  theme.toggle()
  const isDark = document.documentElement.classList.toggle("dark")
  window.localStorage.setItem("theme", isDark ? "dark" : "light")

  setTimeout(() => document.documentElement.classList.remove("no-transition"), 100)
}

export async function sharePageUrl(url: string) {
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

export function runCommand(id: string, opener: Flag, theme: Flag) {
  const command = COMMANDS.find((cmd) => cmd.id === id)
  if (!command || !opener) return

  opener.toggle(false)
  command.action(theme)
}

export const COMMANDS: CommandType[] = [
  {
    id: "share-link",
    name: "Share Link",
    group: "General",
    shortcut: ["S"],
    action: () => sharePageUrl(window.location.href),
  },
  {
    id: "toggle-theme",
    name: "Toggle Theme",
    group: "General",
    shortcut: ["T"],
    action: (theme) => toggleTheme(theme),
  },
  {
    id: "secret-third-thing",
    name: "Secret Third Thing",
    group: "General",
    shortcut: ["3"],
    action: () => console.log("Secret Third Thing"),
  },
  {
    id: "home",
    name: "Home",
    group: "Pages",
    shortcut: ["G", "H"],
    action: () => gotoPage("/"),
  },
  {
    id: "blog",
    name: "Blog",
    group: "Pages",
    shortcut: ["G", "B"],
    action: () => gotoPage("/blog"),
  },
  {
    id: "uses",
    name: "Uses",
    group: "Pages",
    shortcut: ["G", "U"],
    action: () => gotoPage("/uses"),
  },
  {
    id: "now",
    name: "Now",
    group: "Pages",
    shortcut: ["G", "N"],
    action: () => gotoPage("/now"),
  },
  {
    id: "email",
    name: "Email",
    group: "Contact",
    shortcut: ["E"],
    action: () => gotoSocial("email"),
  },
  {
    id: "github",
    name: "GitHub",
    group: "Contact",
    shortcut: ["I"],
    action: () => gotoSocial("github"),
  },
  {
    id: "farcaster",
    name: "Farcaster",
    group: "Contact",
    shortcut: ["F"],
    action: () => gotoSocial("farcaster"),
  },
  {
    id: "twitter",
    name: "Twitter",
    group: "Contact",
    shortcut: ["X"],
    action: () => gotoSocial("twitter"),
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    group: "Contact",
    shortcut: ["L"],
    action: () => gotoSocial("linkedin"),
  },
]
