const apiUrl = "https://3000-b2426839-f574-4e21-aa66-4742a66f6dcb.ws-us03.gitpod.io";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			bmi: 0,
			bmr: 0,
			bmr_activity: 0,
			product: null,
			productInfo: [],
			productInfoTwo: [],
			token: null,
			currentUser: null,
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
		// store.currentUser.id
		// const data = {

		//         "item_name": param1,
		//         "user_id": store.currentUser.id,
		//         "nf_ingredient_statement": null,
		//         "nf_calories": 136.62,
		//         "nf_calories_from_fat": 65.34,
		//         "nf_total_fat": 7.26,
		//         "nf_saturated_fats": 4.48,
		//         "nf_sodium": 52.8,
		//         "nf_dietary_fiber": 0.46,
		//         "nf_sugars": 14.01,
		//         "nf_protein": 2.31,
		//         "nf_serving_size_qty": 1,
		//         "nf_serving_size_unit": "serving"

		// };
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

			createSave: (
				param1,
				param2,
				param3,
				param4,
				param5,
				param6,
				param7,
				param8,
				param9,
				param10,
				param11,
				param12,
				param13,
				param14,
				param15,
				param16,
				param17,
				param18
			) => {
				const store = getStore();
				const data = {
					item_name: param1,
					user_id: store.currentUser.id,
					nf_serving_size_qty: param2,
					nf_serving_size_unit: param3,
					nf_calories: param4,
					nf_calories_from_fat: param5,
					nf_total_fat: param6,
					nf_saturated_fats: param7,
					nf_trans_fatty_acid: param8,
					nf_cholesterol: param9,
					nf_sodium: param10,
					nf_total_carbohydrate: param11,
					nf_dietary_fiber: param12,
					nf_sugars: param13,
					nf_protein: param14,
					nf_vitamin_a_dv: param15,
					nf_vitamin_c_dv: param16,
					nf_calcium_dv: param17,
					nf_iron_dv: param18
				};

				const url = `${apiUrl}/create-intake`;

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
				console.log(param5, param6);
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
						setStore({ token: body.access_token, currentUser: body.user });
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

			cmToFeet: cm => {
				//turn cm into feet
				let dirtyFeet = parseInt(cm) / 30.48;
				//Math.floor isFeet decimal isInches
				let feet = Math.floor(dirtyFeet);
				//Multiply is Inches times 12
				let inches = (dirtyFeet - feet) * 12;
				return [feet, inches];
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

			bmrActivityResult: (weight, feet, inches, age, gender, activity) => {
				setStore({
					bmr_activity:
						gender == "male"
							? Math.floor(
									66 +
										(6.2 * parseInt(weight) +
											12.7 * (parseInt(feet) * 12 + parseInt(inches)) -
											6.76 * parseInt(age)) *
											parseFloat(activity)
							  )
							: Math.floor(
									655.1 +
										4.35 * parseInt(weight) +
										4.7 * (parseInt(feet) * 12 + parseInt(inches)) -
										4.7 * parseInt(age) * parseFloat(activity)
							  )
				});
				/*
                    ! 66 + (6.2 x weight) + (12.7 x height) – (6.76 x age) = BMR for males
                    * 655.1 + (4.35 x weight) + (4.7 x height) – (4.7 x age) = BMR for females
                */
			},

			ccResult: param1 => {
				fetch(
					`https://nutritionix-api.p.rapidapi.com/v1_1/search/${param1}?fields=nf_protein%2Cnf_calories%2Cnf_sugars%2Cnf_sodium%2Cnf_dietary_fiber%2Cnf_calories_from_fat%2Cnf_total_fat%2Cnf_saturated_fat%2Cnf_ingredient_statement%2Citem_name%2Cnf_total_fat%2Cnf_trans_fatty_acid%2Cnf_cholesterol%2Cnf_servings_per_container%2Cnf_vitamin_a_dv%2Cnf_vitamin_c_dv%2Cnf_calcium_dv%2Cnf_iron_dv%2Cnf_total_carbohydrate%2Cnf_serving_size_unit%2Cnf_serving_size_qty`,

					{
						method: "GET",
						headers: {
							"x-rapidapi-key": "de68d12f6fmshee53504a91d9fdbp1a6faajsn80cb5e332c9a",
							"x-rapidapi-host": "nutritionix-api.p.rapidapi.com"
						}
					}
				)
					.then(res => res.json())
					.then(response => {
						setStore({
							productInfo: response.hits
						});
					})
					.catch(err => {
						console.error(err);
					});
			}
		}
	};
};

export default getState;
