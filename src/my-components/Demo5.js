import React, { useState, useEffect } from "react";

function Demo5() {
    const [result, setResult] = useState("");
    const [isMomHappy, setIsMomHappy] = useState(false);

    useEffect(() => {
        // Randomize mom's emotion (useEffect runs after the initial render)
        const rand = Math.random();
        setIsMomHappy(rand < 0.5);
    }, []);

    const askMom = async () => {
        const willIGetNewPhone = new Promise((resolve, reject) => {
            if (isMomHappy) {
                const phone = {
                    brand: "Samsung",
                    color: "black",
                };
                resolve(phone);
            } else {
                const reason = new Error("Mom is not happy");
                reject(reason);
            }
        });

        const showOff = (phone) => {
            const message =
                "Hey friend, I have a new " +
                phone.color +
                " " +
                phone.brand +
                " phone";
            return Promise.resolve(message);
        };

        try {
            const phone = await willIGetNewPhone;
            const fulfilled = await showOff(phone);
            setResult(fulfilled);
        } catch (error) {
            setResult(error.message);
        }
    };

    return (
        <div>
            <h1>Promise Object in JavaScript</h1>
            <h3>Scenario:</h3>
            <p>
                Imagine you are a kid. Your mom promises you that she'll get you
                a new phone next week. You don't know if you will get that phone
                until next week. Your mom can either really buy you a brand new
                phone, or stand you up and withhold the phone if she is not
                happy. That is a promise. A promise has 3 states. They are:
                <br />+ Pending: You don't know if you will get that phone
                <br />+ Fulfilled: Mom is happy, she buys you a brand new phone
                <br />+ Rejected: Your mom is happy, she withholds the phone
                <br />
                Chaining Promise
                <br />
                Let's say, you, the kid, promise your friend that you will show
                them the new phone when your mom buys you one. That is another
                promise.
            </p>

            <button onClick={askMom}>
                Click to see if you get a new phone next week?
            </button>

            <p id="result">{result}</p>
        </div>
    );
}

export default Demo5;
