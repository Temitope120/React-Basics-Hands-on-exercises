import { useState } from "react";

interface FormEntries {
    firstname: string,
    lastname: string,
    email: string,
}

const Form = () => {
    const [entries, setEntries] = useState<FormEntries>({});

    function handleFormSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
       const formData = new FormData(e.currentTarget);
       const data = Object.fromEntries(formData.entries()) as unknown as FormEntries;
       setEntries(data);
    }
  return (
    <div className="mt-8">
      <form onSubmit={handleFormSubmit}>
        <h2> Form here</h2>
        <input name="firstname" type="text" placeholder='firstname here' /> <br />
        <input name="lastname" type="text" placeholder='lastname here' /> <br />
        <input name="email" type="email" placeholder='email here' /> <br />
        <button type="submit">Submit</button>
      </form>
      <h1> Input text should show here: {entries.firstname} {entries.lastname} { entries.email} </h1>
    </div>
  )
}

export default Form
