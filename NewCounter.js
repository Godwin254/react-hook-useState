import React, {useState} from 'react'

function NewCounter(){

  const [items,setItem] = useState([{title: '',message: ''}])

  const addMessage = (e) =>{
    e.preventDefault();
    setItem([...items,{
      id: items.length,
      [e.target.name]: e.target.value,
      
    }])
  }

  
  return (
    <div>
        <input
          type='text'
          name='title'
          value={items.title}
          onChange={addMessage}
        />
        <textarea 
          name="message"
          value={items.message}
           onChange={addMessage}
        ></textarea>
        <button type='button' onClick={addMessage}>Save message</button> 

        <div className='display-text'>
          <ul>
            {
              items.map(item => (<li key={item.id}>{item.message}</li>) )
            }
          </ul>
      
        </div>

    </div>
  )
  
}


export default NewCounter;