/**
 * @file google chartsのtimelineを扱データのところを渡すようにする
 * @file エントリーポイント
 * @todo drawchartを描画したいグラフの分だけ準備する←引数が使えないため
 * @todo Dateの引数を-1する←日は0～30？1～31？
 */

import drawChartDart from "./drawChart/drawChartDart.mjs";
import drawChartShort from "./drawChart/drawChartShort.mjs";

// ロード
google.charts.load("current",
	{
		packages: ['corechart', 'timeline'],
		'language': 'ja'
	});

// drawChartを実行
google.charts.setOnLoadCallback(drawChartDart);
google.charts.setOnLoadCallback(drawChartShort);