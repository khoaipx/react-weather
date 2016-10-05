var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var transparentBg = require('../styles').whetherBg;
var MainContainer = require('./MainContainer');

function Home () {
  return (
    <MainContainer>
      <h1>Demo</h1>
    </MainContainer>
  )
}

module.exports = Home;