import React from "react"


export default function({children}:{
    children: React.ReactNode
}){
    return(
        <div>
            <div>
                Hello
            </div>
            {children}
        </div>
        
    )
}