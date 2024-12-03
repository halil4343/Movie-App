import React, { useState } from "react";
import ReactDOM from "react-dom";

const name = "halil"


function Webpage(){ 
    return <><section>
        <header>
            <h2>
                hi {name}
            </h2>
        </header>
        <p>lorem
        </p>
    </section>
    <Clock />

    </>
}

ReactDOM.render(<Webpage />,document.getElementById("root"))

function Clock() {
    const [time,setTime] = useState(new Date().toLocaleTimeString("TR"))

    setInterval(() => setTime(new Date().toLocaleTimeString("TR")),1000)

    return <p>its currently {time}</p>

}