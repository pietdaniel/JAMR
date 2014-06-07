from User import User
from Pos import Pos
pos = Pos(1,2)
user = User(pos,3,4)
blob = user.toJson()
print blob
u2 = user.fromJson(blob)
print u2.toString()
