/**
 * @file google chartsのtimelineを扱データのところを渡すようにする
 * @file エントリーポイント
 * @todo drawchartを描画したいグラフの分だけ準備する←引数が使えないため
 * @todo Dateの引数を-1する←日は0～30？1～31？
 */

import drawChart from "./chart/drawChart.mjs";

// レースデータ

// ロード
google.charts.load("current",
	{
		packages: ['corechart', 'timeline'],
		'language': 'ja'
	});

// drawChartを実行
// 短
google.charts.setOnLoadCallback(drawChart('js-short', shortDist));
// マイル
google.charts.setOnLoadCallback(drawChart());
// 中1
google.charts.setOnLoadCallback(drawChart());
// 長
google.charts.setOnLoadCallback(drawChart());
// ダート
google.charts.setOnLoadCallback(drawChart());