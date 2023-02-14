import React from 'react';

const SearchBox = ({searchfield,searchChange})=>{
    return (
        <div className='pa2'>
            <input type='search' 
                className='pa2 ba b--green bg-lightest-blue'
                placeholder='search robots' 
                onChange={searchChange}
            />
        </div>
        
    );
}

export default SearchBox;
//we are using destructuring here ({..}) --allows us to grab the props object and grab its properties.
//Any time the search box changes on change ,i'm going to run the fxn,i m going to call this fxn {onChange}
/*So we are saying everytime  the on change event is triggered,called the search function and if you remember the search fxn ,which is a 
prop,is on the search change fxn that is defined in the app that's how we communicate with the parent It triggers the event.The parent says
 help run this function and now this function.Gets read, but now that I have the value of the search input, I can now directly communicate 
 that search input to the robot's list.*/