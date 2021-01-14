store.currentUser.id: {
    createSave: (param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12, param13, param14, param15, param16, param17, param18) => {
		const data = {

		    item_name: param1,
            user_id: store.currentUser.id
            nf_serving_size_qty: param2
            nf_serving_size_unit: param3
            nf_calories: param4
            nf_calories_from_fat: param5
            nf_total_fat: param6
            nf_saturated_fats: param7
            nf_trans_fatty_acid: param8
            nf_cholesterol: param9
            nf_sodium: param10
            nf_total_carbohydrate: param11
            nf_dietary_fiber: param12
            nf_sugars: param13
            nf_protein: param14
            nf_vitamin_a_dv: param15
            nf_vitamin_c_dv: param16
            nf_calcium_dv: param17
            nf_iron_dv: param18
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
    }
}

export const Createsave = () => {
    const { store, actions } = useContext(Context);
    const [itemName, setItemName] = useState();
	const [servingSizeQty, setServingSizeQty] = useState();
	const [servingSizeUnit, setServingSizeUnit] = useState();
    const [calories, setCalories] = useState();
    const [caloriesFromFat, setCaloriesFromFat] = useState();
	const [totalFat, setTotalFat] = useState();
	const [saturatedFats, setSaturatedFats] = useState();
    const [transFat, setTransFat] = useState();
    const [cholesterol, setCholesterol] = useState();
	const [sodium, setSodium] = useState();
	const [carbohydrate, setCarbohydrate] = useState();
    const [fiber, setFiber] = useState();
    const [sugars, setSugars] = useState();
	const [protein, setProtein] = useState();
	const [vitaminA, setVitaminA] = useState();
    const [vitaminC, setVitaminC] = useState();
    const [calcium, setCalcium] = useState();
	const [iron, setIron] = useState();    
    return (
        <>
            <div className="text-center">
                <button
                    type="button"
                    className="btn btn-success btn-class"
                    onClick={async () => {
                        const savedProduct = await actions.createSave(itemName, servingSizeQty, servingSizeUnit, calories, caloriesFromFat, nf_total_fat, saturatedFats, transFat, cholesterol, sodium, carbohydrate, fiber, sugars, protein, vitaminA, vitaminC, calcium, iron);
                        if (savedProduct === true) {
                        history.push("/");
                        } else {
                        //show error
                        }
                    }}>
                    Submit
                </button>
            </div>
        </>
    )
}