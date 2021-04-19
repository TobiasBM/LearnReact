let app = document.querySelector("#app");

//Spread children so it's an array
function createElement(type, args, ...children){
    //Create the tag
    let el = document.createElement(type);

    //Append the attributes
    Object.entries(args).forEach(([key,value]) => {
        el.setAttribute(key, value)
    });

    //Appends child to the parent
    /*
    * NOTE Props can also contain children since it's an object
    * */
        (args.children || children).forEach(child => {
        if (typeof child === "string"){
            el.appendChild(document.createTextNode(child))
        }else{
            el.appendChild(child)
        }
    })
    return el
}

    const element = createElement("p",
        {firstName: "Tobias", lastName: "Madsen", age: "20", children: ["child i props"]}
    )

    app.appendChild(element)



