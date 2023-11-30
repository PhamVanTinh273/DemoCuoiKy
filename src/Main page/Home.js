import './Home.css'
import logo from './img/tải xuống.jpg';
import mon1 from './img/mon 1.png';
import mon2 from './img/mon2.png';
import mon3 from './img/mon3.png';
import oder from './img/order.png';
import giaohang from './img/giaohang.png';
import ship from './img/ship.png';
import m1 from './img/m1.png';
import m2 from './img/m2.png';
import m3 from './img/m3.png';
import me3 from './img/me3.png';
import me1 from './img/me1.png';
import me2 from './img/me2.png';
import be from './img/image-ngam-nhin-100-anh-be-gai-cute-dang-yeu-nhu-thien-than-167755603299485.jpg';
import mew from './img/New_Logo.webp';
function Home(){
    return(
        <div>
            <div className="navabar">
                <div className='logo'>
                    <img src={mew} alt="Logo" />
                </div>

                <ul className='navar'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Menu</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-cart-shopping"></i>
                <div className='sign'>
                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                <div className='signin'>Sign in</div>
            </div>
        </div>
        <div>
            <div className='content'>
                <div className='slide'>
                    <div className='slide-text'>
                        <div className='largeletters'>
                            Be The Fastest In <br></br> 
                            Delivery Your Food
                        </div>
                        <div className='minuscule'>
                            Lorem ipsum dolor sit amet, consectetur <br></br>
                            adipiscing elit ut aliquam, purus sit amet
                        </div>

                    </div>
                    <div className='slide-img'>
                        <div className='box box-a'><img src={mon1} alt="mon1" /></div>
                        <div className='box box-b'><img src={mon2} alt="mon2" /></div>
                        <div className='box box-c'><img src={mon3} alt="mon3" /></div>
                        

                    </div>
                    <div className='round'>
                        <div className='box box-d'></div>
                        <div className='box box-g'></div>
                        <div className='box box-h'></div>
                        <div className='box box-e'></div>
                    </div>
                </div>
                <div className='text-group1'>
                    <div className='text-room'>
                        <div className='textgroup1'>How It Works</div>
                        <div className='textgroup2'>What We Serve</div>
                        <div className='textgroup3'>Product Quality Is Our Priority, And Always Guarantees <br></br>
                        Halal And SaFety Until It Is In Your Hands. </div>
                    </div>

                </div>
                <div className='service'>
                    <div className='service-group'>
                        <div className='serviceroom1'>
                            <div className='service-img'>
                            <img src={oder} alt="Logo" />
                            </div>
                            <div className='service-text1'>Easy To Oder</div>
                            <div className='service-text2'>You only order through <br></br> the app</div>
                        </div>
                        <div className='serviceroom2'>
                        <div className='service-img'>
                            <img src={giaohang} alt="Logo" />
                            </div>
                            <div className='service-text1'>Easy To Oder</div>
                            <div className='service-text2'>You only order through <br></br> the app</div>
                        </div>
                        <div className='serviceroom3'>
                        <div className='service-img'>
                            <img src={ship} alt="Logo" />
                            </div>
                            <div className='service-text1'>Easy To Oder</div>
                            <div className='service-text2'>You only order through <br></br> the app</div>
                            
                        </div>

                    </div>
                </div>
                <div className='text-group1'>
                    <div className='text-room'>
                        <div className='textgroup2'>Our Popular Menu</div>
                        <div className='textgroup3'>Lorem ipsum dolor sit amet, consectetur <br></br>
                        adipiscing elit ut aliquam </div>
                    </div>

                </div>




                <div className='service2'>
                    <div className='service2-group'>
                        <div className='serviceroom4'>
                            <i class="fa-solid fa-heart"></i>
                            <div className='service2-img'>
                                <img src={m1} alt="Logo" />
                            </div>
                            <div className='servicevuong'>
                                <div className='service2-text'>Mie Ramen</div>
                                <div className='service2-text1'>lorem ispum</div>
                                    
                            
                                <div className='buy'>
                                    <div className='price'>$22.5</div>
                                    <div className='cart'><i class="fa-solid fa-cart-shopping"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className='serviceroom5'>
                        <div className='serviceroom4'>
                            <i class="fa-solid fa-heart"></i>
                            <div className='service2-img1'>
                                <img src={m2} alt="Logo" />
                            </div>
                            <div className='servicevuong'>
                                <div className='service2-text'>Mie Ramen</div>
                                <div className='service2-text1'>lorem ispum</div>
                                    
                            
                                <div className='buy'>
                                    <div className='price'>$17.7</div>
                                    <div className='cart'><i class="fa-solid fa-cart-shopping"></i></div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='serviceroom6'>
                        <div className='serviceroom4'>
                            <i class="fa-solid fa-heart"></i>
                            <div className='service2-img1'>
                                <img src={m3} alt="Logo" />
                            </div>
                            <div className='servicevuong'>
                                <div className='service2-text'>Mie Ramen</div>
                                <div className='service2-text1'>lorem ispum</div>
                                    
                            
                                <div className='buy'>
                                    <div className='price'>$13.5</div>
                                    <div className='cart'><i class="fa-solid fa-cart-shopping"></i></div>
                                </div>
                            </div>
                        </div>
                        </div>


                    </div>

                </div>



                <div className='button'> More menu</div>




                <div className='Evaluate'>
                    <div className='Evaluate-img'>
                        <div className='evaluate-img1'>
                            <img src={me3} alt="Logo" />
                        </div>
                        <div className='evaluate-img2'>
                            <div className='evaluate-img21'>
                                <img src={me1} alt="" />
                            </div>
                            <div className='evaluate-img22'>
                                <img src={me2} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className='Evalute-people'>
                        <div className='evalute-text'>
                            <div className='evalute-text1'>What The Say</div>
                            <div className='evalute-text2'>What Our Customers say <br></br> About Us</div>
                            
                        </div>
                        <div className='evalute-card'>
                            <div className='evalute-avatar'>
                                <div className='evalute-avatar1'>
                                 <img className='anhbe' src={be} alt="Logo" />
                                </div>
                                <div className='evalute-avatar2'>
                                    <div className='elalute-avatar-text'>Nauva Siliba</div>
                                    <div className='elalute-avatar-star'>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='evalute-tec'>
                                "lorem ipsum dolor sit amet, consectetur<br></br>
                                sdipiscing elit ut aliquam, purus sit amet luchtus<br></br> venenatls"
                            </div>
                        </div>


                    </div>


                    


                </div>

                <div className='img-sign'>
                        <div className='img-signtext'>join our member and get <br></br> discount up to 50%</div>
                        <div className='img-signbutton'>Sign in</div>
                </div>


                <div className='footer'>
                    <div className='footer-group'>
                        <div className='footer-room1'>
                            <div className='footer-room-logo'>
                            <img className='mew' src={mew} alt="Logo" />
                            </div>
                            <div className='footer-room-text'>Japan Semangka Raya, Telaga<br></br>
                            Murni, Cikarang Barat, Kab, Bekasi</div>
                            <div className='footer-room-logoth'>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-twitter"></i>
                            </div>
                        </div>
                        <div className='footer-room2'>
                            <div className='footer-roomtext1' >Company</div>
                            <div className='footer-roomtext' >About Us</div>
                            <div className='footer-roomtext' >Career</div>
                            <div className='footer-roomtext' >How It Work</div>
                        </div>
                        <div className='footer-room3'>
                        <div className='footer-roomtext1' >Policy</div>
                            <div className='footer-roomtext' >FAQ</div>
                            <div className='footer-roomtext' >Privacy</div>
                            <div className='footer-roomtext' >Shipping</div>
                        </div>
                        <div className='footer-room4'>
                        <div className='footer-roomtext1' >Get In Touch</div>
                            <div className='footer-roomtext' >+62 896 7311 2766</div>
                            <div className='footer-roomtext' >food@example.com</div>
                            
                        </div>
                    </div>
                </div>




            </div>
        </div>
        </div>
        
    )
}
export default Home