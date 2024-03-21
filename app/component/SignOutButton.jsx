'use client'
import { signOut } from 'next-auth/react'
import React from 'react'

export default function SignOutButton() {
    const handleClick = async(e) => {
        e.preventDefault()
        await signOut()
    }
    return (
        <div>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}
