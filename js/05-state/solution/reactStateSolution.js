const Element = () => {
    const [state, setState] = React.useState("TYPE HERE ---->");

    return (
        <div className="background" id="primary">
            {state}
            <input type="text" onInput={(e) => setState(() => e.target.value)}/>
        </div>
    )
}

ReactDOM.render(<Element />, document.querySelector("#app"))