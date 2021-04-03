/**
 * drawChartコールバック関数
 * @param id{string} - 描画する要素のID
 * @param raceSchedule{array} - レースのスケジュール
 */
const drawChart = function drawChartTL(id, raceSchedule) {
	const container = document.getElementById(id);
	const chart = new google.visualization.Timeline(container);
	const dataTable = new google.visualization.DataTable();
	dataTable.addColumn({ type: 'string', id: 'Grade' });
	dataTable.addColumn({ type: 'string', id: 'Race' });
	dataTable.addColumn({ type: 'string', id: 'style', role: 'style' });
	dataTable.addColumn({ type: 'date', id: 'Start' });
	dataTable.addColumn({ type: 'date', id: 'End' });
	dataTable.addRows(raceSchedule);

	const option = {
		timeline: {
			barLabelStyle: {
				fontName: 'system-ui',
				fontSize: 10
			},
			height: 400,
			width: 2500,
		}
	}

	chart.draw(dataTable, option);
}

export default drawChart;