// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { userWins, computerMove } from "../combatUtils.js";

const test = QUnit.test;

test('should log out proper win senario (win, lose or tie)', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const userMove = "rock",
    computerMove = "rock",
    expected = "tie";
    
    const userMove2 = "paper",
    computerMove2 = "rock",
    expected2 = "win";
    
    const userMove3 = "scissors",
    computerMove3 = "rock",
    expected3 = "lose";
    
    const userMove4 = "paper",
    computerMove4 = "scissors",
    expected4 = "lose";
    
    const userMove5 = "rock",
    computerMove5 = "scissors",
    expected5 = "win";
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = userWins(userMove, computerMove);
    const actual2 = userWins(userMove2, computerMove2);
    const actual3 = userWins(userMove3, computerMove3);
    const actual4 = userWins(userMove4, computerMove4);
    const actual5 = userWins(userMove5, computerMove5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3);
    expect.equal(actual4, expected4);
    expect.equal(actual5, expected5);
});

test('should return a string type', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = "string";
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = typeof computerMove();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
