import json
from Pos import Pos
from User import User
blob = '{"lon":"1.1","lat":"1.2"}'
print blob
schema = Pos()
print json.loads(blob)
des = schema.deserialize(json.loads(blob))
print des

blob2 = '{"pos":{"lon":"1.0","lat":"1.1"}, "inst":"guitar"}'
schema = User()
print json.loads(blob2)
des = schema.deserialize(json.loads(blob2))
