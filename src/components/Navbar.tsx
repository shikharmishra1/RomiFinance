import { Link } from 'react-router-dom';
import logo from '../assets/New Logo.png';
export default function Navbar() {
    return (

        <nav className="bg-white border-b-[hsla(0,0%,100%,.0284313725490196)] border-b border-gray-200 dark:bg-[#181a18] shadow-[0_3px_10px_rgb(0,0,0,0.3)]">
            <div className="max-w-full flex flex-row gap-[2rem] flex-wrap items-center justify-between mx-6 p-3">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Romi Finance</span>
                </a>
                <div className="flex gap-6 items-center md:order-2">
                    <button className="bg-[#3eb489] hover:bg-[#106d44] self-start py-2 px-4 rounded-md" ><div className=" text-center font-[400] text-white text-[0.9rem] text-s">Trade</div></button>
                    <button className='bg-[#151515] hover:bg-[#727a74] hover:bg-opacity-10 shadow-lg px-4  py-[0.3rem] font-[300px] text-[1rem] font-  border border-solid border-[hsla(0,0%,96%,.26)] rounded-[4px]'>
                        <div className='flex  flex-row gap-2'>
                            <img src='https://zomi.finance/static/media/ic_wallet_24.a19a6758.svg ' />
                            <div className=" text-center font-semibold text-white text-[13px]  mt-[0.20rem]">Connect Wallet</div>
                        </div>
                    </button>
                    <button className='bg-[#151515] shadow-lg px-2  py-[0.05rem] font-[300px] text-[1rem]   border border-solid border-[hsla(0,0%,96%,.26)] rounded-[4px]'>
                        <div className='flex flex-row gap-2'>
                            <img className='w-[40%]' src='https://zomi.finance/static/media/ic_eth_24.6b1d8a1d.svg' />
                            <div className=' bg-[hsla(0,0%,100%,.2)] min-h-[1px] mt-[0.3rem] max-h-[22px]  w-[1px] inline-block w-0.1'></div>
                            <div className='py-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white text-lg bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                </svg>
                            </div>
                        </div>
                    </button>

                </div>
                <div className="items-center  justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
                    <ul className="flex flex-col px-8 p-4 md:p-0 mt-4  border md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                        <li>
                            <a href="#" className="font-[400] hover:text-gray-50  leading-[1.8rem] text-[#a7a7a9]">Home</a>
                        </li>
                        <li>
                            <div className="font-[400] hover:text-gray-50  leading-[1.8rem] text-[#a7a7a9]"><Link to='/dashboard'>Dashboard</Link></div>
                        </li>
                        <li>
                            <a href="#" className="font-[400] hover:text-gray-50  leading-[1.8rem] text-[#a7a7a9]">NFT</a>
                        </li>
                        <li>
                            <div className="font-[400] hover:text-gray-50  leading-[1.8rem] text-[#a7a7a9]"><Link to='/earn'>Earn</Link></div>
                        </li>
                        <li>
                            <a href="#" className="font-[400] hover:text-gray-50  leading-[1.8rem] text-[#a7a7a9]">Buy</a>
                        </li>
                        <li>
                            <a href="#" className="font-[400] hover:text-gray-50  leading-[1.8rem] text-[#a7a7a9]">Referals</a>
                        </li>
                        <li>
                            <a href="#" className="font-[400] hover:text-gray-50  leading-[1.8rem] text-[#a7a7a9]">Ecosystem</a>
                        </li>
                        <li>
                            <a href="#" className="font-[400] hover:text-gray-50  leading-[1.8rem] text-[#a7a7a9]">About</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    )
}