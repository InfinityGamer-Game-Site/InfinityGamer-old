# v1 - Initial Release

First release of site

3/18/24

- Released the site

## v1.1 - First fixes

First bug fixes and feature changes

3/19/24 - 3/21/24

- Fixed game names and removed duplicates
- Added bubblegum, gray, neo and forest themes
- Add 404 page
- Added more random text
- Fixed games page favicons
- Added license
- Added easter egg

### v1.1.1 - SM64 Typo

Fixed a small typo in the Super Mario 64 game directory

3/21/24

- Renamed games/files/super-maio-64 to games/files/super-mario-64, which fixed a referencing error

## v1.2 - Search bar and game display page

Added some new features, like a search bar, and a game display page, and some small bug fixes

3/21/24

- Made a page that displays the games and their title with option to go fullscreen or view the source code.
- Added search bar for games
- Made game boxes use word breaks
- Fixed outline with game boxes not syncing with theme
- Fixed 404.html's CSS and JS referencing not working on subpages
- Changed layout of development/CHANGELOG.md to make more sense and to be easier to read
- Made theme buttons look like their themes

## v1.3 - Categories

Added game categories, and some small changes

3/22/24

- Renamed minecraft games fom starting with mc to start with minecraft
- Moved infinity logos to assets/images/infinity
- Added categories of games
- Renamed games/game.html or games/display.html, renamed ?game query to ?g

### v1.3.1 - Anti-tab-close

Added a feature so a teacher can't close the tab remotely

3/22/24

- Made it so a teacher can't close the tab remotely

## v1.4 - Alternate Links & Feedback

Added some new pages, like alt links and feedback

3/23/24 - 3/25/24

- Added an alternate links page
- Added a feedback page
- Renamed assets/js/global-theme.js to assets/js/global.js
- Removed the remote tab close prevention, because it kept breaking
- Added rudimentary tab cloaking
- Made all game names lowercase

### v1.4.1 - Fixed game names

Fixed game names in both the changelog and games.js

3/25/24

- Reordered game names in assets/js/games.js
- Fixed some incorrect file names in development/CHANGELOG.md

## v1.5 - Clock

Added clock page with interactive and animated backgrounds, and new themes

3/25/24 - 4/3/24

- Added new clock pages with interactive and animated backgrounds
- Added font customization
- Added lots of new themes
- Improved css in alt-links.html and proxy/index.html
- Fixed broken cloaking
- Made navbar taller
- Renamed games/files/100ng to games/files/100-player-pong
- Made the annoying "GoGuardian Privacy Banner" not show on this site for people that have it
- Renamed the development directory to docs, to make more sense
- Changed the layout of docs/CHANGELOG.md a little bit

### v1.5.1 - Incremancer

Added Incremancer by request

4/4/24

- Added incremancer to games

#### v1.5.1.1 - Incremancer fix

Bug fix for Incremancer

4/4/24

- Tried to fix incremancer
- Made navbar clock update faster

#### v1.5.1.2 - Incremancer fix 2

2nd bug fix for Incremancer

4/4/24

- Tried to fix incremancer

#### v1.5.1.3 - Rename Incremancer

Renamed the Incremancer directory

4/4/24

- Renamed incremancer-master to incremancer

### v1.5.2 - Update Cookie Clicker

Updated Cookie Clicker to newest version

4/9/24

- Updated Cookie Clicker to newest version

#### v1.5.2.1 - Add note to try fullscreen

Added note to try fullscreen

4/9/24

- Added note to try fullscreen

## v1.6 - Unblocking

Added some new features for unblocking

4/13/24 - 4/17/24

- Added about:blank embedder
- Added random game
- Added Monkey Mart
- Added 667 new proxies
- Added temperature and weather to clock pages

### v1.6.1 - Development changes

Small developmental changes that users won't notice

4/17/24

- Added _redirects file
- Added package.json
- Added robots.txt
- Added sitemap.xml
- Made it so updates have short descriptions
- Minified a lot of the game files
- Accidentally deleted Fruit Ninja and EmulatorJS, will restore later

#### v1.6.1.1 - EmulatorJS replace

Accidentally replaced some of the files with EmulatorJS files

4/17/24

- Fixed accidentally EmulatorJS replaced files

<<<<<<< HEAD
# v2 - Big changes
=======
## v2 - Big changes
>>>>>>> origin/main

Giant update, full of new games, CSS changes, game images, and more

4/17/24 - 4/30/24

- Changed the game display page CSS
- Added game images
- Renamed 8ball-billards-classic to 8ball-billiards-classic, chromaincident to chroma-incident, endlesswar3 to endless-war-3, Papas Pizzaria to Papas Pizzeria, scrapmetal to scrap-metal-3, smokingbarrels to smokin-barrels, snowbattle to snow-battle-io, tactical-assasin to tactical-assassin, added a slightly better version of Stickman Hook, and renamed it as Stickman Hook (was just Stickman), deleted duplicate Death Run 3D (under death-run), Chrome Dino (under dino), Doge Miner (under doge-mining-simulator), Fireboy and Watergirl (under fireboy-and-watergirl-forest-temple), Particle Clicker (under particleclicker), Google Snake (under snake), Mario (under super-mario-maker-online), deleted Double Wires because it doesn't work, deleted Dungeon Craft because it never loads, deleted broken Elastic Man and renamed the duplicate working version (elastic-face) to Elastic Man, Renamed Gopher to Gopher Kart, Grey Box to Grey Box Testing, Icys Purple Head to Icy Purple Head 2, Idle Shark to Shark Game, Justfall to Justfall Lol, Shadow World Adventure to Shadoworld Adventure, Slither Snake to Snake, Winter Falling Price to Winter Falling Price of Life, Wolf3D to Wolfenstein 3D, and deleted Fake Virus and TV Static, because they aren't even games
- Made categories page look better
- Added new categories for cars and idle games
- Added reload game button in game display page
- Added a "fullscreen needed to play" list of games
- Added the surf game from Microsoft Edge, Basket Random, Volley Random, Soccer Random, and Top Speed Racing 2D
- Updated Don't Drop the White Ball 2's index.htm to an html extension
- Learned .htaccess is only for Apache web servers, changed it to _redirects
- Seperated the game names from games.js to gameNames.js
- Deleted EmulatorJS and Fruit Ninja from gameNames.js temporarily, until I readd them.
- Removed "Created by ChatGPT" comment at end of games.js, because I have coded more of it now
- Added version and changelog viewing
- Added compact and loose view for game list
- Combined random-text.js and aboutblankembedder.js into index.js
- Added localStorage warning on first site visit
- Improved game-box CSS hover effects
- Removed broken games: all of the The Impossible Quizzes, Jetpack, Path Finder, Pizzeria Simulator, Shift Flash 2, and Stick Climb
- Added info about the site on index.html
- Switched to SCSS for themes
- Minor code optimization and sorting changes
- Made easter egg page coole
- Added 10 new themes and 2 new fonts
- Added basic iframer
- Made it so not all the fonts load, just the one selected
- Added view counter
- Improved README

## v2.1 - Requests, Bug Fixes and Links

Added some community requests, fixed some small bugs and added new alt links

5/7/24 - 5/16/24 (Took a break for a bit)

- Added 13 new main, alt, and sneaky alt links
- Added territorial.io, Nazi Zombies, and Idle Mining Empire games
- Removed scrapped favorites link
- Fixed a small bug with favicons on games/index.html
- Moved service-worker.js to assets/js/
- Added some redirects for Vercel
- Added game sharing
