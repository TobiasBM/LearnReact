/*
1.
* Lifecycles er også det vi kalder sideeffects
* dvs. at det er alt den data som kommer ude fra.
* Det kan være api kald, det kan være state det kan være promises.
*
2.
* Før vi kan bruge Lifecycles skal vi bruge
* */

const Element  = (props) => {

    const [state, setState] = React.useState(0)

    React.useEffect(() => {
        const getTodos = () => {
            fetch('https://api.nasa.gov/planetary/apod?api_key=6c00onMJCcmkvRk3YILuFippHEStr8XC6f2sSRxc', {
                method: "get",
            }).then(data => {
                return data.json()
            }).then(res => setState(res))
        }
        getTodos()
    }, [])

    return (
        <div className="container">
            <h1>
                {
                    state.title
                }
            </h1>
            <img src={state.url} alt={state.title} />
        </div>
    )
}

ReactDOM.render(<Element />, document.querySelector("#app"))