// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.15;

contract DID {
    error AlreadyRegistered();
    error NotFound();
    error NotVerified();

    event UserRegistered(address indexed owner, bytes32 email, bytes32 name, bytes32 age);
    event UserVerified (address user);



    // Store the hashed Info into a Struct
    struct Profile {
        address owner;
        bytes32 emailH;
        bytes32 nameH;
        bytes32 ageH;
    }

    mapping (address => Profile) public userDetails;

    constructor() {
        
    }

    function register(bytes32 email, bytes32 name, bytes32 age) external {
        if(userDetails[msg.sender].owner != address(0)) revert AlreadyRegistered();
        Profile storage _details = userDetails[msg.sender];

        _details.owner = msg.sender;
        _details.emailH = email;
        _details.nameH = name;
        _details.ageH = age;
    
        emit UserRegistered(msg.sender, email, name, age);
       
    }

    function verify(address user, bytes32 hashedN, bytes32 hasheda) external {
        if(userDetails[user].owner == address(0)) revert NotFound();

        bytes32  name = userDetails[user].nameH;
        bytes32  age = userDetails[user].ageH;

        if(name == hashedN && age == hasheda && hashedN !=bytes32(0) && hasheda != bytes32(0)){
            emit UserVerified(user);
        } 
        else {
           
            revert NotVerified();

        }

    }



}