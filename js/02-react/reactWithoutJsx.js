/*
* 1. For at lave ui's skal vi bruge React og ReactDOM
*
* 2. React er en værktøjskasse som vi kan gøre brug af.
*
* 3. ReactDOM håndtere visningen til browseren.
* */

/*
*   Vi bruger React.createElement for at lave nye elementer som vi kan vise.
*   Denne metode tager 3 argumenter.
*   1. tagType: String
*   2. Props: Object
*   3. Children: Array
* */

const app = React.createElement("div", {
    className: "background",
    id: "primary",
}, "React is awesome!")

/*
* For at få vist dette element på i browseren bruger vi ReactDOM,
* den tager:
* 1. React element
* 2. Root dom node
* */

ReactDOM.render(app, document.querySelector("#app"))


/*
* OPGAVE:
* Brug createElement til at lave et nyt react element som har disse props:
* props: {
*   className: background
*   id: primary
* }
* Elementet skal have teskten - React is awesome!
* */