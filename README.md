# ItunesAPIsearch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4.

# Objectives
- Create an application that can read data provided from the iTunes api, searching for tracks and showing the related information about artist, album, rlease date, price, album image and song name.

# Result

- First i tried conecting to the API before making anything because one can read recived data from the console log, doing so i found a CORS error, basically the API was protected and i didnt have the permitions to access it, tried everything, from proxy to forcing a read, finally found JSONP, dough deprecated so i had to jerry rig a solution, worked in the end.

- Second i fixed the data read, as it was looking for diferent fields at first, after that i dedicated to making a good UI, as it had been a while since i last used angular most of what i tried to use was deprecated, in the end i combined basic html, css and Angular Material to get the final result.

- Third i attempted to make some Unit Tests and failed, the main reason being a version update  that changed the keywords used and some requirements and configuration, the mixed information i found online wasnt enough, for what i mannaged to figure out the error is a series of imports and dependencies not propperly managed due to the HTTPCLientModule, as a result not even the creation UT of the involved components works.

- Finally i documented my work and cleaned the code to get rid of any unnecesary elements.

# Tools Used

Angular, Angular Material, JSONP, HTTPClient dependencies, bootstrap.

# General Explanation

The Json.service.ts file contains the api search method that is used by the songs.component.ts to read the information of the API, and populate an array used by songs.component.html to fill the cards with the information desired, these are displayed in a grid to better use the space. All the styles components used can be found in their respective .scss file with the exception of a style declaration in the main html component in index.html used to fully paint the background.


