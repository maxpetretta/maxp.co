export type Opener = {
  isOpen: boolean
  toggle: (open?: boolean) => void
}

export function createOpener(): Opener {
  let isOpen = $state(false)

  function toggle(open?: boolean) {
    isOpen = open ?? !isOpen
  }

  return {
    get isOpen() {
      return isOpen
    },
    toggle,
  }
}
