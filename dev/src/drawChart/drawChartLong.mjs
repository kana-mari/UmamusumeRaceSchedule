import longDist from "./../raceSchedule/longDist.js";
import option from "./option.mjs";

/**
 * drawChartコールバック関数
 * @param id{string} - 描画する要素のID
 * @param raceSchedule{array} - レースのスケジュール
 */
const drawChartlong = function drawChartlongTL() {
	const container = document.getElementById('js-long');
	const chart = new google.visualization.Timeline(container);
	const dataTable = new google.visualization.DataTable();
	dataTable.addColumn({ type: 'string', id: 'Grade' });
	dataTable.addColumn({ type: 'string', id: 'Race' });
	dataTable.addColumn({ type: 'string', id: 'style', role: 'style' });
	dataTable.addColumn({ type: 'date', id: 'Start' });
	dataTable.addColumn({ type: 'date', id: 'End' });
	dataTable.addRows(longDist);
	chart.draw(dataTable, option);
}

export default drawChartlong;