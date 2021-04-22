const rootEl = document.querySelector("#app");

const AwesomeElement = (props) => {
    return (
        <div className={props.className} id={props.id}>
            {props.title}
        </div>
    )
}

ReactDOM.render(<AwesomeElement className="background" id="primary" title="Awesome element" />, rootEl )