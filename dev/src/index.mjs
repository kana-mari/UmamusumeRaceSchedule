/**
 * @file google chartsのtimelineを扱データのところを渡すようにする
 * @file エントリーポイント
 */

import drawChartShort from "./drawChart/drawChartShort.mjs";
import drawChartMile from "./drawChart/drawChartMile.mjs";
import drawChartMiddle from "./drawChart/drawChartMiddle.mjs";
import drawChartLong from "./drawChart/drawChartLong.mjs";
import drawChartDart from "./drawChart/drawChartDart.mjs";

// ロード
google.charts.load("current",
	{
		packages: ['corechart', 'timeline'],
		'language': 'ja'
	});

// drawChartを実行
google.charts.setOnLoadCallback(drawChartShort);
google.charts.setOnLoadCallback(drawChartMile);
google.charts.setOnLoadCallback(drawChartMiddle);
google.charts.setOnLoadCallback(drawChartLong);
google.charts.setOnLoadCallback(drawChartDart);