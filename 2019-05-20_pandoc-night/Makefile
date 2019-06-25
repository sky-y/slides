.PHONY: build
build: index.html
%.html: %.md custom.css
	pandoc -f markdown+emoji $< -t revealjs -o $@ -s -c custom.css

.PHONY: sign
sign: sign.pptx
sign.pptx: sign.md
	pandoc $< -o $@

.PHONY: clean
clean:
	rm -f index.html
