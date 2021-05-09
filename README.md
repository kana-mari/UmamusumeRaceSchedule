# 概要
ゲーム「ウマ娘 プリティーダービー(Umamusume Pretty Derby)」の距離別レーススケジュール表です。

# デモ
[ウマ娘 距離別レーススケジュール表](https://raceschedule-8e0c3.web.app/)

# 使用言語
## HTML
- Pug→HTML
- htmlhintで静的解析

## JS
- ESMでimport/export
- ESMをwebpackでまとめる
	- configファイルをdev（webpack.config.dev.js）とproduction（webpack.config.pro.js）で分けてる
- ESLint
- Google ChartsのTimeline
	- Google Chartsはimportできないので、index.htmlで読込

```
src
├ drawChart
 　├ drawChart*.mjs <- 各距離別drawChartコールバック関数
 　└ option.mjs ←drawChartのオプション
└ raceSchedule ←レースの年月データ
 　├ color.mjs ←配色データ
 　├ dart.mjs ←ダート
 　├ longDist.js ←長距離
 　├ middleDist.mjs ←中距離
 　├ mileDist.mjs ←マイル
 　└ shortDist.mjs ←短距離
```

## CSS
- Sass
- Autoprefixer

## タスクランナー
- npm-run-allを導入、npm scriptを簡易タスクランナーにした

## 使用npmパッケージ
- autoprefixer [![npm version](https://badge.fury.io/js/autoprefixer.svg)](https://badge.fury.io/js/autoprefixer)
- htmlhint [![npm version](https://badge.fury.io/js/htmlhint.svg)](https://badge.fury.io/js/htmlhint)
- npm-run-all [![npm version](https://badge.fury.io/js/npm-run-all.svg)](https://badge.fury.io/js/npm-run-all)
- postcss [![npm version](https://badge.fury.io/js/postcss.svg)](https://badge.fury.io/js/postcss)
	- postcss-cli
- sass [![npm version](https://badge.fury.io/js/sass.svg)](https://badge.fury.io/js/sass)
- webpack [![npm version](https://badge.fury.io/js/webpack.svg)](https://badge.fury.io/js/webpack)
	- webpack-cli
	- webpack-merg

# 作者情報
- 作成者：[kana-mari](https://github.com/kana-mari)

# ライセンス
- None