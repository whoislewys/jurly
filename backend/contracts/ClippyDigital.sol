pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ClippyDigital is ERC721, Ownable {
  using Counters for Counters.Counter;
  using Strings for uint256;
  address public clippyPhygitalAddress;
  Counters.Counter private _tokenIds;
  mapping (uint256 => string) private _tokenURIs; 
  
  constructor() ERC721("ClippyDigital", "CLIPD") {}

  function _setTokenURI(uint256 tokenId, string memory _tokenURI)
    internal
    virtual
  {
    _tokenURIs[tokenId] = _tokenURI;
  }

  /// @notice Set Phygital Contract address, so that only the Phygital Contract can mint Digital NFTs
  /// @param _clippyPhygitalAddress address of the ClippyPhygital contract
  function setWhitelistMintAddress(address _clippyPhygitalAddress) external onlyOwner {
    clippyPhygitalAddress = _clippyPhygitalAddress;
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
    require(clippyPhygitalAddress != address(0), "Clippy Phygital address must be set");
    require(msg.sender == clippyPhygitalAddress, "Only Phygital contract can mint Digital NFTs");

    _tokenIds.increment();
    uint256 newItemId = _tokenIds.current();
    _mint(recipient, newItemId);
    _setTokenURI(newItemId, uri);
    return newItemId;
  }
}
