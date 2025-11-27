
const LoginForm = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row border-transparent rounded-lg md:rounded-4xl">
                <div className="bg-[#285CC4] rounded-md w-1/2 h-auto">
                    <img className="rounded-tl-md rounded-tr-md md:rounded-none object-cover w-full h-full" src="https://images.unsplash.com/photo-1640959473355-d44e69cf809b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxvZ2ludmZvcm0lMjAlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" alt="login illustration icons" />
                </div>

                <div className="bg-white w-1/2 flex flex-col grow-2 justify-center items-center px-3 md:px-8 py-5 text-center">
                    <img className="w-[80px] h-[80px]" src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aWNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="logo" />
                    <p className="text-dark font-medium text-3xl">Hello Again!</p>
                    <p className="text-gray-500 py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae molestiae provident culpa.</p>
                    <form className="pb-10">
                        <input type="email" name="email" placeholder="johnDoe@mail.com" className="!border-2 !border-gray-500 bg-[#F9FAFF] !rounded-md !outline-none w-full mb-4" />
                        <input type="password" name="password" placeholder="password" className="!border-2 !border-gray-500 bg-[#F9FAFF] !rounded-md !outline-none w-full mb-4" />
                        <button type="submit" className="bg-primary w-full">Login</button>
                        <button type="submit" className="bg-primary w-full">Sign in With Google</button>
                    </form>
                    <div className="pt-10">
                        <p>Don't have an account yet? <a href="" className="cursor-pointer">Sign Up</a></p>
                    </div>

                </div>
            </div>
        </>

    )
}

export default LoginForm
