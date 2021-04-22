const ParentElement = (props) => {
    return (
        //Fælden - Sibling elementer skal have en et parent element som enkapsulere den.
        <>
            <ChildOne title={props.title} />
            <ChildTwo title={props.title} />
        </>
    )
}

const ChildOne = (props) => {
    return (
        <h2>
            Child one: {props.title}
        </h2>
    )
}

const ChildTwo = (props) => {
    return (
        <h2> ChildTwo: {props.title}</h2>
    )
}

ReactDOM.render(<ParentElement title="This is a shared title" />, document.querySelector("#app"))