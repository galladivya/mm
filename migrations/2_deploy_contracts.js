var Voting = artifacts.require("./MyAdvancedToken.sol");

module.exports = function(deployer) {
  deployer.deploy(Voting,0,"MINTERS","DC", {gas: 6700000});
  
};
