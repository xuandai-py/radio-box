const ytdl = require('ytdl-core')

export default async function streaming(req, res) {
    try {
        const url = req.query.url;
        const videoId = await ytdl.getURLVideoID(url)
        const info = await ytdl.getInfo(url)
        let options = { highWaterMark: 1 << 12 };

        // if (info.videoDetails.isLive) {
        //     const hlsFormats = ytdl.filterFormats(info.formats, (format) => format.isHLS)
        //     const topFormatLabel = hlsFormats[0].qualityLabel
        //     let rawQuality = parseInt(topFormatLabel.slice(0, topFormatLabel.length - 1));
        //     // If the video quality is higher than 720p, then we wanna make sure
        //     // to get the highest audio quality from the lowest possible video quality
        //     // (e.g. 1080p and 720p provide the same audio bitrate,
        //     //  so obviously the 720p is more desirable to save bandwidth)
        //     if (rawQuality > 720) {
        //         options.filter = (format) => format.isHLS && format.qualityLabel === '720p';
        //     } else {
        //         options.filter = (format) => format.isHLS;
        //     }
        // }

        const format = ytdl.chooseFormat(info.formats, {filter: 'audioonly'})
        const data = {
            url: "https://www.youtube.com/embed/" + videoId,
            info: format
        }
        return res.send(data)
    } catch (error) {
        return res.status(500)
    }
}