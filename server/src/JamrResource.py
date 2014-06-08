import cherrypy
from ws4py.server.cherrypyserver import WebSocketPlugin, WebSocketTool
from ws4py.websocket import EchoWebSocket, WebSocket
from ws4py.manager import WebSocketManager


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
  def __init__(self):
    self.init_wsm()

  def init_wsm(self):
    self.manager = WebSocketManager()
    self.manager.start()

  def opened(self):
    self.manager.add(self)
    print "Succesfully opened connection"

  def received_message(self, message):
    print 'Server echoing: ' + message.data
    print self.peer_address
    self.send(message.data, message.is_binary)

if __name__ == '__main__':
  cherrypy.quickstart(Root(), '/', config={'/ws': {'tools.websocket.on': True, 'tools.websocket.handler_cls': Server}})