from User import User
user = User(1,2,3,4)
blob = user.toJson()

print blob
u2 = user.fromJson(blob)
print u2.toString()
