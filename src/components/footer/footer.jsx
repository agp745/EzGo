import Image from 'next/image'

const Developer = ({name, image, link}) => {
    return (
        <a href={link} target='_blank'>
        <div className='flex gap-1 hover:-translate-y-1 transition-transform duration-100 ease-in mb-2 px-1'>
            <Image 
                src={image} 
                alt={name} 
                width={24} 
                height={24}
                className='rounded-full'
                />
                
            <span className='text-white'>{name}</span>
        </div>
        </a>
    )
}

export const Footer = () => {

    const alexPortfolio = 'https://alexgp-portfolio.vercel.app/'
    const noahGithub = 'https://github.com/NoahW52'

    return (
        <footer className="fixed bottom-0 left-0 right-0 text-sm SHOW-FOOTER">
            <a href='https://github.com/agp745/EzGo' target='blank' className='fixed bottom-0 left-0 pb-2 pl-2'>
                <Image 
                    src={'/icons/white-github-icon.svg'}
                    alt='github icon'
                    width={24}
                    height={24}
                    className='fill-white'
                />
            </a>
            <div className="flex flex-row justify-center text-gray-500">
                developed by&nbsp;
                <Developer name={'Alex Perez'} image={'/images/portfolio-headshot.png'} link={alexPortfolio}/>&nbsp;&&nbsp;
                <Developer name={'Noah Wright'} image={'/images/noah-headshot.png'} link={noahGithub}/>
            </div>
        </footer>
    )
}