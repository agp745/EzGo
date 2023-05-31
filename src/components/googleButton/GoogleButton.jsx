'use client'

import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

export const GoogleButton = ({action}) => {

    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl')

    return (
        <button
            onClick={() => signIn('google', {callbackUrl})}
            className='flex justify-center relative w-full px-3 py-2 bg-neutral-900 hover:bg-neutral-800 border-[0.5px] focus:outline-2 border-neutral-500 transition-all duration-100 ease-in rounded-md text-neutral-400 placeholder-neutral-500 text-sm'
        >
            <Image 
                src={'/icons/google-icon.svg'}
                alt='google icon'
                width={24}
                height={24}
                className='absolute left-3 top-[6px]'
            />
            <div className='font-thin'>
                {action} with <span className='font-semibold'>Google</span>
            </div>
        </button>
    )
}