import { MdContentPasteSearch } from "react-icons/md";
import { LiaToggleOnSolid } from "react-icons/lia";
import { IconContext } from "react-icons";


export default function ReuseableCard() {
    return (
        <>
            <div className="mt-5 bg-slate-200 text-white w-80 border border-white py-3 px-5 rounded-xl shadow-sm">
                <div className="mb-5 py-2 flex gap-4 justify-center items-center">
                    <div className="bg-lime-100 p-3 rounded-md">
                        <IconContext.Provider
                            value={{ color: 'black', size: '30px', }}
                        >
                            <MdContentPasteSearch />

                        </IconContext.Provider>
                    </div>

                    <div className="text-left">
                        <p className=" font-semibold">
                            DevLens
                        </p>
                        <p className="text-sm md:text-md font-medium">Quickly inspect page layouts and visualize elements boundaries.</p>
                    </div>
                </div>

                <div className=" mt-3 flex justify-between flex-start items-center">
                    <button className="!p-pt border !m-0 !border-white !rounded-xl !bg-transparent !text-white">Remove</button>
                    <IconContext.Provider
                        value={{ color: 'red', size: '30px' }}
                    >
                        <div>
                            <LiaToggleOnSolid />

                        </div>
                    </IconContext.Provider>
                </div>
            </div>
        </>
    )
}