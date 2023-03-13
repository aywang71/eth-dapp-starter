// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


contract EnglishAuction {
    event Start();
    event Bid(address indexed sender, uint amount);
    event Withdraw(address indexed bidder, uint amount);
    event End(address highestBidder, uint amount);

    IERC721 public immutable nft;
    uint public immutable nftId;
    IERC20 public immutable coin;
    
    address payable public immutable seller;
    uint32 public endAt;
    bool public started;
    bool public ended;
    address public highestBidder;
    uint public highestBid;
    mapping(address => uint) public bids;

    constructor(address _nft, uint _nftId, address _erc20, uint _startingBid) {
        nft = IERC721(_nft); 
        nftId = _nftId;
        highestBid = _startingBid;
        started = false;
        coin = IERC20(_erc20);
        seller = payable(msg.sender);
    }

    function start() external {
        require(msg.sender == seller, "You must be the seller");
        require(started == false, "Auction cannot have started yet");
        started = true;
        endAt = uint32(block.timestamp + 300); // 300 seconds should be long enough for the Demo and test.
        //TODO: transfer the nft from the seller to this contract
        nft.transferFrom(seller, address(this), nftId);
        emit Start();
    }

    function ApproveCoin(uint256 _coinAmount) public returns(bool){
       coin.approve(address(this), _coinAmount);
       return true;
    }
    function AcceptPayment(uint256 _tokenamount) public returns(bool) {
       require(_tokenamount <= GetAllowance(), "Please approve tokens before transferring");
       coin.transferFrom(msg.sender, address(this), _tokenamount);
       return true;
    }
    function GetUserTokenBalance() public view returns(uint256){ 
       return coin.balanceOf(msg.sender);
    }
    function GetAllowance() public view returns(uint256){
       return coin.allowance(msg.sender, address(this));
    }
    function GetContractTokenBalance() public view returns(uint256){
       return coin.balanceOf(address(this));
    }

    function bid(uint256 coinamount) external payable {
        require(started == true && ended == false, "Auction must have started");
        require(coinamount > highestBid, "You must bid more than the highest bid");
        AcceptPayment(coinamount);
        if (highestBidder != address(0)) {
            bids[highestBidder] += highestBid; //this kind of format means that bids are only used to log non-highest bids (i.e the highest bid is not in the bids map)
        }
        highestBid = coinamount;                                
        highestBidder = msg.sender;
        emit Bid(msg.sender, coinamount);
    }

    function withdraw() external { 
        uint balance = bids[msg.sender];
        bids[msg.sender] = 0;
        ApproveCoin(balance);
        coin.transferFrom(address(this), msg.sender, balance);
        emit Withdraw(msg.sender, balance);
    }

    function end() external {
        require(started == true && ended == false, "must have started and not ended");
        require(block.timestamp >= endAt, "not ended");
        ended = true;
        if (highestBidder == address(0)) {
            nft.transferFrom(address(this), seller, nftId);
        } else {
            nft.transferFrom(address(this), highestBidder, nftId);
            coin.approve(address(this), highestBid);
            coin.transferFrom(address(this), seller, highestBid);
        }
        emit End(highestBidder, highestBid);
    }
}