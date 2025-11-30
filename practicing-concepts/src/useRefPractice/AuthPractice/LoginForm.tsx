import { useState} from "react";
import { FcGoogle } from "react-icons/fc";
import { PiEyeClosedLight, PiEyeLight } from "react-icons/pi";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <div className="flex flex-col md:flex-row rounded-lg md:rounded-2xl">
                <div className="bg-[#285CC4] rounded-lg rounded-tr-none md:rounded-2xl w-full md:w-1/2 h-auto">
                    <img className="rounded-tl-md rounded-tr-md rounded-br-none rounded-bl-none md:rounded-tl-2xl object-cover w-full h-full" src="https://images.unsplash.com/photo-1714655439633-2dddeecd0694?q=80&w=3987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="login illustration iconcs" />
                </div>

                <div className="bg-white w-full md:w-1/2 flex flex-col md:grow-2 rounded-lg md:rounded-2xl justify-center items-center px-3 md:px-8 py-5 text-center">
                    <p className="text-dark text-3xl font-semibold pt-4 md:pt-8">Welcome Back!</p>
                    <p className="text-gray-500 py-4 px-8 text-sm md:text-base"> Build your systems effortlessly with our powerful component library.</p>
                    <form className="pb-10 w-[80%]">
                        <input type="email" name="email" placeholder="johnDoe@mail.com" className="!border-2 !border-[#EDEDED] bg-[#F9FAFF] !rounded-md !outline-none w-full px-4 py-3 mb-4" />
                        <div className="relative w-full mb-4">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="password"
                                className="!border-2 !border-[#EDEDED] bg-[#F9FAFF] !rounded-md !outline-none w-full px-4 py-3"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/4 -translate-y-1/2 text-gray-500 !border-none !outline-none"
                            >
                                {showPassword ? <PiEyeLight size={20} /> : <PiEyeClosedLight size={20} />}
                            </button>
                        </div>
                        <button type="submit" className="!bg-[#646cff] !text-white p-3 font-semibold rounded-4xl w-full">Login</button>
                        <br />

                        <div className="!bg-[#F3F5F7] !text-dark font-semibold p-3 cursor-pointer rounded-4xl w-full flex items-center gap-4 justify-center">

                            <FcGoogle />
                            <span> Sign in With Google</span>
                        </div>
                    </form>
                    <div className="pt-10">
                        <p>Don't have an account? <a href="#" className="cursor-pointer text-[#646cff] font-semibold">Sign Up</a></p>
                    </div>

                </div>
            </div>
        </>

    )
}

export default LoginForm
