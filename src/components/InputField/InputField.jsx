import './inputField.css'
function InputField(props) {
    const handleInputFields = (event) => {
        const { name, value } = event.target;
        if (name === 'number1') {
            props.setNumberone(value);
        } else if (name === 'number2') {
            props.setNumberTwo(value);
        }
    }


    return (
        <div className="input-fields">
            <p className='result-container'>{props.result}</p>
            <input name='number1' className="text-field" type="text" placeholder="number 1" onChange={handleInputFields}></input>
            <input name='number2' className="text-field" type="text" placeholder="number 2" onChange={handleInputFields}></input>
        </div>
    );
}
export default InputField;