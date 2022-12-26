import './main.css'

const Main = () => {
    return (
        <section className="hero-section">
            <div className="image-part">
                <div className="image-cont">
                </div>

                <div className="hero-bottom">
                    <p className='hero-text'>The Bright Future of Web 3.0?</p>

                    <div className="know-more">
                        <p>
                            We dive into the next evolution of the web that claims to put the power of the platform back into the hands of the people. But is it really fulfilling its promise?
                        </p>
                        <button className="read-more">
                            READ MORE
                        </button>
                    </div>
                </div>
            </div>

            <div className="no-image-part">
                <h2 className='new'>New</h2> 

                <div className="pack-new-word">
                    <div className='new-words'>
                        <p className='h3'>Hydrogen VS Electric Cars</p>
                        <p>Will Hydrogen-fueled cars ever catch up to EVs?</p>
                    </div>
                    <div className='new-words border'>
                        <p className='h3'>The Downsides of AI Artistry</p>
                        <p>What are the possible adverse effects of on-demand AI image generation?</p>
                    </div>
                    <div className='new-words'>
                        <p className='h3'>Is VC Funding Drying Up?</p>
                        <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Main;