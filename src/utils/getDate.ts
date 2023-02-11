export function getFullDate(date : Date) : string {
    const day = new Date(date).getDay().toString()
    const year = new Date(date).getFullYear().toString()
    const month = new Date(date).getMonth().toString()
    return `${month} ${day}, ${year}`
}