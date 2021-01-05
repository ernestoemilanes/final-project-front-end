import React from "react";

export const getBmi = () => {
    return (
        let weight = document.querySelector('#weight').value
        let height = document.querySelector('#height').value

        let myBmi = Math.floor(703 * (weight / (height * height)));

        document.querySelector('#bmi-display').innerHTML = myBmi;

        if (myBmi <= 18.5) {
            document.getElementById("bmi-display").style.color = "blue";
        } else if (myBmi >= 18.6 && myBmi <= 24.9) {
            document.getElementById("bmi-display").style.color = "#7EDC20";
        } else if (myBmi >= 25 && myBmi <= 29.9) {
            document.getElementById("bmi-display").style.color = "orange";
        } else {
            document.getElementById("bmi-display").style.color = "red";
        }
    );
};