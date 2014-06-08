from JamrService import JamrService
import json
import unittest

PEER_ADDR = "1234"
WS = "5678"
UID1 = "abcd"
UID2 = "efgh"
UID3 = "fdsa"

def getUser(uid):
  return { "kind":"ADD_USER",
    "model": 
    {
      "pos":{"lon":"1.0","lat":"1.1"}, 
      "inst":"guitar", 
      "genr":"rock", 
      "uid":uid
    }
  }


ADD_USER_MESS = json.dumps(getUser(UID1))
ADD_USER_MESS_2 = json.dumps(getUser(UID2))


CREATE_MESS = json.dumps(
  { "kind":"CREATE",
    "model":
    { 
      "users": 
      [
        {
          "pos":{"lon":"1.0","lat":"1.1"}, 
          "inst":"guitar", 
          "genr":"rock", 
          "uid":UID1
        },
        {
          "pos":{"lon":"1.0","lat":"1.1"}, 
          "inst":"drum", 
          "genr":"rock", 
          "uid":UID2
        },
      ],

      "uid":UID3
    }
  })

class JamrServiceTest(unittest.TestCase):

  def setUp(self):
    self.jamrService = JamrService()

  def testPutWS(self):
    self.jamrService.putWS(PEER_ADDR, WS)
    self.assertEqual(self.jamrService.getWS(PEER_ADDR),WS)

  def testDispatchOnAddUSer(self):
    self.jamrService.dispatch(ADD_USER_MESS, PEER_ADDR)
    self.assertEqual(self.jamrService.getUser(UID1)['genr'], "rock")
    self.assertEqual(self.jamrService.getUser(UID1)['inst'], "guitar")


  def testDispatchOnCreateRoom(self):
    self.jamrService.dispatch(CREATE_MESS, PEER_ADDR)
    self.assertEqual(self.jamrService.getRoom(UID3)['uid'], UID3)    

  def testGetAllUsers(self):
    self.jamrService.dispatch(ADD_USER_MESS, PEER_ADDR)
    self.jamrService.dispatch(ADD_USER_MESS_2, PEER_ADDR)
    self.assertEqual(len(self.jamrService.getAllUsers()), 2)    

if __name__ == "__main__":
    unittest.main()


