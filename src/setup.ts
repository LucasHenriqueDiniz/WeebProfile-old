function setup() {
  const files = ["image.svg", "style.css", "fonts.css"].map((file) => path.join(__templates, fs.existsSync(path.join(directory, file)) ? name : "classic", file));
}
