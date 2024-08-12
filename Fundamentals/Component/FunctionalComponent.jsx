/*

    - Functional component is defined using the JavaScript function systax.
    - Functional component returns the JSX to be rendered on the UI.
    - It returns only one parent native or custom component not two or more sibling native or custom components.
    - If there are multiple sibling native or custom components then those should be wrapped inside empty tag ( e.g. <></> ) or a single native or custom component.

    - There are 3 ways to define functional component.
        1. Normal Function
        2. Anonymous Function
        3. Arrow Function

*/

import React from "react"
import { Text } from "react-native"

// Normal Function

function NormalFunction () {
    return <>
        <Text>This is a Normal Function Component.</Text>
    </>
}

// Anonymous Function

const AnonymousFunction = function () {
    return <>
        <Text>This is a Anonymous Function Component.</Text>
    </>
}

// Arrow Function

const ArrowFunction = () => {
    return <>
        <Text>This is a Arrow Function Component.</Text>
    </>
}


export default {
    NormalFunction,
    AnonymousFunction,
    ArrowFunction
}