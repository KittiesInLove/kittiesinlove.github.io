/* hide all messages
$("#newTokenResponse").hide();

$("#buyTokenResponse").hide();
$("#sellTokenResponse").hide();
$("#checkMetamask").hide();
//$("#checkBalanceResponse").hide();
*/
$("#approveSiringResponse").hide();


// Dentacoin contract address
var kittyTokenAddress = "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d"
// set web3 object
//var web3 = typeof window.web3 !== 'undefined' ? window.web3 : new Web3();

// setup metamask provider
if(typeof window.web3.currentProvider !== 'undefined') {
    web3.setProvider(window.web3.currentProvider);
}
else {
    web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
}





// setup contract ABIs
var contractABI =
[{"constant":true,"inputs":[{"name":"_interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"cfoAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"},{"name":"_preferredTransport","type":"string"}],"name":"tokenMetadata","outputs":[{"name":"infoUrl","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"promoCreatedCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"ceoAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"GEN0_STARTING_PRICE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"}],"name":"setSiringAuctionAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pregnantKitties","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_kittyId","type":"uint256"}],"name":"isPregnant","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"GEN0_AUCTION_DURATION","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"siringAuction","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"}],"name":"setGeneScienceAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newCEO","type":"address"}],"name":"setCEO","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newCOO","type":"address"}],"name":"setCOO","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_kittyId","type":"uint256"},{"name":"_startingPrice","type":"uint256"},{"name":"_endingPrice","type":"uint256"},{"name":"_duration","type":"uint256"}],"name":"createSaleAuction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"sireAllowedToAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_matronId","type":"uint256"},{"name":"_sireId","type":"uint256"}],"name":"canBreedWith","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"kittyIndexToApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_kittyId","type":"uint256"},{"name":"_startingPrice","type":"uint256"},{"name":"_endingPrice","type":"uint256"},{"name":"_duration","type":"uint256"}],"name":"createSiringAuction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"val","type":"uint256"}],"name":"setAutoBirthFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"},{"name":"_sireId","type":"uint256"}],"name":"approveSiring","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newCFO","type":"address"}],"name":"setCFO","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_genes","type":"uint256"},{"name":"_owner","type":"address"}],"name":"createPromoKitty","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"secs","type":"uint256"}],"name":"setSecondsPerBlock","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdrawBalance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"owner","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"GEN0_CREATION_LIMIT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newContractAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"}],"name":"setSaleAuctionAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_v2Address","type":"address"}],"name":"setNewAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"secondsPerBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"name":"ownerTokens","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_matronId","type":"uint256"}],"name":"giveBirth","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawAuctionBalances","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"cooldowns","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"kittyIndexToOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"cooAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"autoBirthFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"erc721Metadata","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_genes","type":"uint256"}],"name":"createGen0Auction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_kittyId","type":"uint256"}],"name":"isReadyToBreed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PROMO_CREATION_LIMIT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_contractAddress","type":"address"}],"name":"setMetadataAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"saleAuction","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_id","type":"uint256"}],"name":"getKitty","outputs":[{"name":"isGestating","type":"bool"},{"name":"isReady","type":"bool"},{"name":"cooldownIndex","type":"uint256"},{"name":"nextActionAt","type":"uint256"},{"name":"siringWithId","type":"uint256"},{"name":"birthTime","type":"uint256"},{"name":"matronId","type":"uint256"},{"name":"sireId","type":"uint256"},{"name":"generation","type":"uint256"},{"name":"genes","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_sireId","type":"uint256"},{"name":"_matronId","type":"uint256"}],"name":"bidOnSiringAuction","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"gen0CreatedCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"geneScience","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_matronId","type":"uint256"},{"name":"_sireId","type":"uint256"}],"name":"breedWithAuto","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"matronId","type":"uint256"},{"indexed":false,"name":"sireId","type":"uint256"},{"indexed":false,"name":"cooldownEndBlock","type":"uint256"}],"name":"Pregnant","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"approved","type":"address"},{"indexed":false,"name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"kittyId","type":"uint256"},{"indexed":false,"name":"matronId","type":"uint256"},{"indexed":false,"name":"sireId","type":"uint256"},{"indexed":false,"name":"genes","type":"uint256"}],"name":"Birth","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newContract","type":"address"}],"name":"ContractUpgrade","type":"event"}];


// the selected account instance
//    var selectedAccount;

// setup Kitty contract
var Contract = web3.eth.contract(contractABI);


// setup contract instance
var contract = Contract.at(kittyTokenAddress);


// setup transaction object
var transactionObject = {
    from: web3.eth.accounts[0],
    gas: 100000
};

// auto get accounts
web3.eth.getAccounts(function(error, accounts){
    console.log(accounts);

    selectedAccount = accounts[0];
    transactionObject.from = selectedAccount;
});

var account = web3.eth.accounts[0];
var accountInterval = setInterval(function() {

  //auto refresh account
  if (web3.eth.accounts[0] !== account) {
    account = web3.eth.accounts[0];
    transactionObject.from = account;
  }
  //auto refresh amount of Kitties
  contract.balanceOf(account, function(error, amount){
      return $("#checkBalanceResponse_body").html(String("I own " + amount.toString(10)) + " Kitties:");
  });
/*
  // auto buy price refresh
  contract.buyPriceEth(function(error, buypr){
      var res = "1 ETH = 2 500 000 DCN"
      return $("#_buyAmount").attr('placeholder', res)
  });
  // auto sell price refresh
  contract.sellPriceEth(function(error, sellpr){
      var res = (1000000000000000000/sellpr) + " DCN = 1 ETH"
      return $("#_sellAmount").attr('placeholder', res)
  });*/
  // auto refresh address
  $("#myAddress").html(account);
  if (typeof account == 'undefined') {
    $("#checkMetamask").show();
  } else {
    $("#checkMetamask").hide();
  }

}, 2000);


// Approve Siring
$("#_approve").click(function(event){
    event.preventDefault();
    var _account = $("#_approveAccount").val(),
            _sireId = parseInt($("#_approveID").val());

    console.log("Approve Details", _account, _sireId);

    // approve address
    contract.approveSiring(_account, _sireId, function(error, transactionHash) {
      if(error) {
        $("#approveSiringResponse").show();
        return $("#approveSiringResponse_body").html("There was an error approving your Kitty: " + String(error));
      }
      $("#approveSiringResponse").show();
      return $("#approveSiringResponse_body").html("Ok, pending transaction. Give it a minute and check for confirmation on <a href='https://etherscan.io/tx/" + String(transactionHash) + "' target='_blank'>Etherscan</a> ");
    });

    /* transfer tokens
    contract.transfer(account, amount, transactionObject, function(error, transactionHash){
        if(amount < 10) {
            $("#transferTokenResponse").show();
            return $("#transferTokenResponse_body").html("Error: minimum amount 10+" + String(error));
        }

        if(error) {
            $("#transferTokenResponse").show();
            return $("#transferTokenResponse_body").html("There was an error transfering your Dentacoins: " + String(error));
        }

        $("#transferTokenResponse").show();
        //return $("#transferTokenResponse_body").html("Your token is being transfered with tx hash: " + String(transactionHash));
        return $("#transferTokenResponse_body").html("Ok, pending transaction. Give it a minute and check for confirmation on <a href='https://etherscan.io/tx/" + String(transactionHash) + "' target='_blank'>Etherscan</a> ");
    });
*/
    contract.Transfer({}, function(error, result){
        if(error) {
            $("#transferTokenResponse").show();
            return $("#transferTokenResponse_body").html("There was an error transfering your Dentacoins: " + String(error));
        }

        $("#transferTokenResponse").show();
        return $("#transferTokenResponse_body").html("Your Dentacoins have been transfered! " + String(result.transactionHash));
    });
});
//- Transfer Dentacoins

/*

// Buy Dentacoins
$("#_buy").click(function(){
          var amount = parseFloat($("#_buyAmount").val());


    console.log("Transfer Details", account, amount);

    // transfer ether
    contract.buyDentacoinsAgainstEther({value: web3.toWei(amount, "ether"), gas: 100000}, function(error, transactionHash){
        if(error) {
            $("#buyTokenResponse").show();
            return $("#buyTokenResponse_body").html("There was an error transfering your ETH: " + String(error));
        }

        $("#buyTokenResponse").show();
        return $("#buyTokenResponse_body").html("Ok, pending transaction. Give it a minute and check for confirmation on <a href='https://etherscan.io/tx/" + String(transactionHash) + "' target='_blank'>Etherscan</a> ");

    });
    contract.Transfer({}, function(error, result){
        if(error) {
            $("#buyTokenResponse").show();
            return $("#buyTokenResponse_body").html("There was an error transfering your ETH: " + String(error));
        }

        $("#buyTokenResponse").show();
        return $("#buyTokenResponse_body").html("Your ETH have been transfered! " + String(result.transactionHash));
    });
});
//- Buy Dentacoin




// Sell Dentacoins
$("#_sell").click(function(){
          var amount = parseInt($("#_sellAmount").val());

    console.log("Transfer Details", amount);

    // transfer tokens
    contract.sellDentacoinsAgainstEther(amount, transactionObject, function(error, transactionHash){
        if(error) {
            $("#sellTokenResponse").show();
            //return $("#sellTokenResponse_body").html("There was an error selling your Dentacoins: " + String(error));
            return $("#sellTokenResponse_body").html("There was an error selling your Dentacoins. Please check <a href='https://etherscan.io/tx/" + String(transactionHash) + "' target='_blank'>Etherscan</a>");
        }

        $("#sellTokenResponse").show();
        //return $("#transferTokenResponse_body").html("Your token is being transfered with tx hash: " + String(transactionHash));
        return $("#sellTokenResponse_body").html("Ok, pending transaction. Give it a minute and check for confirmation on <a href='https://etherscan.io/tx/" + String(transactionHash) + "' target='_blank'>Etherscan</a> then check your balance. ");
    });

    contract.Transfer({}, function(error, result){
        if(error) {
            $("#sellTokenResponse").show();
            //return $("#sellTokenResponse_body").html("There was an error selling your Dentacoins: " + String(error));
            return $("#sellTokenResponse_body").html("There was an error selling your Dentacoins. Please check <a href='https://etherscan.io/tx/" + String(result.transactionHash) + "' target='_blank'>Etherscan</a>");
        }

        $("#sellTokenResponse").show();
        return $("#sellTokenResponse_body").html("Your Dentacoins have been sold! " + String(result.transactionHash));
    });
});
//- Sell Dentacoins

*/
