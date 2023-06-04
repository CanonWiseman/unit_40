import React, {useState, useEffect} from 'react';
import MadlibsForm from './MadlibsForm';
import Story from './Story';

let completeStory = false;

const Madlibs = () =>{
    // sets story data in state 
    const [storyData, setStoryData] = useState({})
    
    //function for creating story, will trigger re-render and display story
    //sets complete story to true
    function createStory(data){
        completeStory = true
        setStoryData(data);
    }

    //function for resetting story, sets story data to empty object to re-render and display form
    //sets complete story to false
    function resetStory(){
        completeStory = false
        setStoryData({})
    }
    
    return(
        <div>
            <h1>Madlibs!!</h1>
            {completeStory ? <Story data={storyData} resetStory={resetStory}/>: <MadlibsForm createStory={createStory}/>}
            
        </div>
    )
    
}

export default Madlibs;