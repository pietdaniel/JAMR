JAMR:

Screen One
-----------
Please let us have your location

  POST get-location ->  server

Screen Two
-----------
Instrument / Genere

  POST profile ->  server

Screen Three
-----------
Map
  
   GET long-lat <- server
   GET ws upgrade -> server

Screen Four
-----------
Chat

   Engaged via websocket 
