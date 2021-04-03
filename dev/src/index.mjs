/**
 * @file google chartsのtimelineを扱データのところを渡すようにする
 * @file エントリーポイント
 * @todo drawchartを描画したいグラフの分だけ準備する←引数が使えないため
 * @todo Dateの引数を-1する←日は0～30？1～31？
 */

import drarChartDart from "./drawChart/drawChartDart.mjs";

// ロード
google.charts.load("current",
	{
		packages: ['corechart', 'timeline'],
		'language': 'ja'
	});

// drawChartを実行
// ダート
google.charts.setOnLoadCallback(drarChartDart);