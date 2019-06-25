const mume = require("@shd101wyy/mume");

async function main() {
    await mume.init();

    const dirSlides = ".";

    const myMarkdownFlavor = [
        "markdown",
        "-raw_tex",
        "+hard_line_breaks",
        "+tex_math_single_backslash",
        "+link_attributes",
        "+emoji",
        "+autolink_bare_uris"
    ].join("");

    const engine = new mume.MarkdownEngine({
        filePath: dirSlides + "/" + "index.md",
        projectDirectoryPath: dirSlides,
        config: {
            revealjsTheme: "white.css",
            codeBlockTheme: "auto.css",
            protocolsWhiteList: "http, https, atom, file, mailto",
            imageFolderPath: "/images",
            usePandocParser: true,
            pandocPath: "pandoc",
            pandocMarkdownFlavor: myMarkdownFlavor,
            latexEngine: "lualatex",
            printBackground: true
        }
    });

    // html export
    await engine.htmlExport({
        offline: false,
        runAllCodeChunks: true
    });

    // Chrome (puppeteer) export
    // await engine.chromeExport({
    //     fileType: "pdf", 
    //     runAllCodeChunks: true
    // });

    return process.exit();
}

main();