module.exports = {
    publicPath: '/appvue/dist/', // 打包文件相对路径
    devServer:{
        open:true,
        host:'localhost',
        port:8080,
        https:false,
        hotOnly:false,
        // proxy:{
        //     //配置域名
        //     '/api':{
        //         target:'https://ele-interface.herokuapp.com/api/',
        //         ws:true,
        //         changOrigin:true,
        //         pathRewrite:{
        //             '^/api':''
        //         }
        //     }
        // }
        before:app=>{}
    }
}