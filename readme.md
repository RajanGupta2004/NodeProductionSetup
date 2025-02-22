# Husky - Git Hooks for JavaScript Projects

Husky is an npm package that helps manage Git hooks in JavaScript projects. It ensures code quality and enforces best practices by running scripts before commits or pushes.

## Why Use Husky?

### 1. Prevent Bad Commits & Pushes
- Run linters like `eslint` and `prettier` before committing.
- Ensure tests pass before pushing.

### 2. Automate Code Formatting
- Automatically format code with `prettier` before committing.

### 3. Enforce Commit Message Rules
- Integrate with `commitlint` to enforce standardized commit messages.

## Setting Up Husky

### Step 1: Install Husky
```sh
npm install husky --save-dev
```

### Step 2: Enable Git Hooks
```sh
npx husky init
```
This will create a `.husky` directory and set up hooks.

### Step 3: Add a Pre-Commit Hook
```sh
npx husky add .husky/pre-commit "npm test"
```
Now, tests will run before every commit.

### Step 4: Add a Commit Message Hook
```sh
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```
This ensures all commit messages follow a specific format.

## Conclusion
Husky helps maintain code quality and team consistency by enforcing rules before commits and pushes. It's widely used in modern development workflows with tools like `eslint`, `prettier`, and `lint-staged`.

## Need Help?
For more details, check out the official [Husky documentation](https://github.com/typicode/husky).

