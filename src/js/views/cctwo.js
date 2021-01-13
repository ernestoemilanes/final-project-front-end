import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Navigation } from "../component/navigation";

export const Cc = () => {
	const { store, actions } = useContext(Context);
	const [product, setProduct] = useState();
	return (
        <section className="performance-facts">
        <header className="performance-facts__header">
            <h1 className="performance-facts__title">Nutrition Facts</h1>
            <p>Serving Size 1/2 cup (about 82g)
            <p>Serving Per Container 8</p>
        </header>
        <table className="performance-facts__table">
            <thead>
            <tr>
                <th colspan="3" className="small-info">
                Amount Per Serving
                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th colspan="2">
                <b>Calories</b>
                200
                </th>
                <td>
                Calories from Fat
                130
                </td>
            </tr>
            <tr className="thick-row">
                <td colspan="3" className="small-info">
                <b>% Daily Value*</b>
                </td>
            </tr>
            <tr>
                <th colspan="2">
                <b>Total Fat</b>
                14g
                </th>
                <td>
                <b>22%</b>
                </td>
            </tr>
            <tr>
                <td className="blank-cell">
                </td>
                <th>
                Saturated Fat
                9g
                </th>
                <td>
                <b>22%</b>
                </td>
            </tr>
            <tr>
                <td className="blank-cell">
                </td>
                <th>
                Trans Fat
                0g
                </th>
                <td>
                </td>
            </tr>
            <tr>
                <th colspan="2">
                <b>Cholesterol</b>
                55mg
                </th>
                <td>
                <b>18%</b>
                </td>
            </tr>
            <tr>
                <th colspan="2">
                <b>Sodium</b>
                40mg
                </th>
                <td>
                <b>2%</b>
                </td>
            </tr>
            <tr>
                <th colspan="2">
                <b>Total Carbohydrate</b>
                17g
                </th>
                <td>
                <b>6%</b>
                </td>
            </tr>
            <tr>
                <td className="blank-cell">
                </td>
                <th>
                Dietary Fiber
                1g
                </th>
                <td>
                <b>4%</b>
                </td>
            </tr>
            <tr>
                <td className="blank-cell">
                </td>
                <th>
                Sugars
                14g
                </th>
                <td>
                </td>
            </tr>
            <tr className="thick-end">
                <th colspan="2">
                <b>Protein</b>
                3g
                </th>
                <td>
                </td>
            </tr>
            </tbody>
        </table>

        <table className="performance-facts__table--grid">
            <tbody>
            <tr>
                <td colspan="2">
                Vitamin A
                10%
                </td>
                <td>
                Vitamin C
                0%
                </td>
            </tr>
            <tr className="thin-end">
                <td colspan="2">
                Calcium
                10%
                </td>
                <td>
                Iron
                6%
                </td>
            </tr>
            </tbody>
        </table>

        <p className="small-info">* Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs:</p>

        <table className="performance-facts__table--small small-info">
            <thead>
            <tr>
                <td colspan="2"></td>
                <th>Calories:</th>
                <th>2,000</th>
                <th>2,500</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th colspan="2">Total Fat</th>
                <td>Less than</td>
                <td>65g</td>
                <td>80g</td>
            </tr>
            <tr>
                <td className="blank-cell"></td>
                <th>Saturated Fat</th>
                <td>Less than</td>
                <td>20g</td>
                <td>25g</td>
            </tr>
            <tr>
                <th colspan="2">Cholesterol</th>
                <td>Less than</td>
                <td>300mg</td>
                <td>300 mg</td>
            </tr>
            <tr>
                <th colspan="2">Sodium</th>
                <td>Less than</td>
                <td>2,400mg</td>
                <td>2,400mg</td>
            </tr>
            <tr>
                <th colspan="3">Total Carbohydrate</th>
                <td>300g</td>
                <td>375g</td>
            </tr>
            <tr>
                <td className="blank-cell"></td>
                <th colspan="2">Dietary Fiber</th>
                <td>25g</td>
                <td>30g</td>
            </tr>
            </tbody>
        </table>

        <p className="small-info">
            Calories per gram:
        </p>
        <p className="small-info text-center">
            Fat 9
            &bull;
            Carbohydrate 4
            &bull;
            Protein 4
        </p>

        </section>
    );
};