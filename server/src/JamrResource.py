import cherrypy
from ws4py.server.cherrypyserver import WebSocketPlugin, WebSocketTool
from ws4py.websocket import WebSocket
from JamrService import JamrService
import json

cherrypy.config.update({'server.socket_port': 9000})
WebSocketPlugin(cherrypy.engine).subscribe()
cherrypy.tools.websocket = WebSocketTool()

def getUser(uid, inst, lon, lat):
  return { "kind":"ADD_USER",
    "model": 
    {
      "pos":{"lon":lon,"lat":lat}, 
      "inst": inst, 
      "genr":"rock", 
      "uid":uid
    }
  }

class Root(object):
    @cherrypy.expose
    def index(self):
      return 'Please connect with a websocket'
    @cherrypy.expose
    def ws(self):
      handler = cherrypy.request.ws_handler

class Server(WebSocket):
    def __init__(self, *args, **kwargs):
      WebSocket.__init__(self,*args,**kwargs)
      self.service = JamrService()
      #self.createFakeBand()
 
    def opened(self):
      self.service.putWS(self.peer_address, self)
      return self.service.getAllUsers()

    def received_message(self, message):
      print "Peer " + str(self.peer_address) + " send message: " + str(message)
      self.service.dispatch(message.data, self.peer_address)

    def createFakeBand(self):
      self.service.addUser(getUser(1, "guitar", "42.370641", "-71.080689"), ('127.0.0.1', 1234))
      self.service.addUser(getUser(1, "guitar_base", "42.363158", "-71.079402"), ('127.0.0.1', 1235))
      self.service.addUser(getUser(1, "sax", "42.371656", "-71.080432"), ('127.0.0.1', 1236))
      self.service.addUser(getUser(1, "keyboard", "42.365822", "-71.093049"), ('127.0.0.1', 1237))


class JamrResource(object):
  def __init__(self):
    self.root = Root
    self.server = Server
    print 'initialized'

  def run(self):
    cherrypy.quickstart(self.root(), '/', config={'/ws': {'tools.websocket.on': True, 'tools.websocket.handler_cls': self.server}})

if __name__ == '__main__':
  jamrResource = JamrResource()
  jamrResource.run()
  