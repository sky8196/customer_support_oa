import pageRoutes from './router.config';
import proxy from './proxy.config';
// ref: https://umijs.org/config/
const config = {
    proxy,
    history: 'hash',
    treeShaking: true,
    routes: pageRoutes,
    publicPath: '/dist/',
    plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
        ['umi-plugin-react', {
            antd: true,
            dva: true,
            dynamicImport: false,
            title: '客保系统',
            dll: false,

            routes: {
                exclude: [
                    /components\//,
                ],
            },
        }],
    ],
};

export default {
    ...config,
    cssLoaderOptions: {
        modules: true,
        getLocalIdent: (context, localIdentName, localName) => {
            if (
                context.resourcePath.includes('node_modules')
        || context.resourcePath.includes('.css')
        // context.resourcePath.includes('ant.design.pro.less') ||
        || context.resourcePath.includes('global.less')
            ) {
                return localName;
            }
            // const match = context.resourcePath.match(/src(.*)/);
            // if (match && match[1]) {
            //   const antdProPath = match[1].replace('.less', '');
            //   const arr = slash(antdProPath)
            //     .split('/')
            //     .map(a => a.replace(/([A-Z])/g, '-$1'))
            //     .map(a => a.toLowerCase());
            //   return `zb${arr.join('-')}-${localName}`.replace(/--/g, '-');
            // }
            return localName;
        },
    },
};
