'use strict';

/**
 * whole-sale service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::whole-sale.whole-sale');
