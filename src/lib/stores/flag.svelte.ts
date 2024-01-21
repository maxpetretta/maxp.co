export type Flag = {
  value: boolean
  toggle: (newValue?: boolean) => void
}

export function createFlag(initialValue?: boolean): Flag {
  let value = $state(initialValue ?? false)

  function toggle(newValue?: boolean) {
    value = newValue ?? !value
  }

  return {
    get value() {
      return value
    },
    toggle,
  }
}
