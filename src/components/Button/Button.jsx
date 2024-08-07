import './button.css';

function Button({ value, onClick, smallButton, smallButtonOnlyBorder, largeButton, largeButtonOnlyBorder, hoverButton }) {
    let button = 'button';
    button += (smallButton && ' small-button') || '';
    button += (smallButtonOnlyBorder && ' small-button-only-border') || '';
    button += (largeButton && ' large-button') || '';
    button += (largeButtonOnlyBorder && ' large-button-only-border') || '';
    button += (hoverButton && ' hover-button') || '';
    return (

        <button
            className={button} onClick={() => onClick(value)}>{value}</button>
    )
}
export default Button;