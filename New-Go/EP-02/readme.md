# EP-02 Notes

1\*\* In this we will make the scaffold of the react app from scratch not using the npm or npx

2\*\* package.json is a configuration for npm

3\*\* npm init for a package.json file

4\*\* Bundler for managing the different type of files in the project.
You may any bundler like parcel web pack or vite.(have their own pros and cons).

5\*\* npm install -D bundler name (-D for devdependencies not required by end user only needs at build or only at development phase)

6\*\* npm install bundler name (for dependencies required by end user for production)

7\*\* Difference between the caret(^) and tilde(~) in the version specification in package.json file
^ help to minor update the version of the dependencies or devD too
while ~ help to major and patch update of the version of the dependency

8\*\* If we install a dependency and it needs more dependency for their run it also installs it, it is known as transitive dependencies.

9\*\* There is no need for node_modules to be pushed on the git repo for github as it can be re-created just by package.json and
package-lock.json file as it stores the info about dependencies versions for installation by npm pnpm.

10\*\* Parcel or also any other bundler also have features like these:-
-Dev Build
-Local Server
-HMR = Hot Module Replacement
-Use a file watching algo to track each file written in c++
-Use Caching for faster builds
-Image Optimization
-Minification of files for production
-compression help
-Bundling
-consistent hashing
-code splitting
-differential bundling - to support any version of browser or any browser
-Diagnostics
-Error handling
-help to hoist on HTTPs
-Tree Shaking - remove the unwanted code for you that is not being used
-Different dev and production bundles

11** Remove the main entry point from package.json to avoid any build error

12** dist folder is a folder that store the compressed code for faster execution to load the app or site more faster(a production ready code)
A production build

13** We can tell our app to be compatible for which specified browser version only
By adding a browserslist array in the package.json file from node_modules
