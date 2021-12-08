const express = require('express');
const router = express.Router();
const IndexController = require('../scraper')

router.get('/intimesnew', IndexController.getIntimeNew)
router.get('/intimessport', IndexController.getIntimeSport)
router.get('/intimesbusiness', IndexController.getIntimeBus)
router.get('/firstpostnew', IndexController.getFirstPost)
router.get('/firstpostbus', IndexController.getFirstPostBus)
router.get('/firstpostsport', IndexController.getFirstPostSport)
router.get('/indianexpressnew', IndexController.getIndianExpress)
router.get('/indianexpressbus', IndexController.getIndianExpressBus)
router.get('/indianexpresssport', IndexController.getIndianExpressSport)
router.get('/moneycontrolnew', IndexController.getMoneyControlNew)
router.get('/moneycontrolmarket', IndexController.getMoneyControlMarket)
router.get('/moneycontrolmutual', IndexController.getMoneyControlMutual)

module.exports = router