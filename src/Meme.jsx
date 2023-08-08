import './Meme.css'

const Meme = () => {
    return (
        <>
            <form className="form">
                <div className="input-form">
                    <input type="text" className="input-text"></input>
                    <input type="text" className="input-text"></input>
                </div>
                <button>Get a new meme image</button>
                <div className="display-image">

                </div>
            </form>
        </>
    )
}

export default Meme;