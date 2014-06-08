from JamrDao import JamrDao

class JamrService(object):
  def __init__(self):
    self.dao = JamrDao()

  def dispatch(self, message, peer_address):
    print 'dispatch ' + str(message) + ' ' + str(peer_address)
    self.getWS(peer_address).send(str(peer_address), False)

  def putWS(self, peer_address, ws):
    self.dao.insertWebsocket(peer_address, ws)

  def getWS(self, peer_address):
    return self.dao.getWebsocket(peer_address)

  def putWSKey(self, uuid, wskey):
    self.dao.associateKey(uuid,wskey)

  def getWSKey(self, uuid):
    return self.dao.getKey(uuid)


