from JamrService import JamrService
import json
import unittest

PEER_ADDR = "1234"
WS = "5678"
UID = "abcd"

ADD_USER_MESS = json.dumps(
  { "kind":"ADD_USER",
    "model": 
    {
      "pos":{"lon":"1.0","lat":"1.1"}, 
      "inst":"guitar", 
      "genr":"rock", 
      "uid":UID
    }
  })

CREATE_MESS = json.dumps(
  { "kind":"CREATE",
    "model": 
    {
      "pos":{"lon":"1.0","lat":"1.1"}, 
      "inst":"guitar", 
      "genr":"rock", 
      "uid":UID
    }
  })

class JamrServiceTest(unittest.TestCase):

  def setUp(self):
    self.jamrService = JamrService()

  def testPutWS(self):
    self.jamrService.putWS(PEER_ADDR, WS)
    self.assertTrue(self.jamrService.getWS(PEER_ADDR),WS)

  def testDispatchOnAddUSer(self):
    self.jamrService.dispatch(ADD_USER_MESS, PEER_ADDR)
    self.assertTrue(self.jamrService.getUser(UID)['genr'], "rock")

  def testDispatchOnCreateRoom(self):
    self.jamrService.dispatch(ADD_USER_MESS, PEER_ADDR)
    self.assertTrue(self.jamrService.getUser(UID)['genr'], "rock")    


if __name__ == "__main__":
    unittest.main()