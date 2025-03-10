// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TruePassNFT is ERC721Enumerable, Ownable {
    uint256 public nextTokenId;
    string private baseTokenURI;
    bytes32 public integrityHash;
    bool public contractDisabled; //Prevent contract use after termination

    event TicketMinted(address indexed owner, uint256 tokenId);
    event ContractTerminated();

    constructor() ERC721("TruePassNFT", "TPASS") Ownable(msg.sender) {
        baseTokenURI = "ipfs://bafkreihdwdcefgh4dqkjv67uzcmw7ojee6xedzdetojuzjevtenxquvyku/";
        contractDisabled = false;
    }

    modifier isActive() {
        require(!contractDisabled, "Contract is terminated");
        _;
    }

    function mintTicket(address to) external onlyOwner isActive {
        uint256 tokenId = nextTokenId;
        _safeMint(to, tokenId);
        nextTokenId++;

        emit TicketMinted(to, tokenId);
    }

    function setIntegrityHash(bytes32 newHash) external onlyOwner isActive {
        integrityHash = newHash;
    }

    function terminateContract(bytes32 newHash) external onlyOwner isActive {
        require(newHash != integrityHash, "Hash unchanged, cannot terminate");
        require(totalSupply() > 0, "No NFTs to burn");

        integrityHash = newHash;
        uint256 total = totalSupply();

        // Burn NFTs in reverse order to avoid index shifting
        for (uint256 i = total; i > 0; i--) {
            uint256 tokenId = tokenByIndex(i - 1);
            _burn(tokenId);
        }

        contractDisabled = true;
        emit ContractTerminated();
    }

    function _baseURI() internal view override returns (string memory) {
        return baseTokenURI; //Updated to match the renamed variable
    }
}
