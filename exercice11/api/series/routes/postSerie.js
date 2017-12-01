const mongoose = require('mongoose');
const Serie = mongoose.model('Serie');
const boom = require('boom')
const validation = require('../ValidationsSchemas/SerieValidationSChema');
module.exports = {
    method: 'POST',
    path: '/api/series/',
    options: {
        validate: {
            payload: validation,
            failAction: (request, h, err) => err
        }
    },
    handler: async (req, h) => {
        const serie = await new Serie(req.payload);
        try {
            await serie.save()
        } catch (e) {
            console.log(e)
            return boom.badRequest(e)
        }
        return serie;
    }
}
