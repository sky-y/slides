---
title: Markdownでスライド＋執筆
subtitle: 姫路IT系勉強会 2017.12
author:
- 藤原 惟
- "(藤原 由来, Twitter: sky_y)"
date: 2017年12月16日
aspectratio: "169"
---

## Markdownスライドの現状

- reveal.js (HTMLスライド)が最強
    - Markdownからreveal.jsに変換する手段がたくさん
    - Webベースでもreveal.jsバックエンドが多数

## Markdownスライド: Pandoc

- reveal.jsに変換するのがベター
- Pandoc 2.0.5でPowerPoint出力に対応
    - 今動いているのがPowerPointです
    - デザインの調整は追って調査します

## Pandoc: pptxのデザイン

- 画面比の指定 (YAML metadataの`aspectratio`) → 無効
- `$ pandoc --print-default-data-file reference.pptx > reference.pptx`
    - `reference.pptx`をカスタマイズしてデザインを設定できるはずだが・・・
    - PowerPointで開くと壊れてる（！？）
    - LibreOffice Impressで開くしかなさそう？

## Markdownスライド: MPE

- [Markdown Preview Enhanced](https://shd101wyy.github.io/markdown-preview-enhanced/#/) (MPE)
    - VS Code/Atomのプラグインとして利用可能
    - すごく高機能なMarkdown処理系
    - 個人的にはVS Codeで使っています
- [mume](https://github.com/shd101wyy/mume)
    - MPEのコアにあたる変換エンジン (npmパッケージ)
    - 変換処理をスクリプト化するときに便利
- GitHub Pages: 静的ホスティング

## 参考：スライドのGitHubリポジトリ

- <https://github.com/sky-y/histudy-201712>
- GitHubリポジトリさえ設定できてれば、基本的には`npm run all`でスライド生成→デプロイまで完結します
- あとで整備して、ボイラープレートとして使えるようにしたい

## 執筆

- 書いてます
    - noteマガジン: [文系のためのMarkdown入門](https://note.solarsolfa.net/m/m0ee0e40a1c72)
- noteはMarkdownに未対応なので、人力Markdown処理系で変換
    - 運営はMarkdownエディタに前向き？

## 執筆お助けツール

- [textlint](https://github.com/textlint/textlint)
    - 英語・日本語の文法誤りをしてくれるツール
    - プラグインでスタイルやルールをインストールできる
    - [Collection of textlint rule · textlint/textlint Wiki](https://github.com/textlint/textlint/wiki/Collection-of-textlint-rule)
- [prh](https://github.com/prh/prh)
    - textlintと組み合わせて使う
    - 辞書を作っておくと、用語の誤りを指摘してくれる
    - [サンプルルール](https://github.com/prh/rules)のtechboosterだけでもかなり使える

## 執筆のためのCI

- 技術書界隈でCIが流行ってる
    - 原稿をPush→完成品に近いPDF生成→GitHub/BitBucketのIssue/PRでフィードバック
    - [技術書同人誌を書きましょう！ - Qiita](https://qiita.com/erukiti/items/6b7e85f760476a997161)
- 執筆CIのメリット
    - 原稿を書いた片っ端から編集者さんが随時校正できる
        - 執筆フローは、伝統的にはウォーターフローモデル
    - リモートでの共同執筆やチームプレイが円滑になる

## 執筆に関するおすすめ資料

- [【もくもく執筆会】執筆お疲れさま！歓談＆LT パーティー](https://techbook-meetup.connpass.com/event/64235/)
    - [資料一覧](https://techbook-meetup.connpass.com/event/64235/presentation/) に上がってるLT資料が良い

## おわり