import {ECTeamCard} from "~/app/components/team_card";
import {CCTeamCard} from "~/app/components/team_card";


export default function Page() {
    return(
        <>
            <div className="bg-[#000000]">
                <div  className="w-full py-12 bg-fixed">
                    <div className=" mx-auto px-4 lg:px-8">
                        <p className="text-5xl text-center font-bold text-ieeeyellow">TEAM</p>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
                    <div>
                        <div className="mt-8 mb-16">
                            <p className="text-3xl text-center font-semibold text-ieeeyellow">Executive Committee</p>
                            <hr className="mt-1 border-ieeegray opacity-20"/>
                        </div>
                        <div className="flex flex-wrap gap-24 mx-auto justify-center">
                            <ECTeamCard/>
                            <ECTeamCard/>
                            <ECTeamCard/>
                            <ECTeamCard/>
                            <ECTeamCard/>
                            <ECTeamCard/>
                        </div>
                    </div>
                    <div>
                        <div className="mt-8 mb-16">
                            <p className="text-3xl text-center font-semibold text-ieeeyellow">Core Committee</p>
                            <hr className="mt-1 border-ieeegray opacity-20"/>
                        </div>
                        <div className="flex flex-wrap gap-16 mx-auto justify-center">
                            <CCTeamCard/>
                            <CCTeamCard/>
                            <CCTeamCard/>
                            <CCTeamCard/>
                            <CCTeamCard/>
                            <CCTeamCard/>
                            <CCTeamCard/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}