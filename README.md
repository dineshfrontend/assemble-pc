# assemble-pc
 
This project contains a Mock API to load Select Options for MotherBoard, CPU, RAM. This was implemented using json-server.

Once project got extracted execute - "npm install" to install the required Dependencies

To start the project, execute - "npm start" - this will concurrently start the json-server and react App.

The Project contains two pages - 
1) Build My PC
2) My Cart

============
Work Flow:
============
1) Initially, the select dropdown are loaded from Mock API that was UP using JSON Server.
2) On Choose of Select Drop down in the Page "Build My PC", the Data is moved to Store.
3) When "My Cart" page is loaded, the Data from the Store is displayed.

