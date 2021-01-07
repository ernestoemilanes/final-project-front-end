const apiUrl = "https://3000-b2426839-f574-4e21-aa66-4742a66f6dcb.ws-us03.gitpod.io";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			bmi: 0,
			bmr: 0,
			product: null,
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

				const url = `${apiUrl}/create-account`;

				fetch(url, {
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

			loginUser: async (param5, param6) => {
				const url = `${apiUrl}/login`;

				const data = {
					email: param5,
					password: param6
				};

				try {
					const response = await fetch(url, {
						method: "POST", // or 'PUT'
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(data)
					});
					const body = await response.json();
					if (response.status == 200) {
						setStore({ token: body.access_token });
						console.log("logged In");
						return true;
					} else {
						setStore({ token: null });
					}
				} catch (error) {
					console.log(error);
					return false;
				}

				return false;
			},

			bmiResult: (weight, feet, inches) => {
				setStore({
					bmi: Math.floor(
						703 *
							(weight /
								((parseInt(feet) * 12 + parseInt(inches)) * (parseInt(feet) * 12 + parseInt(inches))))
					)
				});
			},

			bmrResult: (param1, param2, param3, param4) => {
				setStore({
					bmr:
						param4 == "male"
							? Math.floor(
									66 + 6.2 * parseInt(param1) + 12.7 * parseInt(param2) - 6.76 * parseInt(param3)
							  )
							: Math.floor(
									655.1 + 4.35 * parseInt(param1) + 4.7 * parseInt(param2) - 4.7 * parseInt(param3)
							  )
				});
				/*
                    ! 66 + (6.2 x weight) + (12.7 x height) – (6.76 x age) = BMR for males
                    * 655.1 + (4.35 x weight) + (4.7 x height) – (4.7 x age) = BMR for females
                */
			},

			ccResult: param1 => {
				console.log(param1);
				setStore({
					product: param1
				});
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
			}
		}
	};
};

export default getState;
