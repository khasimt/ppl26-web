module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/files");
  eleventyConfig.addPassthroughCopy("src/sponsorship-files");
	
  return {
    dir: {
      input: "src",
      output: "docs"
    },
    htmlTemplateEngine: "njk"
  };
};
