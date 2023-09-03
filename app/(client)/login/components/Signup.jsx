import React from 'react'
import { FaMicrosoft ,FaGoogle} from 'react-icons/fa';
const Signup = () => {
  return (
    <>
      <form action="#" class="sign-up-form">
            <h2 class="title mt-7">Sign up</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input id="name" type="text" placeholder="Full Name" />
            </div>
            <div class="input-field">
              <i  class="fas fa-envelope"></i>
              <input id="email" type="email" placeholder="Email" />
            </div>
            <div class="input-field">
              <i class="fas fa-phone-alt"></i>
              <input id="number" type="tel" placeholder="Number" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input id="password" type="password" placeholder="Password" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input id="conformPassword" type="password" placeholder="Conform Password" />
            </div>
            <div class="input-field-1">
              <label class="container1">
                <input id="checkbox1" type="checkbox" checked />
                <span class="checkmark"></span>
              </label>
              <span><a id="terms">Terms & Condition</a></span>
            </div>
            <input id="submitbtns" type="submit" class="btns" value="Sign up" />
            <p class="social-text">Or Sign up with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
              <FaGoogle />
              </a>

              <a href="#" class="social-icon">
              <FaMicrosoft />
              </a>
            </div>
          </form>
    </>
  )
}

export default Signup
