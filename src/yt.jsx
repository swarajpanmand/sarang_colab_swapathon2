import './yt.css'

export default function Cq() {
    return (
        <>
            <div className='navbar'>
                <div className='logo'>
                    <div className='icons navicon'>
                        <i class="fa-brands fa-google"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
                <div className='title'>Free Shiping This Week Order Over$555</div>
                <div >
                    <ul className='nav-links'>
                        <li><i class="fa-solid fa-globe"></i>IN-English</li>
                        <li><i class="fa-solid fa-location-dot"></i>Find Store</li>
                    </ul>
                </div>
            </div>

            <div className='sub-nav'>
                <h1 className='Hero-title'>ANON</h1>
                <div className='input'>
                    <input type='text' className='Product-input' placeholder='Enter Your Product Name'></input>
                    <i class="fa fa-magnifying-glass"></i>
                </div>
                <div className='icons'>
                    <i class="fa-regular fa-user"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-bag-shopping"></i>
                </div>
            </div>

            <div className='Quickbar'>

                <ul className='links'>
                    <li>HOME</li>
                    <li>CATEGORIES</li>
                    <li>MEN'S</li>
                    <li>WOMEN'S</li>
                    <li>JWELERY</li>
                    <li>PERFUME</li>
                    <li>BLOG</li>
                    <li>HOT OFFERS</li>
                </ul>

            </div>

            <div className='Image'>
                <div className='ImageTrack'>
                    <img src="https://image.hm.com/content/dam/global_campaigns/season_01/women/startpage-assets/wk16/WS21J-16x9-women-startpage-wk16.jpg"></img>
                </div>
            </div >

        </>

    );
};
