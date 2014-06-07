<pre>
     ██╗ █████╗ ███╗   ███╗██████╗ 
     ██║██╔══██╗████╗ ████║██╔══██╗
     ██║███████║██╔████╔██║██████╔╝
██   ██║██╔══██║██║╚██╔╝██║██╔══██╗
╚█████╔╝██║  ██║██║ ╚═╝ ██║██║  ██║
 ╚════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝
</pre>
Screen One
-----------
Please let us have your location
Screen Two
-----------
Instrument / Genere
Screen Three
-----------
Map
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
  uid: {universally unique id}
Room.py
  users: list{user}
  uid: {universally unique id}
</pre>

#### Instruments:
1. Guitar
2. Bass
3. Drums

### JSON FORMATTING
#### Pos
```json
{"lon":"1.1","lat":"1.2"}
```
#### User
```json
{"pos":{"lon":"1.0","lat":"1.1"}, "inst":"guitar", "genr":"rock", "uid":"1"}
```
#### Room
```json
{"users":[{"pos":{"lon":"1.0","lat":"1.1"}, "inst":"guitar", "genr":"rock", "uid":"1"}],"uid":1}
```
#### Add User Request
```json
{"kind":"ADD_USER","model":{"pos":{"lon":"1.0","lat":"1.1"}, "inst":"guitar", "genr":"rock", "uid":"1"}}
```
#### Invite Request
```json
{"kind":"INVITE","model":{"src_user":{"pos":{"lon":"1.0","lat":"1.1"}, "inst":"guitar", "genr":"rock", "uid":"1"},"dst_user":{"pos":{"lon":"1.0","lat":"1.1"}, "inst":"guitar", "genr":"rock", "uid":"1"}}}
```
#### Create Request
```json
{"kind":"CREATE","model":{"pos":{"lon":"1.0","lat":"1.1"}, "inst":"guitar", "genr":"rock", "uid":"1"}}
```
#### Leave Request
```json
{"kind":"LEAVE","model":{"src_user":{"pos":{"lon":"1.0","lat":"1.1"}, "inst":"guitar", "genr":"rock", "uid":"1"},"room":{"users":[{"pos":{"lon":"1.0","lat":"1.1"}, "inst":"guitar", "genr":"rock", "uid":"1"}],"uid":1}}}
```
#### Message Request
```json
{"kind":"MESSAGE","model":{"src_user":{"pos":{"lon":"1.0","lat":"1.1"}, "inst":"guitar", "genr":"rock", "uid":"1"},"room":{"users":[{"pos":{"lon":"1.0","lat":"1.1"}, "inst":"guitar", "genr":"rock", "uid":"1"}],"uid":1}, "msg":"text"}}
```
#### Users Request 
```json
{"kind":"USERS","model":[{"pos":{"lon":"1.0","lat":"1.1"}, "inst":"guitar", "genr":"rock", "uid":"1"}]}
```
#### Generated from the following
```python
posBlob = '{"lon":"1.1","lat":"1.2"}'
userBlob = '{"pos":{"lon":"1.0","lat":"1.1"}, "inst":"guitar", "genr":"rock", "uid":"1"}'
roomBlob = '{"users":['+userBlob+'],"uid":1}'
addUserBlob = '{"kind":"ADD_USER","model":'+userBlob+'}'
inviteBlob = '{"kind":"INVITE","model":{"src_user":'+userBlob+',"dst_user":'+userBlob+'}}'
createBlob = '{"kind":"CREATE","model":'+userBlob+'}'
leaveBlob = '{"kind":"LEAVE","model":{"src_user":'+userBlob+',"room":'+roomBlob+'}}'
msgBlob = '{"kind":"MESSAGE","model":{"src_user":'+userBlob+',"room":'+roomBlob+', "msg":"text"}}'
usersBlob = '{"kind":"USERS","model":['+userBlob+']}'
```


















