import './button.css';

function Button(props) {
    return (
        <button
            className={
                props.smallButton ? 'button small-button' :
                    props.smallButtonOnlyBorder ? 'button small-button-only-border' :
                        props.largeButton ? 'button large-button' :
                            props.largeButtonOnlyBorder ? 'button large-button-only-border' :
                                props.hoverButton ? 'button hover-button' : ''

            } onClick={() => props.onClick(props.value)}>{props.value}</button>
    )
}
export default Button;