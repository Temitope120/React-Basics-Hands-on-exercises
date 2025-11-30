import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row border-transparent rounded-lg md:rounded-4xl">
                <div className="bg-[#285CC4] rounded-md w-full md:w-1/2 h-auto">
                    <img className="rounded-tl-md rounded-tr-md md:rounded-none object-cover w-full h-full" src="https://images.unsplash.com/photo-1640959473355-d44e69cf809b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxvZ2ludmZvcm0lMjAlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" alt="login illustration iconcs" />
                </div>

                <div className="bg-white w-full md:w-1/2 flex flex-col md:grow-2 justify-center items-center px-3 md:px-8 py-5 text-center">
                    <p className="text-dark text-3xl font-semibold">Welcome Back!</p>
                    <p className="text-gray-500 py-4 px-8 border-2"> Build your systems effortlessly with our powerful component library.</p>
                    <form className="pb-10 border-2">
                        <input type="email" name="email" placeholder="johnDoe@mail.com" className="!border-2 !border-[#EDEDED] bg-[#F9FAFF] !rounded-md !outline-none w-full px-4 py-3 mb-4" />
                        <input type="password" name="password" placeholder="password" className="!border-2 !border-[#EDEDED] bg-[#F9FAFF] !rounded-md !outline-none w-full px-4 py-3 mb-4" />
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
