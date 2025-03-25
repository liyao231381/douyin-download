const request = require('request');

module.exports = (req, res) => {
    const videoUrl = req.query.url;

    if (!videoUrl) {
        return res.status(400).send('Missing video URL');
    }

    const filename = "抖音下载.mp4";
    const encodedFilename = encodeURIComponent(filename);

    // 设置响应头，告诉浏览器这是一个下载文件
    res.setHeader('Content-Disposition', `attachment; filename="${encodedFilename}"`);
    res.setHeader('Content-Type', 'video/mp4'); // 根据实际视频格式修改

    // 使用 'request' 模块将视频流式传输到响应
    request(videoUrl).pipe(res);
};
