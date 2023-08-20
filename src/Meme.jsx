import { useState, useEffect } from 'react'

const Meme = () => {
    const [formData, setFormData] = useState({
        topMessage: '', 
        bottomMessage:'',
        url: 'http://i.imgflip.com/1bij.jpg'
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

    const newMeme = (event) => {
        const randomNumber = Math.floor(Math.random() * urlData.length)
        event.preventDefault()
        setFormData(prevData => ({
            ...prevData,
            url: urlData[randomNumber].url
        }))

        console.log(formData.topMessage)
        console.log(formData.bottomMessage)
    }

    // data.data.memes[0].url

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setUrlData(data.data.memes)
        }
        fetchData()
    }, [])




    return (
        <>
            <form className="form" onSubmit={newMeme}>
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
                <div className='dislay-image'>
                    <img src={formData.url}/>
                </div>
            </form>
        </>
    )
}

export default Meme;