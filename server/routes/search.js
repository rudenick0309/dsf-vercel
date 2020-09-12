const express = require('express');
const router = express.Router();
require('dotenv').config();

const client_id = process.env.NAVER_ID
const client_secret = process.env.NAVER_PD

router.get('/blog.json',(req,res,next) => {
// router.get('/shop.json',(req,res,next) => {
//router.get('/cafearticle.json',(req,res,next) => {
// router.get('/webkr.json',(req,res,next) => {
// router.get('/local.json',(req,res,next) => {
  console.log('b search get blog req', req.query.data);
  const word = req.query.data + ' ' +'디저트'
  const keyword = `${encodeURI(word)}`

  // const api_url = `https://openapi.naver.com/v1/search/shop.json?query=${encodeURI(keyword)}`
  //const api_url = `https://openapi.naver.com/v1/search/cafearticle.json?query=${encodeURI(keyword)}`
   const api_url = `https://openapi.naver.com/v1/search/blog.json?query=${encodeURI(keyword)}`
  //const api_url = `https://openapi.naver.com/v1/search/image?query=${encodeURI(keyword)}`
  // const api_url = `https://openapi.naver.com/v1/search/webkr?query=${encodeURI(keyword)}`
  // const api_url = `https://openapi.naver.com/v1/search/local?query=${encodeURI(keyword)}`

  const request = require('request');
  const options = {
    url: api_url,
    headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
  };

  request.get(options, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log('error = ' + response.statusCode);
    }
  });

})

// router.get('/webkr.json',(req,res,next) => {
// router.get('/shop.json',(req,res,next) => {
router.get('/image',(req,res,next) => {

  console.log('b search get shopping req', req.query.data);
  const word = req.query.data + ' ' +'디저트'
  const keyword = `${encodeURI(word)}`

  // const api_url = `https://openapi.naver.com/v1/search/shop.json?query=${encodeURI(keyword)}`
  // const api_url = `https://openapi.naver.com/v1/search/cafearticle.json?query=${encodeURI(keyword)}`
  // const api_url = `https://openapi.naver.com/v1/search/blog.json?query=${encodeURI(keyword)}`
  const api_url = `https://openapi.naver.com/v1/search/image?query=${encodeURI(keyword)}`
  // const api_url = `https://openapi.naver.com/v1/search/webkr?query=${encodeURI(keyword)}`
  // const api_url = `https://openapi.naver.com/v1/search/local?query=${encodeURI(keyword)}`

  const request = require('request');
  const options = {
    url: api_url,
    headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
  };

  request.get(options, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log('error = ' + response.statusCode);
    }
  });

})

module.exports = router;
