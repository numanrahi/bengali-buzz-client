import React from 'react';
import './Menu.css'

const Menu = () => {
    return (
        <div className='menu-cls'>
            <section className='text-center mt-3'>
                <div className='d-flex mx-auto justify-content-center align-items-center'>
                    <hr className='w-10 ' />
                    <div className='fs-4 mx-2 text-gold'>Random Dishes</div>
                    <hr className='w-10 ' />
                </div>
                <div className='fs-2 text-dance'>FROM OUR MENU</div>
            </section>
            <div className='row'>
                <div className='col-11 col-sm-6 p-4 d-flex'>
                    <img src="https://www.chefspencil.com/wp-content/uploads/Seekh-Kebab-960x960.jpg.webp" className='card-img' alt="" />
                    <div className='p-3'>
                        <div className='fs-3 d-flex justify-content-between'><span>Seekh Kebab</span> <span>$ 120</span></div>
                        <div className='fs-5'>Juicy Seekh Kebab, a delicious indulgence for meat lovers.</div>
                    </div>
                </div>
                <div className='col-11 col-sm-6 p-4 d-flex'>
                    <img src="https://www.dhakafoodster.com/wp-content/uploads/2021/06/Sultan%E2%80%99s-Diner-Mirpur-Kacchi-Biriyani-1.jpg" className='card-img' alt="" />
                    <div className='p-3d-flex justify-content-between'>
                        <div className='fs-3'><span>Kacchi Biryani</span> <span>$ 650</span></div>
                        <div className='fs-5'>Kacchi Biryani, an aromatic symphony of spices and tender meat.</div>
                    </div>
                </div>
                <div className='col-11 col-sm-6 p-4 d-flex'>
                    <img src="https://www.chefspencil.com/wp-content/uploads/Khichuri-960x960.jpg.webp" className='card-img' alt="" />
                    <div className='p-3'>
                        <div className='fs-3 d-flex justify-content-between'><span>Vuna Khichuri</span> <span>$ 150</span></div>
                        <div className='fs-5'>Vuna Khichuri, a comforting and hearty Bengali dish for any occasion.</div>
                    </div>
                </div>
                <div className='col-11 col-sm-6 p-4 d-flex'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0Ub1QU6ms0hfZ-4GTjpGS6JL7KiVUIq6JQ&usqp=CAU" className='card-img' alt="" />
                    <div className='p-3'>
                        <div className='fs-3 d-flex justify-content-between'><span>Morog Polao</span> <span>$ 250</span></div>
                        <div className='fs-5'>Morog Polao, a regal feast for chicken and rice lovers with a royal touch.</div>
                    </div>
                </div>
                <div className='col-11 col-sm-6 p-4 d-flex'>
                    <img src="https://www.chefspencil.com/wp-content/uploads/Screenshot-2021-05-24-at-19.15.48.jpg.webp" className='card-img' alt="" />
                    <div className='p-3'>
                        <div className='fs-3 d-flex justify-content-between'><span>Grill Chicken</span> <span>$ 360</span></div>
                        <div className='fs-5'>Grilled chicken with naan roti, a match made in heaven for a satisfying meal.</div>
                    </div>
                </div>
                <div className='col-11 col-sm-6 p-4 d-flex'>
                    <img src="https://www.chefspencil.com/wp-content/uploads/Haleem-960x960.jpg.webp" className='card-img' alt="" />
                    <div className='p-3'>
                        <div className='fs-3 d-flex justify-content-between'><span>Haleem</span> <span>$ 120</span></div>
                        <div className='fs-5'>Haleem, a slow-cooked stew of lentils and meat, a taste of the Indian subcontinent.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;