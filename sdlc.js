// In this section you will answer some work through problems related to the Software Development Lifecycle

//////////////////PROBLEM 1////////////////////
/*
    Reorganize the following steps of the Software Development Lifecycle to be in their correct order.
*/

// Planning
// Analysis of Requirements
// Design
// Implementation
// Testing & Integration
// Maintain



//////////////////PROBLEM 2////////////////////
/*
    Create a variable for each of the above steps of the Software Development Lifecycle and set the values of each variable to a definition of the step.
    The first one is done for you. 
*/
const planning = "This is the first step, in which the end goal of the software is determined and defined. Developers typically will see what systems are already in place, and determine what features will need to be added." 
const analysisOfRequirements = "The analysis stage includes gathering all details and expectations for a new or updated system and determining the ideas for a prototype"
const design = "The design stage developers will outline the details of the application such as the system and user interfaces"
const testingAndIntegration = "in the testing stage developers will go over their software noting bugs or defects to be fixed ro ensure the developed system meets all requirements for things like security, accessibility and performance ect."
const implementation = "after the system has been tested it will be deployed to end users for installation and be ready for use"
const maintain = "the last step is mainting the software where developers will continue to fix and patch bugs reported by users and implement any patches to to resolve issues with the system"

var stage = [planning, analysisOfRequirements, design, testingAndIntegration, implementation, maintain]

console.log(stage)






