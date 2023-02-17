import '../globals.css'
import Link from 'next/link'
import {AiOutlineShoppingCart} from 'react-icons/ai'

export default function Navbar(){
    return(
        <div>
        <header className='navbar'>
            <Link href={"/"}>
                <h1>RUFZEN</h1>
            </Link>
            <ul className='nav'>
                <input className='nav-search' placeholder='SEARCH' type={'text'}></input>
                <li className='nav-items'>
                    <Link href={"/"}>
                        HOME
                    </Link>
                </li>
                <li className='nav-items'>
                    <Link href={"/Shop"}>
                        SHOP
                    </Link>
                </li>
                <li className='nav-items'>
                    <Link href={"/About"}>
                        ABOUT US
                    </Link>
                </li>
                <li className='nav-items'> 
                    <Link href={"/Cart"}>
                    <AiOutlineShoppingCart size={17}/>
                    </Link>
                </li>
                <Link href={"/Signup"}>
                <button className='signupbtn'>SIGN UP</button>
                </Link>
            </ul>
        </header>
        <footer>
            <div className='main-footer'>

            </div>
        </footer>
        </div>
    )
}