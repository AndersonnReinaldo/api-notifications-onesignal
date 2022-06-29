"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');

var _handlers = require('./handlers');

const routes = _express.Router.call(void 0, )

routes.post('/sendNotification',_handlers.SendNotification)

exports. default = routes
