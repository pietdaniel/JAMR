from models.User import User 
from models.Room import Room 
from DataSource import DataSource

class JamrDao(object):
  def __init__(self):
    self.userDS = DataSource("database.pickle.user")
    self.roomDS = DataSource("database.pickle.room")
    self.uidToWsKeyDic = {}
    self.uidToWs = {}

  def associateKey(self, uuid, wskey):
    self.uidToWsKeyDic[uuid] = wskey

  def getKey(self,uuid):
    return self.uidToWsKeyDic[uuid]

  def insertWebsocket(self, peer_address, ws):
    self.uidToWs[peer_address] =  ws

  def getWebsocket(self,peer_address):
    return self.uidToWs[peer_address]

  def insertUser(self, user):
    self.userDS.put(user['uid'], user)

  def getUser(self, uuid):
    '''
      Returns null on not found
    '''
    return self.userDS.get(uuid)

  def insertRoom(self, room):
    self.roomDS.put(room['uid'], room)

  def getRoom(self, uuid):
    '''
      Returns null on not found
    '''
    return self.roomDS.get(uuid)


  def getAllUsers(self):
    return self.userDS.getAll()

  def getAllWebSockets(self):
    return self.uidToWs.values()  