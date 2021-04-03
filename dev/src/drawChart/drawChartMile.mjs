import mileDist from "./../raceSchedule/mileDist.mjs";
import option from "./option.mjs";

/**
 * drawChartコールバック関数・マイル
 * @type {function}
 */
const drawChartMile = function drawChartMileTL() {
	const container = document.getElementById('js-mile');
	const chart = new google.visualization.Timeline(container);
	const dataTable = new google.visualization.DataTable();
	dataTable.addColumn({ type: 'string', id: 'Grade' });
	dataTable.addColumn({ type: 'string', id: 'Race' });
	dataTable.addColumn({ type: 'string', id: 'style', role: 'style' });
	dataTable.addColumn({ type: 'date', id: 'Start' });
	dataTable.addColumn({ type: 'date', id: 'End' });
	dataTable.addRows(mileDist);

	chart.draw(dataTable, option);
}

export default drawChartMile;