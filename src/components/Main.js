import React from 'react'

export default function Main(){
    return(
        <div className='main'>    
            <div className='main-items'>    
                <img className="item-1" src="https://www.icloud.com/system/icloud.com/2413Project46/en-us/4f72d89d71e9abcc4e37c71fb77fe65b.svg" alt="logo"/>

                <h1 className="item-2">Sign in with Apple ID</h1>
        
                <input type="text" id="account_name_text_field" can-field="accountName" autocomplete="off" autocorrect="off" autocapitalize="off" aria-required="true" required="required" spellcheck="false" class="force-ltr form-textbox form-textbox-text " placeholder="Apple ID" aria-invalid="false" autofocus="" className='item-3'/>

                <div className="item-4">
                    <input type="checkbox" id="topping" name="topping" value="Paneer" /> Keep me signed in</div>
                
    
                <a className='item-5'>Forgotten your Apple ID or password?</a>
                 <a className='item-6'>Create Apple ID</a>
            </div>
        </div>
    )
}