/**
 * test controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::test.test', ({ strapi }) => ({
  async find(ctx) {
    return {
      message: 'Test endpoint working!',
      timestamp: new Date().toISOString(),
      status: 'ok'
    };
  }
}));
