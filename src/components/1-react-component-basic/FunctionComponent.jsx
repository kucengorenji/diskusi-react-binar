const props = {
    text: "World",
}

export default function FunctionComponent(props) {
    return(
        <>
            <div>Hello {props.text}</div>
        </>
    );
};
