import { useState, useEffect } from 'react'
import './Meme.css'

const Meme = () => {
    const [formData, setFormData] = useState({
        topMessage: '', bottomMessage:''
    })

    const [urlData, setUrlData] = useState([])

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

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch("https://swapi.dev/api/people/1")
    //         const data = await res.json()
            
    //         console.log(data)
    //     }
    //     fetchData()
    // }, [])
    const fetchData = async() => {
        const res = await fetch("https://swapi.dev/api/people/1")
        const data = await res.json()
        return data
    }



    return (
        <>
            <form className="form" onSubmit={clickHandle}>
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
                <button>Get a new meme image</button>
                <div className="display-image">
                    <img src={urlData.url}/>
                </div>
            </form>
        </>
    )
}

export default Meme;