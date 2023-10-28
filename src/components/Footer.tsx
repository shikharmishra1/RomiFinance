import { Link } from 'react-router-dom'
import logo from '../assets/New Logo.png'
export default function Footer() {
    return (
        <div className="flex bg-[#151515] border-t border-solid border-[hsla(0,0%,96%,.26)] justify-center flex-col gap-4">
            <div className='flex justify-center flex-row'>
                <img src={logo} className="h-[4rem] self-center w-[4rem] " alt="Flowbite Logo" />
                <div className='self-center text-white text-4xl'>Romi Finance</div>
            </div>

            <div className='flex justify-center flex-row gap-16'>

                <img src='https://zomi.finance/static/media/ic_twitter.9f35b403.svg' />
                <img src='https://zomi.finance/static/media/ic_medium.f6051b2e.svg' />
                <img src='https://zomi.finance/static/media/ic_github.dbd4de8a.svg' />
                <img src='https://zomi.finance/static/media/ic_telegram.af1a4a66.svg' />
                <img src='https://zomi.finance/static/media/ic_discord.be4d716c.svg' />
            </div>
            <div className='flex justify-center flex-row gap-5'>
                <div className='text-white'><Link to='/'>Terms and Conditions</Link></div>
                <div className='text-white'><Link to='/'>Referral Terms</Link></div>
                <div className='text-white'><Link to='/'>Media Kit</Link></div>

            </div>

        </div>
    )
}