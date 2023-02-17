import '../globals.css'
import Link from 'next/link'

export default function Signup(){

    return(
        <div className='maindiv-signup'>
            <form className='signup'>
                <h4>CREATE ACCOUNT</h4>
                <input className='input' required type={'text'} placeholder={'FIRST NAME*'}></input>
                <input className='input' required type={'text'} placeholder={'LAST NAME*'}></input>
                <input className='input' required type={'email'} placeholder={'EMAIL*'}></input>
                <input className='input' required type={'tel'} placeholder={'MOBILE NO.*'}></input>
                <input className='input' required type={'text'} placeholder={'ADDRESS*'}></input>
                <input className='input' required type={'tel'} placeholder={'PINCODE*'}></input>
                <input className='input' required type={'password'} placeholder={'PASSWORD*'}></input>
                <input className='input' required type={'password'} placeholder={'CONFIRM PASSWORD*'}></input>
                <div className='radios'>
                    <input className='gender' type="radio" name="gender" placeholder='Male' value="male"/>MALE
                    <input className='gender' type="radio" name="gender" value="female"/>FEMALE
                    <input className='gender' type="radio" name="gender" value="other"/>OTHER
                </div>
                <button className='signupbtn1'>SIGNUP</button>
            </form>
            {/* <form className='signin'>
                <h4>SIGN IN</h4>
                <input className='input' required type={'email'} placeholder={'EMAIL*'}></input>
                <input className='input' required type={'password'} placeholder={'PASSWORD*'}></input>
                <button className='signupbtn1'>LOGIN</button>
            </form> */}
        </div>
    )
}