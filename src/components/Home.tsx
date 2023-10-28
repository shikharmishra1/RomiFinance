
import Zomi from "../assets/pic1.png";

export default function Home() {
    return (
        <div>
            <div className="flex  my-14 mx-[10vw] flex-col">
                <div></div>
                <div className="text-[3.5rem] text-white max-w-lg  leading-[4.6rem] font-[500] mb-[1.3rem] ">Decentralized
                    <br />
                    Perpetual Exchange</div>
                <div className="text-[1.4rem] text-[#cecece] max-w-md  leading-[1.8rem] font-[400] mb-[1.3rem] ">
                    Trade BTC, ETH, AVAX and other top cryptocurrencies with up to 30x leverage directly from your wallet
                </div>
                <button className="bg-[#3eb489] hover:bg-[#106d44]  self-start py-2 px-4 rounded-md" ><div className=" text-center font-[400] text-white text-[0.9rem] text-s">Launch Exchange</div></button>

                <div className="flex flex-row gap-7 my-16">
                    <div className="shadow-lg pl-7 pr-[120px] py-7 border border-solid border-[hsla(0,0%,100%,.0784313725490196)] rounded-[4px] flex flex-row gap-8">
                        <img src='https://zomi.finance/static/media/ic_trading.2c53815a.svg' />
                        <div className="flex flex-col ">
                            <div className="text-[1rem] text-[#cecece] max-w-md  leading-[1.8rem] font-[400] ">Total Sharing Volume</div>
                            <div className="text-white text-3xl">$0</div>
                        </div>
                    </div>
                    <div className="shadow-lg pl-7 pr-[170px] py-7 border border-solid border-[hsla(0,0%,100%,.0784313725490196)] rounded-[4px] flex flex-row gap-8">
                        <img src='https://zomi.finance/static/media/ic_stats.f0a18011.svg' />
                        <div className="flex flex-col ">
                            <div className="text-[1rem] text-[#cecece] max-w-md  leading-[1.8rem] font-[400] ">Open Interest</div>
                            <div className="text-white text-3xl">$0</div>
                        </div>
                    </div>
                    <div className="shadow-lg pl-7 pr-[180px] py-7 border border-solid border-[hsla(0,0%,100%,.0784313725490196)] rounded-[4px] flex flex-row gap-8">
                        <img src='https://zomi.finance/static/media/ic_totaluser.ae09b310.svg' />
                        <div className="flex flex-col ">
                            <div className="text-[1rem] text-[#cecece] max-w-md  leading-[1.8rem] font-[400] ">Total Users</div>
                            <div className="text-white text-3xl">0</div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="border-[#4d4d4e] border" />
            <div className="flex  my-14 mx-[10vw] flex-col gap-[50px]">
                <div className="flex flex-row gap-[9.5rem]">
                    <div className="flex  max-w-sm flex-col gap-5">
                        <div className="flex flex-row gap-5">
                            <img src='https://zomi.finance/static/media/ic_liquidity.505b3f30.svg' />
                            <div className="text-white text-[1.4rem]">Reduce Liquidation Risks</div>
                        </div>
                        <div className="text-gray-300 text-[1.1rem] max-w-[18rem]">
                            An aggregate of high-quality price feeds determine when liquidations occur. This keeps positions safe from temporary wicks.
                        </div>
                    </div>
                    <div className="flex  max-w-sm flex-col gap-5">
                        <div className="flex flex-row gap-5">
                            <img src='https://zomi.finance/static/media/ic_cost.b4a729d3.svg' />
                            <div className="text-white text-[1.4rem]">Save on Costs</div>
                        </div>
                        <div className="text-gray-300 text-[1.1rem] max-w-[18rem]">
                            Enter and exit positions with minimal spread and zero price impact. Get the optimal price without incurring additional costs.
                        </div>
                    </div>
                    <div className="flex  max-w-sm flex-col gap-5">
                        <div className="flex flex-row gap-5">
                            <img src='https://zomi.finance/static/media/ic_simpleswaps.2005009f.svg' />
                            <div className="text-white text-[1.4rem]">Simple Swaps</div>
                        </div>
                        <div className="text-gray-300 text-[1.1rem] max-w-[18rem]">
                            Open positions through a simple swap interface. Conveniently swap from any supported asset into the position of your choice.
                        </div>
                    </div>

                </div>

                <div className="mt-[6.5rem]">
                    <div className="text-white max-w-xs text-[2.4rem] leading-[3rem] font-semibold">Two tokens create our ecosystem</div>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="flex flex-col max-w-xl gap-4 bg-[#151515] shadow-lg pl-7  py-5 border border-solid border-[hsla(0,0%,96%,.26)] rounded-[10px] ">
                        <div className=" flex flex-row gap-2">
                            <img src={Zomi} className="w-10 h-10" />
                            <div className="py-1 text-white text-[1.4rem]">$ROMI</div>
                        </div>
                        <div className="text-white text-[1.1rem] font-normal ">
                            $ROMI is the utility and governance token. Accrues 30% of the platform's generated fees.
                        </div>
                        <div className="text-[1rem] text-[#cecece] max-w-md  leading-[1.8rem] font-[400] ">Ethereum APR: 0.00%</div>
                        <div className="flex flex-row gap-4">
                        <button className="bg-[#3eb489] hover:bg-[#106d44]  self-start py-[0.43rem] px-4 rounded-md" ><div className=" text-center font-[400] text-white text-[0.9rem] text-s">Buy</div></button>
                            <button className="bg-transparent hover:bg-[#727a74] hover:bg-opacity-10  border border-[#a0a3c4] self-start py-[0.43rem] px-4 rounded-md" ><div className=" text-center font-[400] text-white text-[0.9rem] text-s">Read More</div></button>
                        </div>

                    </div>
                    <div className="flex flex-col max-w-xl gap-4 bg-[#151515] shadow-lg pl-7  py-5 border border-solid border-[hsla(0,0%,96%,.26)] rounded-[10px] ">
                        <div className=" flex flex-row gap-2">
                            <img src={Zomi} className="w-10 h-10" />
                            <div className="py-1 text-white text-[1.4rem]">$ZLP</div>
                        </div>
                        <div className="text-white text-[1.1rem] font-normal ">
                            $ZLP is the liquidity provider token. Accrues 70% of the platform's generated fees.
                        </div>
                        <div className="text-[1rem] text-[#cecece] max-w-md  leading-[1.8rem] font-[400] ">Ethereum APR: ...%</div>
                        <div className="flex flex-row gap-4">
                            <button className="bg-[#3eb489] hover:bg-[#106d44]  self-start py-[0.43rem] px-4 rounded-md" ><div className=" text-center font-[400] text-white text-[0.9rem] text-s">Buy</div></button>
                            <button className="bg-transparent hover:bg-[#727a74] hover:bg-opacity-10  border border-[#a0a3c4] self-start py-[0.43rem] px-4 rounded-md" ><div className=" text-center font-[400] text-white text-[0.9rem] text-s">Read More</div></button>
                        </div>

                    </div>

                </div>


            </div>
        </div>


    );
}