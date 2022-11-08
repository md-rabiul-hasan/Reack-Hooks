import React, {useEffect, useLayoutEffect} from 'react'

const LayoutTutorial = () => {

    useEffect(() => {
        console.log("use effect call when page render")
    });

    useLayoutEffect(() => {
        console.log("layout effect call before use effect")
    });

    return (
        <div>LayoutTutorial</div>
    )
}

export default LayoutTutorial;
