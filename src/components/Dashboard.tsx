import Zomi from "../assets/pic1.png";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
export default function Dashboard() {
    ChartJS.register(ArcElement, Tooltip, Legend);

    return (
        <div className="flex  my-14 mx-[10vw] flex-col gap-8">
            <div className="flex flex-col">
                <div className="flex flex-row gap-2">
                    <div className="text-white text-4xl font-[630]">Stats</div>
                    <img className="mt-2" src='https://zomi.finance/static/media/ic_avalanche_24.4f4088f4.svg' />
                </div>
                <div className=" mt-2  text-[1rem] text-[#b7b7bd] max-w-md  leading-[1.3rem] font-[400] ">
                    Ethereum Total Stats start from 06 Jan 2022.
                    <br />
                    For detailed stats:
                </div>

            </div>

            <div className="flex gap-4">
                <div className="flex w-[600px] flex-col gap-0 bg-[#151515] shadow-lg    border border-solid border-[hsla(0,0%,96%,.26)] rounded-[5px] ">
                    <div className=" flex flex-row gap-2 border-b border-solid border-[hsla(0,0%,96%,.26)]">

                        <div className="mx-4 self-center py-3 text-white text-[1rem] ">Overview</div>
                    </div>
                    <div className="mx-4 py-4 flex flex-col gap-[0.4rem] ">
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Aum</div>
                            <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">$34</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">$ZLP Pool</div>
                            <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">$34</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">24h Volume</div>
                            <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">$0</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Long Positions</div>
                            <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">$0</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Short Positions</div>
                            <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">$0</div>
                        </div>

                    </div>


                </div>
                <div className="flex w-[600px] flex-col gap-0 bg-[#151515] shadow-lg    border border-solid border-[hsla(0,0%,96%,.26)] rounded-[5px] ">
                    <div className=" flex flex-row gap-2 border-b border-solid border-[hsla(0,0%,96%,.26)]">

                        <div className="mx-4 self-center py-3 text-white text-[1rem] ">Total Stats</div>
                    </div>
                    <div className="mx-4 py-4 flex flex-col gap-[0.4rem] ">
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Total Fees</div>
                            <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">$0</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Total Volume</div>
                            <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">$0</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Floor Price Fund</div>
                            <div className="text-white ">$627,124</div>
                        </div>


                    </div>


                </div>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-row gap-2">
                    <div className="text-white text-4xl font-[630]">Tokens</div>
                    <img className="mt-2" src='https://zomi.finance/static/media/ic_avalanche_24.4f4088f4.svg' />
                </div>
                <div className=" mt-2  text-[1rem] text-[#b7b7bd] max-w-md  leading-[1.3rem] font-[400] ">
                    Platform and $ZLP index tokens.
                </div>

            </div>

            <div className="flex  gap-4">

                <div className="flex  w-[600px]  gap-0 bg-[#151515] shadow-lg    border border-solid border-[hsla(0,0%,96%,.26)] rounded-[5px] ">
                    <div className="flex flex-col">
                        <div className=" p-3 flex flex-row gap-2 border-b border-solid border-[hsla(0,0%,96%,.26)]">

                            <img src={Zomi} className="h-10 w-10" />
                            <div className="flex flex-col">
                                <div className="text-white">$ROMI</div>
                                <div className="text-[#b7b7bd] text-xs">$ROMI</div>
                            </div>
                        </div>


                        <div className="mx-4 py-4 w-[360px] flex flex-col gap-[0.4rem] ">
                            <div className="flex flex-row justify-between">
                                <div className="text-[#b7b7bd]">Price</div>
                                <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">$0.00</div>
                            </div>
                            <div className="flex flex-row justify-between">
                                <div className="text-[#b7b7bd]">Supply</div>
                                <div className="text-white ">10,000 $ROMI</div>
                            </div>
                            <div className="flex flex-row justify-between">
                                <div className="text-[#b7b7bd]">Total Staked</div>
                                <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">$0</div>
                            </div>
                            <div className="flex flex-row justify-between">
                                <div className="text-[#b7b7bd]">Market Cap</div>
                                <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">$10</div>
                            </div>

                        </div>
                    </div>
                    <div className="w-[200px] py-4 px-4 relative">
                        <Doughnut options={{ cutout: '90%', }} data={{ datasets: [{ spacing: 1, borderWidth: 0, hoverBorderWidth: 8, label: 'liquidity in %', data: [94, 6], backgroundColor: ['#0598fa', '#5c0af5'], hoverBorderColor: ['hsla(190, 100%, 50%, 0.46)'] }] }} />
                        <div className="absolute top-[38%] left-[28%] text-white">Distribution</div>
                    </div>

                </div>
                <div className="flex  w-[600px]  gap-0 bg-[#151515] shadow-lg    border border-solid border-[hsla(0,0%,96%,.26)] rounded-[5px] ">
                    <div className="flex flex-col">
                        <div className=" p-3 flex flex-row gap-2 border-b border-solid border-[hsla(0,0%,96%,.26)]">

                            <img src={Zomi} className="h-10 w-10" />
                            <div className="flex flex-col">
                                <div className="text-white">$ROMI</div>
                                <div className="text-[#b7b7bd] text-xs">$ROMI</div>
                            </div>
                        </div>


                        <div className="mx-4 py-4 w-[360px] flex flex-col gap-[0.4rem] ">
                            <div className="flex flex-row justify-between">
                                <div className="text-[#b7b7bd]">Price</div>
                                <div className="text-white ">$1.139</div>
                            </div>
                            <div className="flex flex-row justify-between">
                                <div className="text-[#b7b7bd]">Supply</div>
                                <div className="text-white ">29 $ZLP</div>
                            </div>
                            <div className="flex flex-row justify-between">
                                <div className="text-[#b7b7bd]">Total Staked</div>
                                <div className="text-white ">$34</div>
                            </div>
                            <div className="flex flex-row justify-between">
                                <div className="text-[#b7b7bd]">Market Cap</div>
                                <div className="text-white ">$34</div>
                            </div>
                            <div className="flex flex-row justify-between">
                                <div className="text-[#b7b7bd]">Stablecoin Percentage</div>
                                <div className="text-white ">49.50%</div>
                            </div>

                        </div>
                    </div>
                    <div className="w-[200px] py-4 px-4 relative">
                        <Doughnut options={{ cutout: '90%', }} data={{ datasets: [{ spacing: 1, borderWidth: 0, hoverBorderWidth: 8, label: 'USDC in %', data: [49.5, 51.5], backgroundColor: ['#6062a6', '#0598fa'], hoverBorderColor: ['hsla(190, 100%, 50%, 0.46)'] }] }} />
                        <div className="absolute top-[38%] left-[30%] text-white">$ZLP Pool</div>
                    </div>

                </div>



            </div>
            <div className="flex gap-4">
                <div className="flex w-full flex-col gap-0 bg-[#151515] shadow-lg    border border-solid border-[hsla(0,0%,96%,.26)] rounded-[5px] ">
                    <div className=" flex flex-row gap-0 border-b border-solid border-[hsla(0,0%,96%,.26)]">

                        <div className="mx-2 self-center py-3 text-white text-[1rem] ">$ZLP Index Composition</div>
                        <img className="self-center" src='https://zomi.finance/static/media/ic_avalanche_16.d53ce0b2.svg' />
                    </div>
                    <div className="mx-4 py-4 flex flex-row gap-[0.4rem] ">
                        <div>
                            <div className="mr-[17rem] text-[#b7b7bd] justify-between">TOKEN</div>
                            <div className=" py-4 flex flex-row gap-2">

                                <img src='https://zomi.finance/static/media/ic_eth_40.5e255508.svg' className="h-10 w-10" />
                                <div className="flex flex-col">
                                    <div className="text-white">Ethereum</div>
                                    <div className="text-[#b7b7bd] text-xs">ETH</div>
                                </div>
                            </div>
                            <div className=" py-3 flex flex-row gap-2">

                                <img src='https://zomi.finance/static/media/ic_wbtc_40.8330ef8d.svg' className="h-10 w-10" />
                                <div className="flex flex-col">
                                    <div className="text-white">Wrapped Bitcoin</div>
                                    <div className="text-[#b7b7bd] text-xs">WBTC</div>
                                </div>
                            </div>
                            <div className=" py-3 flex flex-row gap-2">

                                <img src='https://zomi.finance/static/media/ic_ape_40.53ac41f3.svg' className="h-10 w-10" />
                                <div className="flex flex-col">
                                    <div className="text-white">Apecoin</div>
                                    <div className="text-[#b7b7bd] text-xs">APE</div>
                                </div>
                            </div>
                            <div className=" py-3 flex flex-row gap-2">

                                <img src='https://zomi.finance/static/media/ic_usdc_40.27f415ba.svg' className="h-10 w-10" />
                                <div className="flex flex-col">
                                    <div className="text-white">USD Coin</div>
                                    <div className="text-[#b7b7bd] text-xs">USDC</div>
                                </div>
                            </div>


                        </div>
                        <div>
                            <div className=" mr-[5rem] text-[#b7b7bd] justify-between">PRICE</div>
                            <div className=" py-5 flex flex-row gap-2">

                                <div className="text-white ">$1,789.60</div>

                            </div>
                            <div className=" py-5 flex flex-row gap-2">
                                <div className="text-white">$34,212.18</div>
                            </div>
                            <div className=" py-5 flex flex-row gap-2">
                                <div className="text-white">$1.37</div>
                            </div>
                            <div className=" py-5 flex flex-row gap-2">
                                <div className="text-white">$1.00</div>
                            </div>

                        </div>
                        <div>
                            <div className=" mr-[15rem] text-[#b7b7bd] justify-between">POOL</div>
                            <div className=" py-5 flex flex-row gap-2">

                                <div className="text-white  underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">$19</div>

                            </div>
                            <div className=" py-5 flex flex-row gap-2">
                                <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">$0</div>
                            </div>
                            <div className=" py-5 flex flex-row gap-2">
                                <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">$0</div>
                            </div>
                            <div className=" py-5 flex flex-row gap-2">
                                <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">$14</div>
                            </div>

                        </div>
                        <div>
                            <div className=" mr-[15rem] text-[#b7b7bd] justify-between">WEIGHT</div>
                            <div className=" py-5 flex flex-row gap-2">

                                <div className="text-white  underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">50.49% / 25.00%</div>

                            </div>
                            <div className=" py-5 flex flex-row gap-2">
                                <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">0.00% / 25.00%</div>
                            </div>
                            <div className=" py-5 flex flex-row gap-2">
                                <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">0.00% / 25.00%</div>
                            </div>
                            <div className=" py-5 flex flex-row gap-2">
                                <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">49.50% / 25.00%</div>
                            </div>

                        </div>
                        <div>
                            <div className=" ml-[2rem] text-[#b7b7bd] justify-between">UTILIZATION</div>
                            <div className="ml-[2rem] py-5 flex flex-row gap-2">

                                <div className="text-white ">0.00%</div>

                            </div>
                            <div className="ml-[2rem] py-5 flex flex-row gap-2">
                                <div className=" text-white">0.00%</div>
                            </div>
                            <div className="ml-[2rem] py-5 flex flex-row gap-2">
                                <div className="text-white">0.00%</div>
                            </div>
                            <div className="ml-[2rem] py-5 flex flex-row gap-2">
                                <div className="text-white">0.00%</div>
                            </div>

                        </div>

                    </div>


                </div>

            </div>



        </div>
    )
}