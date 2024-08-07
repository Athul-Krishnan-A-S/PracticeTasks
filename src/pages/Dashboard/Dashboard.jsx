import { useState } from "react";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import './dashboard.css';

function Dashboard() {
    const [number1, setNumber1] = useState();
    const [number2, setNumber2] = useState();
    const [result, setResult] = useState('');
    const setNumberone = (number) => {
        setNumber1(number)
    }
    const setNumberTwo = (number) => {
        setNumber2(number)
    }

    const handleButtonClick = (value) => {
        switch (value) {
            case 'ADD': {
                setResult(parseInt(number1) + parseInt(number2));
                break;
            }
            case 'SUBTRACT': {
                setResult(parseInt(number1) - parseInt(number2));
                break;
            }
            case 'MULTIPLY': {
                setResult(parseInt(number1) * parseInt(number2));
                break;
            }
            case 'DIVIDE': {
                setResult(parseInt(number1) / parseInt(number2));
                break;
            }
            case 'MODULUS': {
                setResult(number1 % number2);
                break;
            }
        }
    }

    return (
        <div className="container">
            <InputField setNumberTwo={setNumberTwo} setNumberone={setNumberone} result={result} />
            <div className="button-container">
                <Button smallButton value='ADD' onClick={handleButtonClick} />
                <Button smallButtonOnlyBorder value='SUBTRACT' onClick={handleButtonClick} />
                <Button largeButton value='MULTIPLY' onClick={handleButtonClick} />
                <Button largeButtonOnlyBorder value='DIVIDE' onClick={handleButtonClick} />
                <Button hoverButton value='MODULUS' onClick={handleButtonClick} />
            </div>
        </div>

    );
}
export default Dashboard;