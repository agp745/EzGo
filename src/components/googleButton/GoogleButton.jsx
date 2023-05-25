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
            className='flex justify-center relative w-full px-3 py-2 bg-neutral-900 border-[0.5px] focus:border-2 border-neutral-500 transition-all duration-100 ease-in rounded-md text-neutral-400 placeholder-neutral-500 text-sm'
        >
            <Image 
                src={'/icons/google-icon.svg'}
                alt='google icon'
                width={24}
                height={24}
                className='absolute left-3 top-[6px]'
            />
            <div className='font-thin'>
                Sign up with <span className='font-semibold'>Google</span>
            </div>
        </button>
    )
}