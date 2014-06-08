from JamrDao import JamrDao
import models.RequestTypes
import json

class JamrService(object):
  def __init__(self):
    self.dao = JamrDao()

  def dispatch(self, message, peer_address):
    print 'dispatch ' + str(message) + ' ' + str(peer_address)
    jd = json.loads(message)
    if jd['kind'] == "ADD_USER":
      desr = getObj(RequestTypes.AddUser, jd)
      return doAddUser(desr, peer_address)
    elif jd['kind'] == "INVITE":
      desr = getObj(RequestTypes.Invite, jd)
      return doInvite(desr, peer_address)
    elif jd['kind'] == "CREATE":
      desr = getObj(RequestTypes.Create, jd)
      return doCreate(desr, peer_address)
    elif jd['kind'] == "LEAVE":
      desr = getObj(RequestTypes.Leave, jd)
      return doLeave(desr, peer_address)
    elif jd['kind'] == "MESSAGE":
      desr = getObj(RequestTypes.Message, jd)
      return doMessage(desr, peer_address)
    else
      print 'ERROR no message type for message: ' + str(message)
    
    # self.getWS(peer_address).send(str(peer_address), False)

  def doAddUser(self, user, peer_address):
    uuid = user['model']["uid"]
    self.putWSKey(uuid, peer_address)
    self.dao.insertUser(user)

  def doCreate(self, room, peer_address):
    self.dao.insertRoom(room)

  def doMessage(self, msgObj, peer_address):
    roomObj = msgObj['model']['room']
    roomId = roomObj['uid']
    roomData = self.dao.getRoom(roomId)
    roomUsers = roomData["users"]
    for user in roomUsers:
      self.dao.getWebsocket(wskey).send(msgObj, False)

  def doInvite(self, invite, peer_address):
    dstUser = invite['model']['dst_user']
    dstUserId = dstUser['uid']
    wskey = self.dao.getWSKey(dstUserId)
    self.dao.getWebsocket(wskey).send(invite, False)

  def doLeave(self, leave, peer_address):
    





    
  def getObj(self, funcType, jsonDict):
    return funcType().deserialize(json.loads(jsonBlob))

  def putWS(self, peer_address, ws):
    self.dao.insertWebsocket(peer_address, ws)

  def getWS(self, peer_address):
    return self.dao.getWebsocket(peer_address)

  def putWSKey(self, uuid, wskey):
    self.dao.associateKey(uuid,wskey)

  def getWSKey(self, uuid):
    return self.dao.getKey(uuid)


