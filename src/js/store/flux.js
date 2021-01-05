const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			bmi: 0,
			bmr: 0,
			convert_height: 0,
			convert_weight: 0,
			token: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			createUser: (param1, param2, param3, param4) => {
				const data = {
					first_name: param1,
					last_name: param2,
					password: param3,
					email: param4
				};
				fetch("https://3000-b2426839-f574-4e21-aa66-4742a66f6dcb.ws-us03.gitpod.io/create-account", {
					method: "POST", // or 'PUT'
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				})
					.then(response => response.json())
					.then(data => {
						console.log("Success:", data);
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			bmiResult: (param1, param2) => {
				console.log(parseInt(param1) + parseInt(param2));
				setStore({ bmi: Math.floor(703 * (parseInt(param1) / (parseInt(param2) * parseInt(param2)))) });
			},

			bmrResult: (param1, param2, param3) => {
				// console.log(parseInt(param1) + parseInt(param2));
				// setStore({ bmi: Math.floor(703 * (parseInt(param1) / (parseInt(param2) * parseInt(param2)))) });
			},

			bmiConvertWeight: param1 => {
				setStore({ convert_weight: parseInt(param1) * 0.453592 });
				/* 
                * if the user inputs the weight in kg:
				    * convert the input # in cm back to lbs
                    * and input it back into the BMI formula 
                
                    ! if (weight in kg) = a number(x) {
                        ! (x) * 2.20462
                    ! } 
                */
			},

			bmiConvertHeight: param1 => {
				setStore({ convert_height: parseInt(param1) * 2.54 });
				/* 
                * if the user inputs the height in cm:
				    * convert the input # in cm back to inches
                    * and input it back into the BMI formula
                    
                    ! if (height in cm) = a number(x) {
                        ! (x) * 0.393701
                    ! } 
                */
			},

			loginUser: (param5, param6) => {
				const data = {
					email: param6,
					password: param5
				};
				console.log(data);
				fetch("https://3000-b2426839-f574-4e21-aa66-4742a66f6dcb.ws-us03.gitpod.io/login", {
					method: "POST", // or 'PUT'
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				})
					.then(response => response.json())
					.then(data => {
						setStore({ token: data });
					})
					.catch(error => {
						console.error("Error:", error);
					});
			}
		}
	};
};

export default getState;
