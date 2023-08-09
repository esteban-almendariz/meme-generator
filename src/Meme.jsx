import { useState } from 'react'
import './Meme.css'

const Meme = () => {
    const [formData, setFormData] = useState({
        topMessage: '', bottomMessage:''
    })

    const changeHandler = (event) => {
        console.log(event.target.value)
        setFormData(prevState => {
            return {
                    ...prevState,
                    [event.target.name]: event.target.value 
                 }})
    } 

    const clickHandle = (event) => {
        event.preventDefault()
        console.log(formData.topMessage)
        console.log(formData.bottomMessage)
    }

    return (
        <>
            <form className="form">
                <div className="input-form">
                    <input 
                        type="text" 
                        className="input-text" 
                        placeholder='Top Message'
                        onChange={changeHandler} 
                        name='topMessage'
                        value={formData.topMessage}
                    />
                    <input 
                        type="text" 
                        className="input-text" 
                        placeholder='Bottom Message'
                        onChange={changeHandler}
                        name='bottomMessage'
                        value={formData.bottomMessage}
                    />
                </div>
                <button onClick={clickHandle}>Get a new meme image</button>
                <div className="display-image">

                </div>
            </form>
        </>
    )
}

export default Meme;