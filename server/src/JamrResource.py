import cherrypy
from ws4py.server.cherrypyserver import WebSocketPlugin, WebSocketTool
from ws4py.websocket import WebSocket
from JamrService import JamrService
import json

cherrypy.config.update({'server.socket_port': 9000})
WebSocketPlugin(cherrypy.engine).subscribe()
cherrypy.tools.websocket = WebSocketTool()

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
 
    def opened(self):
      self.service.putWS(self.peer_address, self)
      return self.service.getAllUsers()

    def received_message(self, message):
      print "Peer " + str(self.peer_address) + " send message: " + str(message)
      self.service.dispatch(message.data, self.peer_address)
  
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
  