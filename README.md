
     ██╗ █████╗ ███╗   ███╗██████╗ 
     ██║██╔══██╗████╗ ████║██╔══██╗
     ██║███████║██╔████╔██║██████╔╝
██   ██║██╔══██║██║╚██╔╝██║██╔══██╗
╚█████╔╝██║  ██║██║ ╚═╝ ██║██║  ██║
 ╚════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝

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
### Data Representations

#### Requests:
<pre>
 ADD_USER
  source_user: {user}
 INVITE
  source_user: {user}
  dest_user: {user}
 CREATE
  source_user: {user}
 LEAVE
  source_user: {user}
  room: {room}
 MESSAGE
  source_user: {user}
  room: {room}
  message: text
 USERS
  users: List{user}
</pre>
#### Objects:
<pre>

Pos.py
  lon: {double}
  lat: {double}
User.py
  pos: {pos}
  inst: {string}
  genr: {string}
Room.py
  users: list{user}
  id: {long}
</pre>

#### Instruments:
1. Guitar
2. Bass
3. Drums

### JSON FORMATTING

#### Pos
{"lon":"1.1","lat":"1.2"}
#### User
{"pos":{"lon":"1.0","lat":"1.1"}, "inst":"guitar", "genr":"rock", "uid":"1"}
#### Room
{"users":[{"pos":{"lon":"1.0","lat":"1.1"}, "inst":"guitar", "genr":"rock", "uid":"1"}],"uid":1}
#### Add User Request
{"kind":"ADD_USER","model":{"pos":{"lon":"1.0","lat":"1.1"}, "inst":"guitar", "genr":"rock", "uid":"1"}}
#### Invite Request
{"kind":"INVITE","model":{"src_user":{"pos":{"lon":"1.0","lat":"1.1"}, "inst":"guitar", "genr":"rock", "uid":"1"},"dst_user":{"pos":{"lon":"1.0","lat":"1.1"}, "inst":"guitar", "genr":"rock", "uid":"1"}}}
#### Create Request
{"kind":"CREATE","model":{"pos":{"lon":"1.0","lat":"1.1"}, "inst":"guitar", "genr":"rock", "uid":"1"}}
#### Leave Request
{"kind":"LEAVE","model":{"src_user":{"pos":{"lon":"1.0","lat":"1.1"}, "inst":"guitar", "genr":"rock", "uid":"1"},"room":{"users":[{"pos":{"lon":"1.0","lat":"1.1"}, "inst":"guitar", "genr":"rock", "uid":"1"}],"uid":1}}}
#### Message Request
{"kind":"MESSAGE","model":{"src_user":{"pos":{"lon":"1.0","lat":"1.1"}, "inst":"guitar", "genr":"rock", "uid":"1"},"room":{"users":[{"pos":{"lon":"1.0","lat":"1.1"}, "inst":"guitar", "genr":"rock", "uid":"1"}],"uid":1}, "msg":"text"}}
#### Users Request 
{"kind":"USERS","model":[{"pos":{"lon":"1.0","lat":"1.1"}, "inst":"guitar", "genr":"rock", "uid":"1"}]}




















