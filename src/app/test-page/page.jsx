'use client'

export default function Test() {

    const handleClick = async () => {
        const response = await fetch('/api/hello')
        .then(res => res.json())

        console.log(response)
    }

    return (
        <button onClick={handleClick}>Test</button>
    )
}