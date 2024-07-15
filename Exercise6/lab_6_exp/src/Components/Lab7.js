import React, { useState } from "react";
import emailjs from "emailjs-com";
const Lab7 = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(msg);

        const formParams={
            from_name:name,
            to_name:'harshith',
            message:msg,
        };

        emailjs
            .send('gmail', 'test_template', formParams,'dEezcmNrWfkwYTAtu',)
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Email sent succesfully!')
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert("Error");
                },
            );


        // console.log("Email sent succesfully");

        

        setName("");
        setEmail("");
        setMsg("");
    }

    return (
        <div className="b-5 m-3 p-3">
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type="text" placeholder="Enter your name" value={name}
                    onChange={(e) => { setName(e.target.value) }} />
                <br /><br />

                <label>Email: </label>
                <input type="email" placeholder="Enter your email id" value={email}
                    onChange={(e) => { setEmail(e.target.email) }} />
                <br /><br />

                <label>Message: </label><br />
                <textarea rows="10" cols="30" placeholder="Write your message here" value={msg}
                    onChange={(e) => { setMsg(e.target.value) }} />
                <br />
                {/* <input type="submit" value="sendEmail"/> */}
                <button type="submit">send Email</button>  
            </form>
        </div>
    )
}

export default Lab7;