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
// webpack.dev.js
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

```javascript
// webpack.common.js
...
output: {
	...
	publicPath: '/',  // http://localhost:3000 접속
	...	
},
```

## 수정 사항
- CSS의 `background-image: url('')` 에서 이미지가 제대로 출력되지 않음.
- 이미지나 폰트같은 자원들은 웹팩에 내장되어있는 로더를 사용하도록 수정
> [Webpack 5 - Asset Modules](https://webpack.js.org/guides/asset-modules/)
```javascript
module: {
	rules: [
		...
		{
			test: /\.(jpe?g|png|gif|bmp|svg)$/,
			type: 'asset/resource',
			exclude: /node_modules/,
		},
		{
			test: /\.(woff|woff2|eot|ttf|otf)$/i,
			type: 'asset/resource',
			exclude: /node_modules/,
		},
	],
},

```