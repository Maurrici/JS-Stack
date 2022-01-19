/*

    <If test={exp}>
        <span>...</span>
    </If>

*/

export default props => {

    const elseChild = props.children.filter( child => {
        return child.type && child.type.name === "Else";
    })[0];

    const ifChildren = props.children.filter( child => {
        return child !== elseChild;
    });

    if(props.test){
        return ifChildren;
    }else{
        return elseChild;
    }
}

export const Else = props => props.children;