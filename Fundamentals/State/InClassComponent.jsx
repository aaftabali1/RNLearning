/*

    - State is nothing but a data that is being remembered and held even after UI re-renders.
    - 

*/


import React from "react";
import { Button, Text } from "react-native";

class ClassComponentState extends React.Component {

    constructor () {
        super() // this is must
        
        // initializing the state
        this.state = {age: 23}
    }

    render () {
        return <>
            {/* using state inside Text Component */}
            <Text>{`My age is ${this.state.age}`}</Text>

            <Button 
                title="Increment Age by 1" 
                onPress={() => {
                    // updating the state
                    this.setState({
                        age: this.state.age + 1
                    })
                }} 
            />
        </>
    }

}

export default ClassComponentState