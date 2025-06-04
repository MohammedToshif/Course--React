
// video - 28 - (Portals)
// some work in index.html (portal div)

// react portals provide a way to render children to a dom node that exists the dom hierarchy of the parent component

import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
    return ReactDOM.createPortal(
        <h1>        
            Portals Demo
        </h1>
        , document.getElementById('portal-root')    // 2nd parameter - 1. specify the root element (index.html)
    )
}

export default PortalDemo

//note:  ReactDOM.createPortal = 1st parameter (JSX) 2nd parameter (root)


