const config = require("config");
const dbconnect = require("../config/dbconnect");
dbconnect.connect();

exports.sumSales = async (req, res) => {
  try {
    dbconnect.query(`SELECT SUM(amount) FROM conversions`, (err, result) => {
      if (!err) {
        res.json(result.rows);
      }
    });
  } catch (err) {
    console.err(err);
    res.json(err);
  }
};

exports.sumProducts = async (req, res) => {
  try {
    dbconnect.query(
      `SELECT COUNT( DISTINCT articleid) FROM conversions`,
      (err, result) => {
        if (!err) {
          res.json(result.rows);
        }
      }
    );
  } catch (err) {
    console.err(err);
    res.json(err);
  }
};

exports.salesNumber = async (req, res) => {
  try {
    dbconnect.query(
      `SELECT COUNT( articleid) FROM conversions`,
      (err, result) => {
        if (!err) {
          res.json(result.rows);
        }
      }
    );
  } catch (err) {
    console.err(err);
    res.json(err);
  }
};

exports.influencerNumber = async (req, res) => {
  try {
    dbconnect.query(
      `SELECT COUNT(DISTINCT influencer) FROM conversions`,
      (err, result) => {
        if (!err) {
          res.json(result.rows);
        }
      }
    );
  } catch (err) {
    console.err(err);
    res.json(err);
  }
};

exports.InfluencerCommission = async (req, res) => {
  try {
    const amount = dbconnect.query(
      `SELECT amount,commission FROM conversions`,
      (err, result) => {
        var multi = 0;
        for (let i = 0; i < result.rows.length; i++) {
          var x = 0;
          x = (result.rows[i].amount * result.rows[i].commission) / 100;
          multi = multi + x;
        }
        if (!err) {
          res.json(multi);
        }
      }
    );
  } catch (err) {
    console.err(err);
    res.json(err);
  }
};

exports.topProducts = async (req, res) => {
  try {
    const result = await dbconnect.query(
      `SELECT COUNT(*) FROM conversions GROUP BY articleid HAVING COUNT(*)>1 `
    );
    const arr = result.rows;
    const topN = (arr, n) => {
      if (n > arr.length) {
        return false;
      }
      return arr
        .slice()
        .sort((a, b) => {
          return b.count - a.count;
        })
        .slice(0, n);
    };
    res.json(topN(arr, 10));
  } catch (error) {
    console.error(error);
  }
};
