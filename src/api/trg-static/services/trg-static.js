'use strict';

/**
 * trg-static service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trg-static.trg-static');
