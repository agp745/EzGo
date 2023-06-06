import * as Popover from '@radix-ui/react-popover';
import Link from 'next/link';
import { Cross2Icon, ArrowRightIcon, PersonIcon, RocketIcon } from '@radix-ui/react-icons'
import { signOut } from 'next-auth/react';
import { DeleteAlert } from '../deleteAlert';

export const AvatarPopover = ({ children, session }) => (
  <Popover.Root>
    <Popover.Trigger asChild>
        {children}
    </Popover.Trigger>
    
    <Popover.Portal>
    <Popover.Content
      className="min-w-[220px] bg-white opacity-95 rounded-md p-1 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
      align="start"
      sideOffset={5}
      alignOffset={-14}
    >
      <div className="text-violet11 flex flex-col justify-center relative select-none pl-5 outline-none mt-2">
        <div className='text-[11px] font-light text-neutral-400'>signed in as...</div>
        <div className="text-[13px]">{session.user.name}</div>
        <div className="text-[13px] font-light italic -mt-0.5">{session.user.email}</div>
      </div>
      
      <div className='h-[50px]'></div>
      <div className="text-[13px] text-violet11 flex items-center gap-1 h-[25px] px-[10px] relative select-none pl-5 outline-none hover:brightness-125">
        <div>Account</div>
        <PersonIcon />
      </div>
      <Link
        href={'/saved-routes'}
        className="text-[13px] text-violet11 flex items-center gap-1 h-[25px] px-[10px] relative select-none pl-5 outline-none hover:brightness-125"
      >
        <div>Saved Routes</div>
        <RocketIcon />
      </Link>
      <button 
        className="text-[13px] text-violet11 flex items-center gap-1 h-[25px] px-[10px] relative select-none pl-5 outline-none hover:brightness-125"
        onClick={() => signOut()}
      >
        <div>Sign Out</div>
        <ArrowRightIcon />
      </button>
      <DeleteAlert>
      <div className="text-[13px] text-red-600 flex items-center gap-1 h-[25px] px-[10px] relative select-none pl-5 outline-none hover:brightness-125">
        <div>Delete Account</div>
        <Cross2Icon fill='red'/>
      </div>
      </DeleteAlert>
       
      <Popover.Close
        className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 absolute top-[5px] right-[5px] hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 outline-none cursor-default"
        aria-label="Close"
      >
          <Cross2Icon />
      </Popover.Close>
      <Popover.Arrow className="fill-white" />
    </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

