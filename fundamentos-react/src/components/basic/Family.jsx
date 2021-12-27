import React from "react";
import FamilyMember from "./FamilyMember";

export default (props) => {
    return(
        <div>
            {/*
                React.Children.map(props.children, child =>{
                    return React.cloneElement(child, {...props});
                })
            */
            }

            {
                props.children.map((child, i) =>{
                    return React.cloneElement(child, {...props, key: i})
                })
            }
        </div>
    );
}