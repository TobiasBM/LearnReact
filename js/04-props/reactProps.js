/*
* Den mest essentielle byggesten i react er props
* Vi bruger props til at sende data rundt mellem komponenter
* Data flyder oppe fra og ned, dette gælder også for props
* Vi kan tilgå en prop på et komponent via funktions argumentet
* TIP: God konvention er at kalde argumentet props.
* */

const ElementWithProps = (props) => {
    console.log(props)
        return (
            <div>
                {props.props3}
            </div>
        )
}

const ElementWithOutProps = (props) => {
    console.log(props)
    return (
        <div>
            Element without prop
        </div>
    )
}

/*
* Vi sætter props på Elementet som vi har oprettet
* Vi kan sætte alle mulige ting ind i vores props
* strings, numbers, Jsx components
* */
ReactDOM.render(<ElementWithProps prop1={1+3} props2="some string" props3={<ElementWithOutProps />}/>, document.querySelector("#app") )