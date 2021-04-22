/*
* State giver os mulighed for at håndtere dynamisk data
* State gentegner komponentet og child components
* For at bruge State skal vi bruge en hook.
* State Hooken kommer som et array
* */

const Element = () => {
    const [state, setState] = React.useState(0);

    return (
        <div className="background" id="primary">
            <button className="btn" onClick={() => setState((c) => c + 1)}>
                Increment
            </button>
            {state}
            <button className="btn" onClick={() => setState((c) => c - 1)}>
                Decrement
            </button>
        </div>
    )
}

ReactDOM.render(<Element />, document.querySelector("#app"))