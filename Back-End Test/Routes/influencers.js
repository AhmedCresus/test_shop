const express = require("express");
const {
  sumSales,
  sumProducts,
  salesNumber,
  influencerNumber,
  InfluencerCommission,
  topProducts
} = require("../controllers/influencers.controller");

const Router = express.Router();

Router.get(`/sum-sales`, sumSales);

Router.get(`/sum-products`, sumProducts);

Router.get(`/sales-number`, salesNumber);

Router.get(`/influencer-number`, influencerNumber);

Router.get(`/influencer-commission`, InfluencerCommission);

Router.get(`/top-product`, topProducts);

module.exports = Router;
