import json
from Pos import Pos
from User import User, Users
from Room import Room
import RequestTypes

posBlob = '{"lon":"1.1","lat":"1.2"}'
userBlob = '{"pos":{"lon":"1.0","lat":"1.1"}, "inst":"guitar", "genr":"rock", "uid":"1"}'
roomBlob = '{"users":['+userBlob+'],"uid":1}'
addUserBlob = '{"kind":"ADD_USER","model":'+userBlob+'}'
inviteBlob = '{"kind":"INVITE","model":{"src_user":'+userBlob+',"dst_user":'+userBlob+'}}'
createBlob = '{"kind":"CREATE","model":'+userBlob+'}'
leaveBlob = '{"kind":"LEAVE","model":{"src_user":'+userBlob+',"room":'+roomBlob+'}}'
msgBlob = '{"kind":"MESSAGE","model":{"src_user":'+userBlob+',"room":'+roomBlob+', "msg":"text"}}'
usersBlob = '{"kind":"USERS","model":['+userBlob+']}'

def testBlob(funcType, jsonBlob):
  print jsonBlob
  des = funcType().deserialize(json.loads(jsonBlob))

testBlob(Pos,posBlob)
testBlob(User,userBlob)
testBlob(Room,roomBlob)
testBlob(RequestTypes.AddUser, addUserBlob)
testBlob(RequestTypes.Invite, inviteBlob)
testBlob(RequestTypes.Create, createBlob)
testBlob(RequestTypes.Leave, leaveBlob)
testBlob(RequestTypes.Message, msgBlob)
testBlob(RequestTypes.UserList, usersBlob)
