/*

    - Class Component is defined using JavaScript class syntax.
    - Class Component should always inherit the React.Component Class.
    - Class Component should always implement render method of React.Component class.
    - render method should return the JSX to be rendered on the UI.
    - It returns only one parent native or custom component not two or more sibling native or custom components.
    - If there are multiple sibling native or custom components then those should be wrapped inside empty tag ( e.g. <></> ) or a single native or custom component.

*/


import React from "react";
import { Text } from "react-native";

class ClassComponent extends React.Component {

    render () {
        return <>
            <Text>This is a Class component.</Text>
        </>
    }
}

export default ClassComponent