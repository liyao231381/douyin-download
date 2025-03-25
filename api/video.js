const request = require('request');

module.exports = (req, res) => {
    const videoUrl = req.query.url;

    if (!videoUrl) {
        return res.status(400).send('Missing video URL');
    }

    // 设置正确的请求头 (从浏览器的开发者工具中复制)
    const options = {
        url: videoUrl,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
            'Referer': 'https://www.douyin.com/', // 替换为实际的 Referer (如果需要)
        }
    };

    // 设置响应头
    res.setHeader('Content-Type', 'video/mp4');
    res.setHeader('Access-Control-Allow-Origin', '*'); // 允许所有来源 (仅用于开发环境)

    // 使用 request 模块将视频流式传输到响应
    request(options).pipe(res);
};
