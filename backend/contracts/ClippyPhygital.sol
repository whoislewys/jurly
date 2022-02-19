pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./ClippyDigital.sol";

/*
            ____ _____ __  __ 
           / ___|___ /|  \/  |
          | |  _  |_ \| |\/| |
          | |_| |___) | |  | |
           \____|____/|_|  |_|
                    
*/

contract ClippyPhygital is ERC721, Ownable {
  using Counters for Counters.Counter;
  using Strings for uint256;
  Counters.Counter private _tokenIds;
  mapping (uint256 => string) private _tokenURIs;
  ClippyDigital clippyDigital;
  
  constructor(address _clippyDigitalAddr) ERC721("ClippyPhygital", "CLIPR") {
    clippyDigital = ClippyDigital(_clippyDigitalAddr);
  }

  function _setTokenURI(uint256 tokenId, string memory _tokenURI)
    internal
    virtual
  {
    _tokenURIs[tokenId] = _tokenURI;
  }

  function tokenURI(uint256 tokenId) 
    public
    view
    virtual
    override
    returns (string memory)
  {
    require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
    string memory _tokenURI = _tokenURIs[tokenId];
    return _tokenURI;
  }
  
  function mint(address recipient, string memory uri)
    public payable
    returns (uint256)
  {
    require(msg.value >= 1e17, "0.1E required to mint");
    require(_tokenIds.current() <= 4200, "Only 4200 of this piece can be created");
    require(balanceOf(msg.sender) <= 5, "You can only mint a max of 5 of this piece");

    _tokenIds.increment();
    uint256 newItemId = _tokenIds.current();
    _mint(recipient, newItemId);

    _setTokenURI(newItemId, uri);

    clippyDigital.mint(recipient, "digitalUri");

    return newItemId;
  }
}
