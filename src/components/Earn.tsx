import ROMI from "../assets/pic1.png";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
export default function Dashboard() {
    ChartJS.register(ArcElement, Tooltip, Legend);

    return (
        <div className="flex  my-14 mx-[10vw] flex-col gap-8">
            <div className="flex flex-col">
                <div className="flex flex-row gap-2">
                    <div className="text-white text-4xl font-[630]">Earn</div>

                </div>
                <div className=" mt-2  text-[1rem] text-[#b7b7bd] max-w-md  leading-[1.3rem] font-[400] ">
                    Stake $ROMI and $ZLP to earn rewards.

                </div>

            </div>

            <div className="flex gap-4">
                <div className="flex w-[600px] flex-col gap-0 bg-[#151515] shadow-lg    border border-solid border-[hsla(0,0%,96%,.26)] rounded-[5px] ">
                    <div className=" flex flex-row gap-2 border-b border-solid border-[hsla(0,0%,96%,.26)]">

                        <div className="mx-4 self-center py-3 text-white text-[1rem] ">$ROMI</div>
                    </div>
                    <div className="mx-4 py-4 flex flex-col gap-[0.4rem] ">
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Price</div>
                            <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">$0.00</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Wallet</div>
                            <div className="text-white ">... $ZLP ($...)</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Staked</div>
                            <div className="text-white ">... $ZLP ($...)</div>
                        </div>


                    </div>
                    <div className="border-b border-solid border-[hsla(0,0%,96%,.26)]" />
                    <div className="mx-4 py-4 flex flex-col gap-[0.4rem] ">
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">APR</div>
                            <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">...%</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Rewards</div>
                            <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">$...</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Multiplier Points APR</div>
                            <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">100.00%</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Boost Percentage</div>
                            <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">...%</div>
                        </div>


                    </div>
                    <div className="border-b border-solid border-[hsla(0,0%,96%,.26)]" />
                    <div className="mx-4 py-4 flex flex-col gap-[0.4rem] ">

                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Total Staked</div>
                            <div className="text-white ">0 $ZLP ($...)</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Staked</div>
                            <div className="text-white ">10,000 $ZLP ($10)</div>
                        </div>


                    </div>
                    <div className="border-b border-solid border-[hsla(0,0%,96%,.26)]" />
                    <button className="bg-[#3eb489] hover:bg-[#106d44]  mx-4 my-4 self-start
                     py-[0.4rem] px-4 rounded-sm" ><div className=" text-center font-[400] text-white text-[0.9rem] text-s">Buy $ZLP</div></button>




                </div>
                <div className="flex w-[600px] flex-col gap-0 bg-[#151515] shadow-lg    border border-solid border-[hsla(0,0%,96%,.26)] rounded-[5px] ">
                    <div className=" flex flex-row gap-2 border-b border-solid border-[hsla(0,0%,96%,.26)]">

                        <div className="mx-4 self-center py-3 text-white text-[1rem] ">$ROMI</div>
                    </div>
                    <div className="mx-4 py-4 flex flex-col gap-[0.4rem] ">
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">ETH (WETH)</div>
                            <div className="text-white">... ($...)</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Wallet</div>
                            <div className="text-white ">... ($...)</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Escrowed $ZLP</div>
                            <div className="text-white ">... ($...)</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Multiplier Points</div>
                            <div className="text-white ">...</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Staked Multiplier Points</div>
                            <div className="text-white ">...</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Total</div>
                            <div className="text-white ">$...</div>
                        </div>



                    </div>

                    <div className="border-b mt-[144px] border-solid border-[hsla(0,0%,96%,.26)]" />
                    <button className="bg-[#3eb489] hover:bg-[#106d44] mx-4 my-4 self-start py-[0.4rem] px-4 rounded-sm" ><div className=" text-center font-[400] text-white text-[0.9rem] text-s">Connect Wallet</div></button>




                </div>
            </div>

            <div className="flex gap-4">
                <div className="flex w-[600px]  flex-col gap-0 bg-[#151515] h-full shadow-lg    border border-solid border-[hsla(0,0%,96%,.26)] rounded-[5px] ">
                    <div className=" flex flex-row gap-2 border-b border-solid border-[hsla(0,0%,96%,.26)]">

                        <div className="mx-4 self-center py-3 text-white text-[1rem] ">$ZLP (Ethereum)</div>
                    </div>
                    <div className="mx-4 py-4 flex flex-col gap-[0.4rem] ">
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Price</div>
                            <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">$0.00</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Wallet</div>
                            <div className="text-white ">... $ZLP ($...)</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Staked</div>
                            <div className="text-white ">... $ZLP ($...)</div>
                        </div>


                    </div>
                    <div className="border-b border-solid border-[hsla(0,0%,96%,.26)]" />
                    <div className="mx-4 py-4 flex flex-col gap-[0.4rem] ">
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">APR</div>
                            <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">...%</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Rewards</div>
                            <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">$...</div>
                        </div>



                    </div>
                    <div className="border-b border-solid border-[hsla(0,0%,96%,.26)]" />
                    <div className="mx-4 py-4 flex flex-col gap-[0.4rem] ">

                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Total Staked</div>
                            <div className="text-white ">... $ZLP ($...)</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Total Supply</div>
                            <div className="text-white ">... $ZLP ($...)</div>
                        </div>


                    </div>
                    <div className="border-b border-solid border-[hsla(0,0%,96%,.26)]" />
                    <div className="flex flex-row">
                        <button className="bg-[#3eb489] hover:bg-[#106d44]  mx-4 my-4 self-start py-[0.4rem] px-4 rounded-sm" ><div className=" text-center font-[400] text-white text-[0.9rem] text-s">Buy $ZLP</div></button>
                        <button className="bg-[#3eb489] hover:bg-[#106d44]  mx-1 my-4 self-start py-[0.4rem] px-4 rounded-sm" ><div className=" text-center font-[400] text-white text-[0.9rem] text-s">Sell $ZLP</div></button>
                    </div>




                </div>
                <div className="flex w-[600px] h-full flex-col gap-0 bg-[#151515] shadow-lg    border border-solid border-[hsla(0,0%,96%,.26)] rounded-[5px] ">
                    <div className=" flex flex-row gap-2 border-b border-solid border-[hsla(0,0%,96%,.26)]">

                        <div className="mx-4 self-center py-3 text-white text-[1rem] ">Escrowed $ROMI</div>
                    </div>
                    <div className="mx-4 py-4 flex flex-col gap-[0.4rem] ">
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Price</div>
                            <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">$0.00</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Wallet</div>
                            <div className="text-white ">... esZOMI ($...)</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Staked</div>
                            <div className="text-white ">... esZOMI ($...)</div>
                        </div>


                    </div>
                    <div className="border-b border-solid border-[hsla(0,0%,96%,.26)]" />
                    <div className="mx-4 py-4 flex flex-col gap-[0.4rem] ">
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">APR</div>
                            <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">...%</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Multiplier Points APR</div>
                            <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">100.00%</div>
                        </div>




                    </div>
                    <div className="border-b border-solid border-[hsla(0,0%,96%,.26)]" />
                    <div className="mx-4  py-4 flex flex-col gap-[0.4rem] ">

                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Total Staked</div>
                            <div className="text-white ">... esROMI ($...)</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Total Supply</div>
                            <div className="text-white ">1,023,379 esZOMI ($1,049)</div>
                        </div>


                    </div>
                    <div className="border-b border-solid border-[hsla(0,0%,96%,.26)]" />
                    <div className="flex flex-row">
                        <button className="bg-[#3eb489] hover:bg-[#106d44]  mx-4 my-4 self-start py-[0.4rem] px-4 rounded-sm" ><div className=" text-center font-[400] text-white text-[0.9rem] text-s">Buy $ZLP</div></button>
                        <button className="bg-[#3eb489] hover:bg-[#106d44] mx-1 my-4 self-start py-[0.4rem] px-4 rounded-sm" ><div className=" text-center font-[400] text-white text-[0.9rem] text-s">Sell $ZLP</div></button>
                    </div>




                </div>

            </div>
            <div className="flex flex-col">
                <div className="flex flex-row gap-2">
                    <div className="text-white text-4xl font-[630]">Vest</div>

                </div>
                <div className=" mt-2  text-[1rem] text-[#b7b7bd] max-w-md  leading-[1.3rem] font-[400] ">
                    Convert esZOMI tokens to $ROMI tokens.
                    <br />
                    Please read the vesting details before using the vaults.
                </div>

            </div>
            <div className="flex gap-4">
                <div className="flex w-[600px] flex-col gap-0 bg-[#151515] shadow-lg    border border-solid border-[hsla(0,0%,96%,.26)] rounded-[5px] ">
                    <div className=" flex flex-row gap-2 border-b border-solid border-[hsla(0,0%,96%,.26)]">

                        <div className="mx-4 self-center py-3 text-white text-[1rem] ">$ROMI Vault</div>
                    </div>
                    <div className="mx-4 py-4 flex flex-col gap-[0.4rem] ">
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Staked Tokens</div>
                            <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">...</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Reserved for Vesting</div>
                            <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">0.00 / ...</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Vesting Status</div>
                            <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">0.0000 / 0.0000</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Claimable</div>
                            <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">0.0000 $ROMI</div>
                        </div>


                    </div>
                    <div className="border-b border-solid border-[hsla(0,0%,96%,.26)]" />
                    <div className="flex flex-row">
                        <button className="bg-[#3eb489] hover:bg-[#106d44] mx-4 my-4 self-start py-[0.4rem] px-4 rounded-sm" ><div className=" text-center font-[400] text-white text-[0.9rem] text-s">Connect Wallet</div></button>

                    </div>


                </div>
                <div className="flex w-[600px] flex-col gap-0 bg-[#151515] shadow-lg    border border-solid border-[hsla(0,0%,96%,.26)] rounded-[5px] ">
                    <div className=" flex flex-row gap-2 border-b border-solid border-[hsla(0,0%,96%,.26)]">

                        <div className="mx-4 self-center py-3 text-white text-[1rem] ">$RLP Vault</div>
                    </div>
                    <div className="mx-4 py-4 flex flex-col gap-[0.4rem] ">
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Staked Tokens</div>
                            <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">...</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Reserved for Vesting</div>
                            <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">0.00 / ...</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Vesting Status</div>
                            <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">0.0000 / 0.0000</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-[#b7b7bd]">Claimable</div>
                            <div className="text-white underline decoration-dashed decoration-1 underline-offset-2 decoration-[hsla(0,0%,100%,.6)]">0.0000 $ROMI</div>
                        </div>


                    </div>
                    <div className="border-b border-solid border-[hsla(0,0%,96%,.26)]" />
                    <div className="flex flex-row">
                        <button className="bg-[#3eb489] hover:bg-[#106d44]  mx-4 my-4 self-start py-[0.4rem] px-4 rounded-sm" ><div className=" text-center font-[400] text-white text-[0.9rem] text-s">Connect Wallet</div></button>

                    </div>


                </div>
                
            </div>




        </div>
    )
}