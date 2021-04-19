# description
- ゲーム「ウマ娘 プリティーダービー」の距離別レーススケジュール表

# どう作ったか

## HTML
- Pug→HTML
- htmlhintで静的解析

## JS
- インポート/エクスポートはESM
- ESMをwebpackでまとめる
	- configファイルをdevとproductionで分けてる
- ESLint
- Google ChartsのTimeline
	- Google Charts自体はindex.htmlで読込

```
src
├ drawChart ←
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
- Autoprefixer当てる

## タスクランナー
- npm-run-allを導入、npm scriptを簡易タスクランナーにした