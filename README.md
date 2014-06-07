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

------------------------------------------------

<pre>
      +-------------------+
      |  JamrResource.py  |
      +-+-----------------+
               |                                                                 
+--------------+---+                                                  
|   JamrService.py |
+--------------+---+                             
               |                                      
           +---+-------+                                            
           |JamrDao.py |                              
           +-------+---+                              
                   |                                  
         +---------+-------+              
         |   DataStore.py  |              
         +-----------------+
</pre>
-----------------------------------
DataObjects

User.py
  - Long, Lat
  - Instrument
  - Genre

ChatSession.py
  - List<ChatEntity> 

ChatEntity.py
  - Message 
  - 























