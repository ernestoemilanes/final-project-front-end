const apiUrl = "https://3000-b2426839-f574-4e21-aa66-4742a66f6dcb.ws-us03.gitpod.io";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			bmi: 0,
			bmr: 0,
			product: null,
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

			bmrResult: (weight, feet, inches, age, gender) => {
				setStore({
					bmr:
						gender == "male"
							? Math.floor(
									66 +
										6.2 * parseInt(weight) +
										12.7 * (parseInt(feet) * 12 + parseInt(inches)) -
										6.76 * parseInt(age)
							  )
							: Math.floor(
									655.1 +
										4.35 * parseInt(weight) +
										4.7 * (parseInt(feet) * 12 + parseInt(inches)) -
										4.7 * parseInt(age)
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
			}
		}
	};
};

export default getState;
