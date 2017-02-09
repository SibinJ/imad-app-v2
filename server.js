var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/interests', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'interests.html'));
});

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'about.html'));
});

app.get('/js/jquery.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', 'jquery.js'));
});

app.get('/js/bootstrap.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', 'bootstrap.min.js'));
});

app.get('/js/classie.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', 'classie.js'));
});

app.get('/js/cbpAnimatedHeader.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', 'cbpAnimatedHeader.js'));
});

app.get('/js/freelancer.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', 'freelancer.js'));
});

app.get('/js/jqBootstrapValidation.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', 'jqBootstrapValidation.js'));
});

app.get('/css/bootstrap.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', 'bootstrap.css'));
});

app.get('/css/bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', 'bootstrap.min.css'));
});

app.get('/css/freelancer.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', 'freelancer.css'));
});

app.get('/font-awesome/css/font-awesome.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/css', 'font-awesome.css'));
});

app.get('/font-awesome/css/font-awesome.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/css', 'font-awesome.min.css'));
});

app.get('/font-awesome/fonts/FontAwesome.otf', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/fonts', 'FontAwesome.otf'));
});

app.get('/font-awesome/fonts/fontawesome-webfont.eot', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/fonts', 'fontawesome-webfont.eot'));
});

app.get('/font-awesome/fonts/fontawesome-webfont.svg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/fonts', 'fontawesome-webfont.svg'));
});

app.get('/font-awesome/fonts/fontawesome-webfont.ttf', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/fonts', 'fontawesome-webfont.ttf'));
});

app.get('/font-awesome/fonts/fontawesome-webfont.woff', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/fonts', 'fontawesome-webfont.woff'));
});

app.get('/font-awesome/less/bordered-pulled.less', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/less', 'bordered-pulled.less'));
});

app.get('/font-awesome/less/core.less', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/less', 'core.less'));
});

app.get('/font-awesome/less/fixed-width.less', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/less', 'fixed-width.less'));
});

app.get('/font-awesome/less/font-awesome.less', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/less', 'font-awesome.less'));
});

app.get('/font-awesome/less/icons.less', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/less', 'icons.less'));
});

app.get('/font-awesome/less/larger.less', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/less', 'larger.less'));
});

app.get('/font-awesome/less/list.less', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/less', 'list.less'));
});

app.get('/font-awesome/less/mixins.less', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/less', 'mixins.less'));
});

app.get('/font-awesome/less/path.less', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/less', 'path.less'));
});

app.get('/font-awesome/less/rotated-flipped.less', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/less', 'rotated-flipped.less'));
});

app.get('/font-awesome/less/spinning.less', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/less', 'spinning.less'));
});

app.get('/font-awesome/less/stacked.less', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/less', 'stacked.less'));
});

app.get('/font-awesome/less/variables.less', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/less', 'variables.less'));
});

app.get('/font-awesome/scss/_bordered-pulled.scss', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/scss', 'bordered-pulled.scss'));
});

app.get('/font-awesome/scss/_core.scss', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/scss', 'core.scss'));
});

app.get('/font-awesome/scss/_fixed-width.scss', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/scss', 'fixed-width.scss'));
});

app.get('/font-awesome/scss/font-awesome.scss', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/scss', 'font-awesome.scss'));
});

app.get('/font-awesome/scss/_icons.scss', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/scss', 'icons.scss'));
});

app.get('/font-awesome/scss/_larger.scss', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/scss', 'larger.scss'));
});

app.get('/font-awesome/scss/_list.scss', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/scss', 'list.scss'));
});

app.get('/font-awesome/scss/_mixins.scss', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/scss', 'mixins.scss'));
});

app.get('/font-awesome/scss/_path.scss', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/scss', 'path.scss'));
});

app.get('/font-awesome/scss/_rotated-flipped.scss', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/scss', 'rotated-flipped.scss'));
});

app.get('/font-awesome/scss/_spinning.scss', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/scss', 'spinning.scss'));
});

app.get('/font-awesome/scss/_stacked.scss', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/scss', 'stacked.scss'));
});

app.get('/font-awesome/scss/_variables.scss', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/font-awesome/scss', 'variables.scss'));
});

app.get('/fonts/glyphicons-halflings-regular.eot', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/fonts', 'glyphicons-halflings-regular.eot'));
});

app.get('/fonts/glyphicons-halflings-regular.svg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/fonts', 'glyphicons-halflings-regular.svg'));
});

app.get('/fonts/glyphicons-halflings-regular.ttf', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/fonts', 'glyphicons-halflings-regular.ttf'));
});

app.get('/fonts/glyphicons-halflings-regular.woff', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/fonts', 'glyphicons-halflings-regular.woff'));
});

app.get('/fonts/glyphicons-halflings-regular.woff2', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/fonts', 'glyphicons-halflings-regular.woff2'));
});

app.get('/img/image.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 'image.png'));
});

app.get('/img/portfolio/reading.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img/portfolio', 'reading.png'));
});

app.get('/img/portfolio/code.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img/portfolio', 'code.png'));
});

app.get('/img/portfolio/Basketball.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img/portfolio', 'Basketball.png'));
});

app.get('/img/portfolio/game1.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img/portfolio', 'game1.png'));
});

app.get('/img/portfolio/piano.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img/portfolio', 'piano.png'));
});

app.get('/img/portfolio/puzzle.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img/portfolio', 'puzzle.png'));
});

app.get('ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var comments = [];
app.get('/comment', function (req, res) {
  var comment = req.query.comment;
  comments.push(comment);
  res.send(JSON.stringify(comments));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log("IMAD course app listening on port ${port}!");
});
