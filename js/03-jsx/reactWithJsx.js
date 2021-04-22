const rootEl = document.querySelector("#app");
/*
* JSX - Javascript XML
*
* Javascript
* */


/*
* Vi kan lave JSX komponenter på flere forskellige måder
* 1. Direkte
* 2. Genbrugelige komponenter
* */

/*
* Direkte:
* */

const JsxElement = <div className="background" id="primary">Det her er et jsx element</div>

/*
* Genbrugelige Komponenter
*
* OBS: Vær opmærksom på at JSX elementer skal være med stort forbogstave ellers fejler babel / transpileren
* */

const JsxComponent = () => {
    //Da vi er inde i en funktion skal vi return.
    return (
        <div className="background" id="primary">
            {
                /*
                    NOTE: For at bruge javascript inde i jsx bruge vi curly brackets,
                          Her kan vi lave alle javascript expressions
                          F.eks.
                 */
                2+4
            }
            Det her er et jsx komponent
        </div>
    )
}
//Når vi rendere komponenter kan vi invokere det som en funktion eller som et element der er forskelle.
ReactDOM.render(<JsxComponent />, rootEl)