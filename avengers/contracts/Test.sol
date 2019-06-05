pragma solidity ^0.5.0;

contract Test
{
    uint public a;
    function setInteger(uint aa) public 
    {
        a=aa;
    }
    function getInteger() public view returns(uint)
    {
        return a;
    }
}
