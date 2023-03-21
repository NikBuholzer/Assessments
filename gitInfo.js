/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.

*/

const gitDefinition = ('Git is a program used to pull or add specific files to and from a GitHub repositorie allowing you or a team to track changes made to a coding project')
console.log(gitDefinition)

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

const gitHubDefinition = 'GitHub is an online software development service allowing you to store, share and pull code in a repositorie you or another person has made'
console.log(gitHubDefinition)

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

const gitInitDefinition = "Git init initializes a local repository in the folder"
console.log(gitInitDefinition)


//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

const gitCloneDefinition = "Git clone will point to an existing repositorie and make a copy of it in a new location"
console.log(gitCloneDefinition)

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

const gitStatusDefinition = "Git status tells you information about a repositorie like changes that have been staged"
console.log(gitStatusDefinition)

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

const gitAddDefinition = "Git add will add files from a working directory to the staging area"
const gitAddCode = "git add --all"
console.log(gitAddDefinition)
console.log(gitAddCode)

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

const gitCommitDefinition = "git commit will create a snapshot of the files im tracking at a specific point in time"
const gitCommitCode = "git commit -m (add a message)"
console.log(gitCommitDefinition)
console.log(gitCommitCode)

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

const gitPushDefinition = "Git push uploads a local repositories information to a remote repository"
console.log(gitPushDefinition)