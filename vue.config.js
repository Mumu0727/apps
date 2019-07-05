

module.exports={
  devServer:{ //开发服务器配置
    proxy:{//代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
      
      '/mumu':{//axios访问 /api/xx ==  target + /api/xx  
        target:'http://localhost:3000',
        // target:'https://uncle9.top',
        // target:config.active,
        changeOrigin:true,//创建虚拟服务器 
        // ws:true,//websocket代理
      },
      
      '/kaola':{// axios 访问 /douban == target + '/douban'
        target:'https://m-element.kaola.com',
        changeOrigin:true,
        pathRewrite:{//路径替换
          '^/kaola':'',// axios 访问/douban/v2/xx == target +'' + /v2
        }
      },
      '/m_v1':{// axios 访问 /douban == target + '/douban'
        target:'https://m.jiuxian.com',
        changeOrigin:true,
      },
    }
  }
}