import middleDist from "./../raceSchedule/middleDist.mjs";
import option from "./option.mjs";

/**
 * drawChartコールバック関数・マイル
 * @type {function}
 */
const drawChartMiddle = function drawChartMiddleTL() {
	const container = document.getElementById('js-middle');
	const chart = new google.visualization.Timeline(container);
	const dataTable = new google.visualization.DataTable();
	dataTable.addColumn({ type: 'string', id: 'Grade' });
	dataTable.addColumn({ type: 'string', id: 'Race' });
	dataTable.addColumn({ type: 'string', id: 'style', role: 'style' });
	dataTable.addColumn({ type: 'date', id: 'Start' });
	dataTable.addColumn({ type: 'date', id: 'End' });
	dataTable.addRows(middleDist);

	chart.draw(dataTable, option);
}

export default drawChartMiddle;