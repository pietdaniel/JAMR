import json
from Pos import Pos
from User import User, Users
import RequestTypes

posBlob = '{"lon":"1.1","lat":"1.2"}'
userBlob = '{"pos":{"lon":"1.0","lat":"1.1"}, "inst":"guitar", "genr"}'


print blob
print json.loads(blob)
des = Pos().deserialize(json.loads(blob))
print des
q = Pos(des)
print Pos(des)


schema = User()

des = schema.deserialize(json.loads(blob2))
print blob2
print json.loads(blob2)
print des

print des['pos']['lon']

blob3 = '{"kind":"ADD_USER","model":}'



