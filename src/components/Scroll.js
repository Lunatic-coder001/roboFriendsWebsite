import React from "react";

const Scroll=(props) =>{
    return (
        <div style={{overflow:'scroll',border:'5px solid black', height:'800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;

/*Want to return something, but it doesn't make sense, does it, if I go to Js?Scroll, it's not a self-closing component.It wraps components
 so how can we tell scroll to Hey, just render whatever is inside of you.Up to this point, Scroll can use children as a way to render its
 children.I can add styles but using double curly brackets that is, this is a JavaScript expression and within this I'm returning an object
  and this object can have Css Such as a property overflow WI, which is a success property, and this we can say Scroll again, a way to make
   the element scrollable*/