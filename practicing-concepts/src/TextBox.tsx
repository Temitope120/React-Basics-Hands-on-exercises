import {useState} from 'react';


const TextBox = () => {
const [text, setText] = useState('');

    function updateText(e) {
        setText(e.target.value)
    }

  return (
    <div>
      <h1>
        {text}
      </h1>
      <form>
        <input type="text" placeholder='Enter anything here..' onChange={updateText} />
      </form>
    </div>
  )
}

export default TextBox
