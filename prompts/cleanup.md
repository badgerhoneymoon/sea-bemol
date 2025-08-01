# Code Cleanup Request

## Context
Your goal is to analyze the files we were working on during our conversation and identify any redundant or unused code that needs to be cleaned up.

## Required Actions
1. Review the files we modified:
   - List all files that were part of our conversation
   - For each file, check if it contains:
     - Unused imports
     - Deprecated code
     - Redundant functions
     - Commented-out code that's no longer needed
     - Old implementations we've replaced

2. Check for unused files:
   - Identify files that were replaced by new implementations
   - List files that are no longer referenced anywhere
   - Find configuration files for services we're not using anymore

3. Provide specific cleanup instructions:
   - Show exact code blocks to remove
   - Explain why each removal is safe
   - List any dependencies that can be removed
   - Show any necessary import updates in other files
   - For each change, provide a clear explanation of:
     - Why the code is no longer needed
     - What functionality replaced it
     - How we know it's safe to remove
     - Any potential impact on other parts of the application

4. Verify Dependencies:
   - Check package.json for unused packages
   - Review environment variables that are no longer needed
   - Identify unused API configurations

## Expected Output
Please provide:
1. List of files to be deleted (with explanation for each)
2. Specific code blocks to remove from existing files (with justification)
3. Required changes to imports and dependencies (with reasoning)
4. Confirmation that the cleanup won't break existing functionality
5. Clear explanation for every proposed change

Please execute this cleanup review without requiring additional input from me.
