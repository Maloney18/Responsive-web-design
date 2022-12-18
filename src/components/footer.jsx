import './footer.css'

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer-items">
                <div className="foot-img-cont">
                    <img src="images/image-retro-pcs.jpg" alt="" className="foot-img" />
                </div>
                <div className="foot-right-cont">
                    <p className="footer-number">01</p>
                    <p className="bolder-p-tag">Reviving Retro PCs</p>
                    <p className='normal-p'>What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>
            <div className="footer-items">
                <div className="foot-img-cont">
                    <img src="images/image-top-laptops.jpg" alt="" className="foot-img" />
                </div>
                <div className="foot-right-cont">
                    <p className="footer-number">02</p>
                    <p className="bolder-p-tag">Top 10 Laptops of 2022</p>
                    <p className='normal-p'>Our best picks for various needs and budgets.</p>
                </div>
            </div>
            <div className="footer-items">
                <div className="foot-img-cont">
                    <img src="images/image-gaming-growth.jpg" alt="" className="foot-img" />
                </div>
                <div className="foot-right-cont">
                    <p className="footer-number">03</p>
                    <p className="bolder-p-tag">The Growth of Gaming</p>
                    <p className='normal-p'>How the pandemic has sparked fresh opportunities.</p>
                </div>
            </div>
        </section>
    )
}

export default Footer;