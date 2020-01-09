const { configure } = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')
require('mock-local-storage')
const promiseFinally = require('promise.prototype.finally')
const JavascriptTimeAgo = require('javascript-time-ago')
const en = require('javascript-time-ago/locale/en')

promiseFinally.shim(Promise)
JavascriptTimeAgo.locale(en)

configure({ adapter: new Adapter() })

global.fetch = require('fetch-mock').sandbox()
global.fetch.config.overwriteRoutes = true
