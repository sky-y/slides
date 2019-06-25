[スライドへのリンク (PDF)](https://github.com/sky-y/slide-2019-02-17-typesetting-darkness/raw/master/slide.pdf)

## 動作環境

- Pandoc 2.6
- TeX Live 2018 (scheme-full)

## ビルド方法

```
$ pandoc slide.md -t beamer --pdf-engine=xelatex -H header.tex -o slide.pdf
```
