let app = document.querySelector("#app");

//Spread children so it's an array
function createElement(type, props, ...children){
    //Create the tag from string
    let el = document.createElement(type);

    //Append the attributes
    Object.entries(props).forEach(([key,value]) => {
        el.setAttribute(key, value)
    });

    //Appends child to the parent
    /*
    * NOTE Props can also contain children since it's an object
    * */
        (props.children || children).forEach(child => {
        if (typeof child === "string"){
            el.appendChild(document.createTextNode(child))
        }else{
            el.appendChild(child)
        }
    })
    return el
}

//Usage
const element = createElement("p",
    {firstName: "Tobias", lastName: "Madsen", age: "20", children: ["child i props"]}
)

const element2 = createElement("p",
    {firstName: "Ion", lastName: "Topperon", age: "30"},
    "Ion er super skrap"
)

app.appendChild(element)
app.insertAdjacentElement("beforebegin", element2)


