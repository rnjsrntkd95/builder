# Webpack Builder 📦
`babel`, `webpack`로 빌드환경 구성

## 1. 번들 지원 형식 💾
- `.js`
- `.css` `.scss` `.sass`
- `.jpeg` `.jpg` `.png` `.gif` `.bmp` `.svg`


## 2. 개발 환경 설정 ⚙️ 

### webpack-dev-server
- `npm install webpack-dev-server --save-dev`
- `npm run build` 
- `npm start`

>[dev-server options](https://webpack.js.org/configuration/dev-server/)
```javascript
// webpack.config.js
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		port: 9000,
		historyApiFallback: true,
	},
```

### webpack-dev-middleware
- `npm install --save-dev express webpack-dev-middleware
`
```javascript
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// express에서 webpack-dev-middleware와 webpack.config.js를 사용하도록 설정하세요.
// 기본 설정 파일
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

// 포트 3000에서 파일 제공
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});
```