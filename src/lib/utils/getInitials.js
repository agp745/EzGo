
export function getInitials(name) {
    const split = name.split(' ')
    const initials = split.map((n) => n[0])
    return initials.join('')
}