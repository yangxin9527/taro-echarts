
const EchartChunk = 'pages/chartShow/echarts';

const config = {
  projectName: 'taro-echarts',
  date: '2020-10-21',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  plugins: [],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    webpackChain (chain, webpack) {
      // chain.plugin('analyzer')
      //   .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, []); //分析包大小
      chain.merge({
        optimization: {
          splitChunks: {
            cacheGroups: {
              [EchartChunk]: {
                name: EchartChunk,
                priority: 50,
                test(module) {
                  return /pages[\\/]chartShow[\\/]components[\\/]ec-canvas[\\/]echarts.js/.test(module.resource);
                }
              }
            }
          }
        }
      });
    },
    addChunkPages (pages, pagesNames) {
      pages.set('pages/chartShow/index', [EchartChunk]);
    },
    commonChunks(commonChunks) {
      // 这里加入的chunk会被app.js引用，如果是子包中使用的模块，不需要添加
      // commonChunks.push('lodash');
      // commonChunks.push(EchartChunk);
      return commonChunks;
    },

  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
