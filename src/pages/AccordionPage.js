import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: 1,
            label: "What is React?",
            content: "React is a front end javascript framework. It is used to build front end applications. It is a favorite among engineers and is very flexible and easy to use. Developed by Facebook. ",
        },
        {
            id: 2,
            label: "Why use React?",
            content: "React is a favorite JS library among engineers. It has a large community and is very flexible. It is also easy to use. It is also very fast. Many companies use React.",
        },
        {
            id: 3,
            label: "How do you use React?",
            content: "You use React by creating components. Components are small pieces of code that can be reused. You can create a component by using the function or class keyword. You can then use that component as many times as you want.",
        }
        ]
    return (
        <>
        <Accordion items={items} />
        </>
    );
}

export default AccordionPage;