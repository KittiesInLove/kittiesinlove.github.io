/* hide all messages
$("#newTokenResponse").hide();

$("#buyTokenResponse").hide();
$("#sellTokenResponse").hide();
$("#checkMetamask").hide();
//$("#checkBalanceResponse").hide();
*/
$("#approveSiringResponse").hide();
$("#approveBreedResponse").hide();


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
  contract.tokensOfOwner(account, function(error, kitties){
    return $("#checkMyKittiesResponse_body").html(String(kitties.toString(10)));
  });
  // auto refresh address
  $("#myAddress").html(account);
  if (typeof account == 'undefined') {
    $("#checkMetamask").show();
    $("#_approve").hide();
  } else {
    $("#checkMetamask").hide();
    $("#_approve").show();
  }

}, 10000);
// - auto get accounts


// Approve Siring
$("#_approve").click(function(event){
    $("#approveSiringResponse").hide();
    event.preventDefault();
    var _account = $("#_approveAccount").val(),
            _sireId = parseInt($("#_approveID").val());

    if(_sireId < 1 || isNaN(_sireId)) {
        $("#approveSiringResponse").show();
        return $("#approveSiringResponse_body").html("Error: Invalid or empty Kitty-ID");
    }
    if(_account == "") {
        $("#approveSiringResponse").show();
        return $("#approveSiringResponse_body").html("Error: Empty approval-receiver-address");
    }

    // approve address
    contract.approveSiring(_account, _sireId, function(_hash, _valid) {
      if(!_valid) {
        $("#approveSiringResponse").show();
        return $("#approveSiringResponse_body").html("There was an error approving your Kitty.");
      }
      $("#approveSiringResponse").show();
      return $("#approveSiringResponse_body").html("Ok, pending transaction. Give it a minute and check for confirmation on <a href='https://etherscan.io/tx/" + String(_valid) + "' target='_blank'>Etherscan</a> ");

    });
});

//- Approve Siring


// Breeding
// check breed
$("#_checkbreed").click(function(event){
  $("#approveBreedResponse").hide();
  event.preventDefault();
  var _sireID = parseInt($("#_sireID").val());
  var _breedID = parseInt($("#_breedID").val());

  if(_sireID < 1 || _breedID < 1 || isNaN(_sireID) || isNaN(_breedID)) {
      $("#approveBreedResponse").show();
      return $("#approveBreedResponse_body").html("Error: Invalid or empty Kitty-ID");
  }

  contract.canBreedWith(_breedID, _sireID, function(_hash, _valid) {
    if(!_valid) {
      $("#approveBreedResponse").show();
      return $("#approveBreedResponse_body").html("Error: Hm, it seems that they can't fall in love, yet");
    }
    $("#approveBreedResponse").show();
    return $("#approveBreedResponse_body").html("Breeding OK");
  });
});

// Breed TODO
$("#_breed").click(function(event){
  $("#approveBreedResponse").hide();
  event.preventDefault();
  var _sireID = parseInt($("#_sireID").val());
  var _breedID = parseInt($("#_breedID").val());
  //var _autoBirthFee = 15000000000000000;
  //var _autoBirthFee = 7000000000000000;

  if(_sireID < 1 || _breedID < 1 || isNaN(_sireID) || isNaN(_breedID)) {
      $("#approveBreedResponse").show();
      return $("#approveBreedResponse_body").html("Error: Invalid or empty Kitty-ID");
  }

  //Get breeding fee for .breedWithAuto
  var _autoBirthFee = contract.autoBirthFee(function(a, _fee) {
    _fee = _fee.toNumber();
    return _fee;
  });

  //Start breeding function
  contract.breedWithAuto(_breedID, _sireID, {from:web3.eth.accounts[0], value:_autoBirthFee}, function(_hash, _valid) {
    if(!_valid) {
      $("#approveBreedResponse").show();
      return $("#approveBreedResponse_body").html("Error: Hm no, it seems that they're snuggling only");
      console.log("Breeding test", _hash, _valid);
    }
    $("#approveBreedResponse").show();
    return $("#approveBreedResponse_body").html("OK, confirm breeding: <a href='https://etherscan.io/tx/" + String(_valid) + "' target='_blank'>Etherscan</a> ");
  });
});

// - Breeding

// Tip Button
var MY_ADDRESS = '0x29324031F7b722d2eb8fc7a1023C7033AAC53Cc0'

var tipButton = document.querySelector('.tip-button')
tipButton.addEventListener('click', function() {
  var x = $("#tipAmount").val()
  x = x.replace( /,/,"." );
  var tipAmount = parseFloat(x)
  var tipAmountWei = parseInt(tipAmount * 1000000000000000000)
  console.log(tipAmount)
  if (typeof account == 'undefined') {
    return renderMessage('You need to install MetaMask to use this feature.  https://metamask.io')
  }

  var user_address = web3.eth.accounts[0]
  web3.eth.sendTransaction({
    to: MY_ADDRESS,
    from: user_address,
    value: tipAmountWei,
  }, function (err, transactionHash) {
    if (err) return renderMessage('Oh no!: ' + err.message)

    // If you get a transactionHash, you can assume it was sent,
    // or if you want to guarantee it was received, you can poll
    // for that transaction to be mined first.
    renderMessage('Thanks!')
  })
})

// - Tip Button
