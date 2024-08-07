import './button.css';

function Button({ value, onClick, smallButton, smallButtonOnlyBorder, largeButton, largeButtonOnlyBorder, hoverButton }) {
    return (
        <button
            className={
                (smallButton && 'button small-button') ||
                (smallButtonOnlyBorder && 'button small-button-only-border') ||
                (largeButton && 'button large-button') ||
                (largeButtonOnlyBorder && 'button large-button-only-border') ||
                (hoverButton && 'button hover-button')

            } onClick={() => onClick(value)}>{value}</button>
    )
}
export default Button;