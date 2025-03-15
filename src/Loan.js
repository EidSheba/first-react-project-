import "./style.css"
import SubAction from "./SubAction"
import {useState } from "react";
export default function Loan() {
    const [inputs, setinputs] = useState({
        name: "",
        phone: "",
        age: "",
        salary: "",
        check : false,  
    })
    const [ageError,setAgeError] = useState(null)
    const [show , setShow] = useState(false)
    function handleSub(event) {
        event.preventDefault();
         const { age, phone } = inputs;
        setAgeError(null)
        if (age < 18 || age > 100) {
            setAgeError("age is not allowed")
        }
        else if (phone.length != 11)
        {
            setAgeError("phone number not correct")

        }
        setShow(true)    
    }
    function clickAnyWhere() {
        if (show)
        {
            setShow(false)
        }
    }

    const isDisabled = inputs.name == "" || inputs.phone == "" || inputs.age == "";
    return (
        <div onClick={clickAnyWhere}
            class="flex" style={{ background: "blue", marginTop: "150px", width: "50%" }}>
            <form class="flex" style={{flexDirection :"column" , color :"white",width:"100%",padding:"20px"}}>
                <h1>Requestin a Loan</h1>
                <hr></hr>
                <label> Name </label>
                <input value={inputs.name} onChange={(event) =>
                {
                    setinputs({...inputs, name : event.target.value})
                    }
                } />
                <label> Phone </label>
                <input value={inputs.phone} onChange={(event) => {
                    setinputs({...inputs , phone : event.target.value})
                }} />
                <label> Age </label>
                <input value={inputs.age} onChange={(event) =>
                {
                    setinputs({...inputs, age : event.target.value})
                    }
                } />
                 <label> are you an employee? </label>
                <input type="checkbox"
                    checked={inputs.check}
                    onChange={(event) => {
                    setinputs({...inputs, check : event.target.checked })
                }}/>
                <label>Salary</label>

                <select
                    value={inputs.salary} onChange={(event) => {
                          setinputs({...inputs, check : event.target.value})
                }}>
                    <option>less than 500</option>
                    <option>more than 500</option>
                    <option>more than 1000</option>
                </select>       
                <button onClick={handleSub} disabled={ isDisabled } className={isDisabled ? "subDisabled" : "sub"} >Submit</button>
            </form>
            <SubAction errorAge={ageError} visable={show} />
        </div>
    )
}