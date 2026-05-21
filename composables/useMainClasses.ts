export function useMainClasses() {
  const classes = useState<string[]>('mainClasses', () => [])

  function setMainClasses(newClasses: string[]) {
    classes.value = newClasses
  }

  return {
    classes,
    setMainClasses
  }
}
