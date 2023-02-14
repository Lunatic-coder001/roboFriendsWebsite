import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
     
    return (
    <div>
      {
      robots.map((user,i) => {
        return (<Card 
            key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}
            />
          );
        })
      } 
    </div>
    );
}

export default CardList;
//When working with react, the way the virtual dome works is it keeps track of what all these cards are, but without having something 
//called a Keyprop. If some of these cars get deleted, react won't know.Which ones which and we'll have to change the entire Dom versus 
//if you had a key prop and says, oh,this one gets removed, I can just remove this from the DOM.
//6) key prop should have something that doesn't change .for example ,index(or i in our case) could change if array items get moved. 
//so a better key in this case would be something uniqu like id. We can also put cardComponent inside div as it is js {}

/*const cardComponent = robots.map((user,i)=> {
        return (<Card 
            key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}
            />);
    })
    return (
    <div>
      
      {cardComponent}
    </div>
    )*/