export const capitalizeFirstLetter = (word: string | undefined): string => {
  if (typeof word === 'string') {
    const leftPart = word[0].toUpperCase()
    const rightPart = word.slice(1)
    return leftPart + rightPart
  }
  return ''
}
