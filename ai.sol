// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;


//Contract Factory to Create new contracts
contract SingularityFactory {
    //Array of contracts
    address[] public contracts;
    
    //Create new contract
    function createContract() public {
        SingularityInteli newContract = new SingularityInteli();
        //Add new contract to array
        contracts.push(address(newContract));
    }

    //Get all contracts
    function getContracts() public view returns (address[] memory) {
        //Return array of contracts
        return contracts;
    }
}

//Contract to track AI
contract SingularityInteli {
    //Creator of the contract
    address public creator;

    //Struct to store AI data
    struct AI{
    address payable company; // company(who built the AI) address wallet
    string  companyName; // company name
    bytes  aiKey;// AI key
    uint  accuracy; // Average AI accuracy
    string  oversight; // Organization that oversees the AI
    uint  numTests; // Number of tests performed
    uint  numVulnerabilities; // Number of vulnerabilities found
    bool  approved; // AI approved or not by the validation
    uint  riskLevel; // AI risk level
    uint  lastUpdated; // When(time) the company post the AI in blockchain
    }

    
    AI public objAi; // AI object

    constructor() {
        creator = msg.sender; // Creator of the contract, ADMIN, only he can validate the AI
         
    }

    //Event to request payment
    event PaymentRequest(address indexed company, uint value, uint expiration); 


    
    //Function to track AI, post in blockchain, only the company can execute this function
    function trackingAI(string memory _companyName, bytes memory _aiKey, uint _accuracy, string memory _oversight, uint _numTests, uint _numVulnerabilities) public {
        require(msg.sender != creator, "Creator cannot execute this function");
        objAi.companyName = _companyName;
        objAi.company = payable(msg.sender);
        objAi.aiKey = _aiKey;
        objAi.accuracy = _accuracy;
        objAi.oversight = _oversight;
        objAi.numTests = _numTests;
        objAi.numVulnerabilities = _numVulnerabilities;
        objAi.approved = false;
        objAi.riskLevel = 0;
        objAi.lastUpdated = block.timestamp;
    }

    //Function to calculate the payment value, the penalty
    function calculatePayment(uint paymentValue, uint _riskLevel) internal pure returns (uint) {
    return paymentValue * _riskLevel; // riskLevel * paymentValue
}

    //Function to validate AI, only the creator of the contract can execute this function
    function validationAI(bool _approved, uint _riskLevel, uint _value) public {
        //Only creator can execute this function
        require(msg.sender == creator, "Only creator can execute this function");
        objAi.approved = _approved;
        //Risk level must be between 1 and 5
        require(_riskLevel >= 1 && _riskLevel <= 5, "Risk level must be between 1 and 5");
        objAi.riskLevel = _riskLevel;
        //If AI is approved, dangerous, request payment
        if(objAi.approved == true){
        
        //Calculate payment value
        uint value = calculatePayment(_value, _riskLevel);
        //Expiration time
        uint expiration = block.timestamp + 30 days;
        //Request payment
        emit PaymentRequest(objAi.company, value, expiration); 

        }
    
    }
}
