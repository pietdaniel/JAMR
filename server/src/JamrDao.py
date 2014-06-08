from models.User import User 
from models.Room import Room 
from DataSource import DataSource

class JamrDao(object):
  def __init__(self):
    self.ds = DataSource()
    self.keyStore = {}

  def associateKey(self, uuid, wskey):
    self.keyStore[uuid] = wskey

  def getKey(self,uuid):
    return self.keyStore[uuid]

  def insertWebsocket(self, peer_address, ws):
    self.ds.put(peer_address, ws)

  def getWebsocket(self,peer_address):
    return self.ds.get(peer_address)

  def insertUser(self, user):
    self.ds.put(user['uid'], user)

  def getUser(self, uuid):
    '''
      Returns null on not found
    '''
    return self.ds.get(uuid)

  def insertRoom(self, room):
    self.ds.put(room['uid'], room)

  def getRoom(self, uuid):
    '''
      Returns null on not found
    '''
    return self.ds.get(uuid)

