import { useEffect, useState } from 'react'

interface ResponseStructure {
    id: number,
    username: string,
    email: string,

}

const SearchFilter = () => {
    const [userData, setUserData] = useState<ResponseStructure[]>([]);

    const [filteredUserData, setFilteredUserData] = useState<ResponseStructure[]>([]);

    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        fetch('https://fakestoreapi.com/users').then(res => res.json()).then(
            userData => {
                setUserData(userData);
                setFilteredUserData(userData);
            })
    }, [])


    useEffect(()=> {
        const result = userData.filter((item) => item.username.toLowerCase().includes(inputValue.toLowerCase()))

        setFilteredUserData(result);
    }, [inputValue, userData])



    return (
        <> 
            <h1 className='font-bold text-lg pt-8'> Search by Username </h1>
            <div className='mt-10'>
                <input onChange={e => setInputValue(e.target.value)} type="text" placeholder='Search for a user' />
            </div>

            {filteredUserData && filteredUserData.map((item) => (
                <p key={item.id}> {item.username}</p>
            ))}
        </>
    )
}

export default SearchFilter
