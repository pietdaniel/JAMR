from User import User 
from Room import Room 
from DataSource import DataSource

class JamrDao(object):
  def __init__(self):
    self.ds = DataSource()

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

