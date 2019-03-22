## 1.安装依赖包
npm i react react-dom @types/react @types/react-dom react-router-dom @types/react-router-dom react-transition-group @types/react-transition-group react-swipe @types/react-swipe -S

npm i webpack webpack-cli webpack-dev-server html-webpack-plugin -D

npm i typescript ts-loader  source-map-loader -D

npm i redux react-redux @types/react-redux redux-thunk redux-logger @types/redux-logger -S

npm i connected-react-router -S

##2.生成tsconfig配置文件
tsc -init

##3.目录结构
- containers 页面级组件
- componnets 显示类组件
- store 仓库

##4.从服务端取数据的过程
1.后端提供API接口
2.前台调用此接口
3.前台把调用API接口获取的数据存放在仓库里
4.仓库中的状态数据会在组件中进行渲染
