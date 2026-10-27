const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks,
  })
}

// Три страницы сайта: у каждой свой HTML, свой JS и свой CSS
const htmlPages = [
  createPages('./src/index.html', './index.html', ['schedule']),
  createPages('./src/pages/prices.html', './pages/prices.html', ['prices']),
  createPages('./src/pages/booking.html', './pages/booking.html', ['booking']),
]

module.exports = htmlPages
