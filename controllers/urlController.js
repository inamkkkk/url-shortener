const Url = require('../models/Url');
const shortid = require('shortid');
const validUrl = require('valid-url');
const baseUrl = process.env.BASE_URL || 'http://localhost:3000';

exports.shortenUrl = async (req, res) => {
  const { longUrl } = req.body;

  if (!validUrl.isUri(baseUrl)) {
    return res.status(400).json('Invalid base URL');
  }

  if (validUrl.isUri(longUrl)) {
    try {
      let url = await Url.findOne({ longUrl });

      if (url) {
        return res.json(url);
      } else {
        const urlCode = shortid.generate();
        const shortUrl = baseUrl + '/' + urlCode;

        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date()
        });

        await url.save();

        return res.json({ shortUrl: url.shortUrl });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json('Server Error');
    }
  } else {
    return res.status(400).json('Invalid long URL');
  }
};

exports.getUrlAnalytics = async (req, res) => {
    const { urlCode } = req.params;

    try {
        const url = await Url.findOne({ urlCode });

        if (!url) {
            return res.status(404).json({ message: 'URL not found' });
        }

        res.json({
            longUrl: url.longUrl,
            shortUrl: url.shortUrl,
            clicks: url.clicks || 0,
            createdAt: url.date
        });
    } catch (error) {
        console.error('Error fetching URL analytics:', error);
        res.status(500).json({ message: 'Failed to fetch URL analytics' });
    }
};
