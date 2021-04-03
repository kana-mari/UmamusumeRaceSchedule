import dart from "./../raceSchedule/dart.mjs";

/**
 * drawChartコールバック関数
 * @param id{string} - 描画する要素のID
 * @param raceSchedule{array} - レースのスケジュール
 */
const drawChartDart = function drawChartDartTL() {
	const container = document.getElementById('js-dart');
	const chart = new google.visualization.Timeline(container);
	const dataTable = new google.visualization.DataTable();
	dataTable.addColumn({ type: 'string', id: 'Grade' });
	dataTable.addColumn({ type: 'string', id: 'Race' });
	dataTable.addColumn({ type: 'string', id: 'style', role: 'style' });
	dataTable.addColumn({ type: 'date', id: 'Start' });
	dataTable.addColumn({ type: 'date', id: 'End' });
	dataTable.addRows(dart);

	const option = {
		timeline: {
			barLabelStyle: {
				fontName: 'system-ui',
				fontSize: 10
			},
			width: 2500,
		}
	}

	chart.draw(dataTable, option);
}

export default drawChartDart;