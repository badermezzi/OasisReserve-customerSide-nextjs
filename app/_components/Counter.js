"use client"

import { useState } from "react"

export default function Counter({ users }) {

    const [count, setCount] = useState(0)
    return (
        <button onClick={() => setCount((count) => (users.length - 1 > count ? count + 1 : users.length - 1))} >
            user number {count + 1} is {users[count].name}
        </button>
    )
}
