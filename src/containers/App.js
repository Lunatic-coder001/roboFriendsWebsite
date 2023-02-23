import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll.js';



class  App extends Component {
    constructor( ) {
        super();
        this.state={
            robots: [],
            searchfield:'',

        }
    }
    /*Fetch is a method on the window object.Now it is a tool for us to make requests.To service and as you can
     see, this is a server that returns for us when we do / users, a list of users that we can use.
     And finally, you're wondering what if this was really slow?*/
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>  response.json())
        .then(users=> {this.setState({robots:users})});
    }

    onSearchChange=(event) =>{
        this.setState({ searchfield: event.target.value})    
    }
    
    //(robot not robots)
/*We have our app component that has two states.Robots and search field and because app owns the state, any component that has state uses 
the class syntax so they can use the constructor function to create this.state and this state is what changes in an app.It's what 
describes the app.Remember when I said the virtual dom is just a JavaScript object?The virtual dom is just an object that collects this 
entire state and react uses this state to render and pass them down as props to these components so that these components that are just 
pure functions can just render. We always just create a new array called filtered robots and we always pass that down.Does this need to 
be part of the state and right now? Not really, because we're just have a hardcoded robot.*/
    render(){
        const { robots,searchfield}= this.state;
        const filteredRobots=robots.filter(robots =>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ?
             <h1>Loading</h1> :
         (
                <div className='tc'>
                     <h1 className='f1'>RoboFriends</h1>
                     <SearchBox searchChange={this.onSearchChange}/>
                     <Scroll>
                        <CardList robots={filteredRobots}/>
                     </Scroll>
                      
                </div>
               
            );
        }
        
    }
   
    


export default App;
//state is declared inside the constructor and super which calls the constructor of component
//So a parent feeds state into a child component, and as soon as the child component component receives

/* A state, it's a property that child can never change that property.The parent just tells it what the state is and the child receives it
 as robots. And on search change, I want to say that every time the input changes, just like we did with dom manipulation, we get an event.
And within this event, I'm going to console log, this event. Created a function. And I want to any time this input changes to trigger
 console Dahlborg so we can pass this actually now I can say. */

 /* this state.And these robots, which is array, again, this is how we access state.Is going to use the filter filtering our way, we give
  it robots, and now our array will have to return a condition and the conditions are going to be robots.name And we're going to do some
  thing that we haven't seen before, which is to.Lower case, and this is a method that comes with all strengths and it just makes every
  thing lower case,and this is good for comparison.So we don't have to compare capitalized or lowercase.And if the name of robots, which 
  is now lowercase.Includes. it's pre-built into JavaScript if it includes the search field.And again, we want to do two lower case in case, well, in case we use capitals or lower case
  it works both ways and there it is.If the name of the robots in lowercase includes.And this does the comparison, if anything, in the 
  string includes two lower case, well then only return the robots that returns true to this.*/

  /* => The problem right now is that the value of this well, it's not referring to the app because the event happened in the input.The 
  value of this is well, the input and input doesn't have state robots.And this is a trick that you always forget.But just keep this in 
  mind as a rule of thumb.With anything that comes from react so constructor and render are pre-built and react, any time you make your 
  own methods on a component, use this syntax. So arrow fxn will make sure that its the app*/

