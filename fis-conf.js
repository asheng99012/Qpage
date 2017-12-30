fis.require('jello')(fis);

// 标记 staitc/libs 下面的 js 为模块化代码。
fis.match('/static/libs/**.js', {
    isMod: true
});

fis.match('/page/**.js', {
    isMod: false
});

// 解析 markdown，编译成 html
fis.match('*.md', {
    parser: fis.plugin('marked'),
    rExt: '.html'
});

fis.match("/html/(**.html)", {
    release: '$1'
});

fis.media('test')
    .match('::package', {
        spriter: fis.plugin('csssprites')
    })
    .match('**.js', {
        useHash: true
    })
    .match('**.css', {
        useHash: true,
        useSprite: true
    })
    .match('*.png', {
        // fis-optimizer-png-compressor 插件进行压缩，已内置
        optimizer: fis.plugin('png-compressor'),
        useHash: true
    })
    .match('::image', {
        useHash: true
    });

fis.media('prod')
    .match('::package', {
        spriter: fis.plugin('csssprites')
    })
    .match('**.js', {
        optimizer: fis.plugin('uglify-js'),
        useHash: true
    })
    .match('**.css', {
        optimizer: fis.plugin('clean-css'),
        useHash: true,
        useSprite: true
    })
    .match('*.png', {
        // fis-optimizer-png-compressor 插件进行压缩，已内置
        optimizer: fis.plugin('png-compressor'),
        useHash: true
    })
    .match('::image', {
        useHash: true
    });