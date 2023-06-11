export function scrollToElementById(elementId: string) {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.offsetTop

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth',
    })
  }
}
