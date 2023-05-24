'use client'

import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

export const GoogleButton = () => {

    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl')

    return (
        <button
            onClick={() => signIn('google', {callbackUrl})}
            className='flex justify-center relative w-full px-3 py-2 rounded-md text-black text-sm bg-white'
        >
            <Image 
                src={'/icons/google-icon.svg'}
                alt='google icon'
                width={24}
                height={24}
                className='absolute left-3 top-3'
            />
            <div className='font-thin'>
                Sign up with <span className='font-semibold text-lg'>Google</span>
            </div>
        </button>
    )
}