const axios = require('axios')
const cheerio = require('cheerio')
const Item = require('./models/pageContent');


const url1 = 'https://timesofindia.indiatimes.com'
const url1_1 = 'https://timesofindia.indiatimes.com/sports'
const url1_2 = 'https://timesofindia.indiatimes.com/business'
const url2 = 'https://www.firstpost.com'
const url2_1 = 'https://www.firstpost.com/category/business'
const url2_2 = 'https://www.firstpost.com/category/sports'
const url3 = 'https://indianexpress.com'
const url3_1 = 'https://indianexpress.com/section/business/'
const url3_2 = 'https://indianexpress.com/section/sports/'
const url4 = 'https://www.moneycontrol.com/news/latest-news/'
const url4_1 = 'https://www.moneycontrol.com/mutualfundindia'
const url4_2 = 'https://www.moneycontrol.com/stocksmarketsindia'

class App {
    getIntimeNew = async (req , res ) => {
        try{ 
           async function indiaTimeNew() {
           await axios.get(url1)
           .then(response => {  
                const html = response.data
                const $ = cheerio.load(html)

                $('._1Fkp2', html).each(function () {
                    const content = $(this).text().trim();
                    const image = $(this).find('img').attr('src')
                    const links = $(this).find('a').attr('href')
                  
                if (content && links && image) {
                    Item.create({
                    content: content,
                    links: links,
                    image: image
                    },
                    function(err, inserted) {
                      if (err) {
                      // log the error if one is encountered during the query
                      console.log(err);
                     } else {
                       // otherwise, log the inserted data
                      console.log(inserted);
                     }
                 });}
                })
                res.json(articles)
           })
           .catch(error => {
               console.error('There was an error!', error);
             });
            }
            indiaTimeNew();
        }catch(error) {
           res.status(500).json({ message: err.message })
        }
   }
   getIntimeSport = async (req , res ) => {
        try{ 
           async function indiaTimeNew() {
           await axios.get(url1_1)
           .then(response => {  
                const html = response.data
                const $ = cheerio.load(html)

                $('.w_img', html).each(function () {
                    const content = $(this).find('a').attr('title').text().trim();
                    const image = $(this).find('img').attr('src')
                    const links = $(this).find('a').attr('href')
                  
                if (content && links && image) {
                    Item.create({
                    content: content,
                    links: links,
                    image: image
                    },
                    function(err, inserted) {
                      if (err) {
                      // log the error if one is encountered during the query
                      console.log(err);
                     } else {
                       // otherwise, log the inserted data
                      console.log(inserted);
                     }
                 });}
                })
                res.json(articles)
           })
           .catch(error => {
               console.error('There was an error!', error);
             });
            }
            indiaTimeNew();
        }catch(error) {
           res.status(500).json({ message: err.message })
        }
   }
   getIntimeBus = async (req , res ) => {
        try{ 
           async function indiaTimeNew() {
           await axios.get(url1_2)
           .then(response => {  
                const html = response.data
                const $ = cheerio.load(html)

                $('.cvs_wdt', html).each(function () {
                    const content = $(this).text().trim();
                    const image = $(this).find('img').attr('src')
                    const links = $(this).find('a').attr('href')
                  
                if (content && links && image) {
                    Item.create({
                    content: content,
                    links: links,
                    image: image
                    },
                    function(err, inserted) {
                      if (err) {
                      // log the error if one is encountered during the query
                      console.log(err);
                     } else {
                       // otherwise, log the inserted data
                      console.log(inserted);
                     }
                 });}
                })
                res.json(articles)
           })
           .catch(error => {
               console.error('There was an error!', error);
             });
            }
            indiaTimeNew();
        }catch(error) {
           res.status(500).json({ message: err.message })
        }
   }


   getFirstPost = async (req , res ) => {
        try{ 
           async function firstPost() {
           await axios.get(url2)
           .then(response => {  
                const html = response.data
                const $ = cheerio.load(html)

                $('.big-thumb', html).each(function () {
                    const content = $(this).find('a').attr('title')
                    const image = $(this).find('img').attr('src')
                    const links = $(this).find('a').attr('href')
                  
                if (content && links && image) {
                    Item.create({
                    content: content,
                    links: links,
                    image: image
                    },
                    function(err, inserted) {
                      if (err) {
                      // log the error if one is encountered during the query
                      console.log(err);
                     } else {
                       // otherwise, log the inserted data
                      console.log(inserted);
                     }
                 });}
                })
           })
           .catch(error => {
               console.error('There was an error!', error);
             });
            }
            firstPost();
        }catch(error) {
           res.status(500).json({ message: err.message })
        }
   }
   getFirstPostBus = async (req , res ) => {
        try{ 
           async function firstPost() {
           await axios.get(url2_1)
           .then(response => {  
                const html = response.data
                const $ = cheerio.load(html)

                $('.big-thumb', html).each(function () {
                    const content = $(this).find('a').attr('title').text().trim();
                    const image = $(this).find('img').attr('src')
                    const links = $(this).find('a').attr('href')
                  
                if (content && links && image) {
                    Item.create({
                    content: content,
                    links: links,
                    image: image
                    },
                    function(err, inserted) {
                      if (err) {
                      // log the error if one is encountered during the query
                      console.log(err);
                     } else {
                       // otherwise, log the inserted data
                      console.log(inserted);
                     }
                 });}
                })
                res.json(articles)
           })
           .catch(error => {
               console.error('There was an error!', error);
             });
            }
            firstPost();
        }catch(error) {
           res.status(500).json({ message: err.message })
        }
   }
    getFirstPostSport = async (req , res ) => {
        try{ 
           async function firstPost() {
           await axios.get(url2_2)
           .then(response => {  
                const html = response.data
                const $ = cheerio.load(html)

                $('.big-thumb', html).each(function () {
                    const content = $(this).text().trim();
                    const image = $(this).find('img').attr('src')
                    const links = $(this).find('a').attr('href')
                  
                if (content && links && image) {
                    Item.create({
                    content: content,
                    links: links,
                    image: image
                    },
                    function(err, inserted) {
                      if (err) {
                      // log the error if one is encountered during the query
                      console.log(err);
                     } else {
                       // otherwise, log the inserted data
                      console.log(inserted);
                     }
                 });}
                })
                res.json(articles)
           })
           .catch(error => {
               console.error('There was an error!', error);
             });
            }
            firstPost();
        }catch(error) {
           res.status(500).json({ message: err.message })
        }
   }


   getIndianExpress = async (req , res ) => {
        try{ 
           async function indianExpress() {
           await axios.get(url3)
           .then(response => {  
                const html = response.data
                const $ = cheerio.load(html)

                $('.other-article', html).each(function () {
                    const content = $(this).text().trim()
                    const image = $(this).find('img').attr('src')
                    const links = $(this).find('a').attr('href')
                  
                if (content && links && image) {
                    Item.create({
                    content: content,
                    links: links,
                    image: image
                    },
                    function(err, inserted) {
                      if (err) {
                      // log the error if one is encountered during the query
                      console.log(err);
                     } else {
                       // otherwise, log the inserted data
                      console.log(inserted);
                     }
                 });}
                })
           })
           .catch(error => {
               console.error('There was an error!', error);
             });
            }
            indianExpress();
        }catch(error) {
           res.status(500).json({ message: err.message })
        }
   }
   getIndianExpressBus = async (req , res ) => {
        try{ 
           async function indianExpress() {
           await axios.get(url3_1)
           .then(response => {  
                const html = response.data
                const $ = cheerio.load(html)

                $('.articles ', html).each(function () {
                    const content = $(this).find('p').text().trim();
                    const image = $(this).find('img').attr('src')
                    const links = $(this).find('a').attr('href')
                  
                if (content && links && image) {
                    Item.create({
                    content: content,
                    links: links,
                    image: image
                    },
                    function(err, inserted) {
                      if (err) {
                      // log the error if one is encountered during the query
                      console.log(err);
                     } else {
                       // otherwise, log the inserted data
                      console.log(inserted);
                     }
                 });}
                })
                res.json(articles)
           })
           .catch(error => {
               console.error('There was an error!', error);
             });
            }
            indianExpress();
        }catch(error) {
           res.status(500).json({ message: err.message })
        }
   }
    getIndianExpressSport = async (req , res ) => {
        try{ 
           async function indianExpress() {
           await axios.get(url3_2)
           .then(response => {  
                const html = response.data
                const $ = cheerio.load(html)

                $('.articles', html).each(function () {
                    const content = $(this).find('p').text().trim();
                    const image = $(this).find('img').attr('src')
                    const links = $(this).find('a').attr('href')
                  
                if (content && links && image) {
                    Item.create({
                    content: content,
                    links: links,
                    image: image
                    },
                    function(err, inserted) {
                      if (err) {
                      // log the error if one is encountered during the query
                      console.log(err);
                     } else {
                       // otherwise, log the inserted data
                      console.log(inserted);
                     }
                 });}
                })
                res.json(articles)
           })
           .catch(error => {
               console.error('There was an error!', error);
             });
            }
            indianExpress();
        }catch(error) {
           res.status(500).json({ message: err.message })
        }
   }


   getMoneyControlNew = async (req , res ) => {
        try{ 
           async function moneyControl() {
           await axios.get(url4)
           .then(response => {  
                const html = response.data
                const $ = cheerio.load(html)

                $('.expertitem', html).each(function () {
                    const content = $(this).find('a').attr('title')
                    const image = $(this).find('img').attr('src')
                    const links = $(this).find('a').attr('href')
                  
                if (content && links && image) {
                    Item.create({
                    content: content,
                    links: links,
                    image: image
                    },
                    function(err, inserted) {
                      if (err) {
                      // log the error if one is encountered during the query
                      console.log(err);
                     } else {
                       // otherwise, log the inserted data
                      console.log(inserted);
                     }
                 });}
                })
                res.json(articles)
           })
           .catch(error => {
               console.error('There was an error!', error);
             });
            }
            moneyControl();
        }catch(error) {
           res.status(500).json({ message: err.message })
        }
   }
   getMoneyControlMarket = async (req , res ) => {
        try{ 
           async function moneyControl() {
           await axios.get(url4_2)
           .then(response => {  
                const html = response.data
                const $ = cheerio.load(html)

                $('.clearfix', html).each(function () {
                    const content = $(this).find('img').attr('alt')
                    const image = $(this).find('img').attr('src')
                    const links = $(this).find('a').attr('href')
                  
                if (content && links && image) {
                    Item.create({
                    content: content,
                    links: links,
                    image: image
                    },
                    function(err, inserted) {
                      if (err) {
                      // log the error if one is encountered during the query
                      console.log(err);
                     } else {
                       // otherwise, log the inserted data
                      console.log(inserted);
                     }
                 });}
                })
                res.json(articles)
           })
           .catch(error => {
               console.error('There was an error!', error);
             });
            }
            moneyControl();
        }catch(error) {
           res.status(500).json({ message: err.message })
        }
   }
   getMoneyControlMutual = async (req , res ) => {
       /*this page does not have image, this api is not working*/
        try{ 
           async function moneyControl() {
           await axios.get(url4_1)
           .then(response => {  
                const html = response.data
                const $ = cheerio.load(html)

                $('.cvs_wdt', html).each(function () {
                    const content = $(this).text().trim();
                    const image = $(this).find('img').attr('src')
                    const links = $(this).find('a').attr('href')
                  
                if (content && links && image) {
                    Item.create({
                    content: content,
                    links: links,
                    image: image
                    },
                    function(err, inserted) {
                      if (err) {
                      // log the error if one is encountered during the query
                      console.log(err);
                     } else {
                       // otherwise, log the inserted data
                      console.log(inserted);
                     }
                 });}
                })
                res.json(articles)
           })
           .catch(error => {
               console.error('There was an error!', error);
             });
            }
            moneyControl();
        }catch(error) {
           res.status(500).json({ message: err.message })
        }
   }
}
const scraperApp = new App()
module.exports = scraperApp
