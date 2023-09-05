const htmlmin = require('html-minifier')

module.exports = function (eleventyConfig) {
    /**
     * Static files to copy and watch
     * https://www.11ty.dev/docs/copy/
     */
    eleventyConfig.addPassthroughCopy('./src/assets/css/')
    eleventyConfig.addWatchTarget('./src/assets/css/')

    eleventyConfig.addPassthroughCopy('./src/assets/data/')
    eleventyConfig.addWatchTarget('./src/assets/data/')

    eleventyConfig.addPassthroughCopy({'./node_modules/alpinejs/dist/cdn.min.js': 'alpine.min.js'})

    /**
     * HTML Minifier for production builds
     */
    eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
        if (
            process.env.ELEVENTY_ENV == 'production' &&
            outputPath &&
            outputPath.endsWith('.html')
        ) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
            })
            return minified
        }

        return content
    })

    return {
        dir: {
            input: "src"
        }
    };
};