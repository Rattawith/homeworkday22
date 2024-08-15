import { useForm } from "react-hook-form";
import { useState } from "react";
import './Calculator.css';

type UserInput = {
    weight: number;
};

function Calculator() {
    const { register, handleSubmit } = useForm<UserInput>();
    const [bmi, setBmi] = useState<number | null>(null);
    const [isWhiteTheme, setIsWhiteTheme] = useState(true);

    const onSubmit = (data: UserInput) => {
        const { weight } = data;
        const bmi = weight * 2.2 * (30 / 2);
        setBmi(bmi);     
    };

    const toggleTheme = () => {
        setIsWhiteTheme(!isWhiteTheme);
    };

    return (
        <div className={isWhiteTheme ? "white-theme" : "dark-theme"}>
            <h1>ควรดื่มน้ำวันละเท่าไหร่ ?</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="userinput">
                <label htmlFor="weight">ใส่น้ำหนักตัวของคุณ (kg): </label>
                <input {...register("weight", { required: true, maxLength: 3 })} type="number" id="weight" /><br/>
                <input type="submit" value="Submit" id="submit" />
                </div>
            </form>
            {bmi !== null && <h1>คุณควรดื่มน้ำประมาณ: {bmi.toFixed(0)} ml</h1>}
            <button onClick={toggleTheme}>
                Switch to {isWhiteTheme ? "Dark" : "White"} Theme
            </button>
        </div>
    );
}

export default Calculator;
