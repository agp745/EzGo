'use client'

import * as Avatar from '@radix-ui/react-avatar'
import { getInitials } from '@/src/lib/utils/getInitials'
import { AvatarPopover } from '../avatar-popover'

export const UserAvatar = ({ session }) => {
    
    const fallbackInitials = getInitials(session.user.name)

    return (
        <AvatarPopover session={session}>
            <div className={`card after:blur-md after:animate-pulse rounded-full ml-5`} >
            <Avatar.Root className="bg-blackA3 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle hover:cursor-pointer">
                <Avatar.Image
                    className={`h-full w-full rounded-[inherit] object-cover `}
                    src={session.user.image}
                    alt={session.user.name}
                    />
                <Avatar.Fallback
                    className={`text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium`}
                    delayMs={600}
                    >
                {fallbackInitials}
                </Avatar.Fallback>
            </Avatar.Root>
            </div>
        </AvatarPopover>
    )
}