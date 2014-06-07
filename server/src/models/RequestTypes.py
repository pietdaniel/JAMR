import colander
from User import User, Users
from Room import Room

class AddUser(colander.MappingSchema):
  kind = colander.SchemaNode(colander.String(), validator=colander.OneOf(['ADD_USER']))
  model = User()

class InviteModel(colander.MappingSchema):
  src_user = User()
  dst_user = User()

class Invite(colander.MappingSchema):
  kind = colander.SchemaNode(colander.String(), validator=colander.OneOf(['INVITE']))
  model = InviteModel()

class Create(colander.MappingSchema):
  kind = colander.SchemaNode(colander.String(), validator=colander.OneOf(['CREATE']))
  model = User()

class LeaveModel(colander.MappingSchema):
  src_user = User()
  room = Room()

class Leave(colander.MappingSchema):
  kind = colander.SchemaNode(colander.String(), validator=colander.OneOf(['LEAVE']))
  model = LeaveModel()

class MessageModel(colander.MappingSchema):
  src_user = User()
  room = Room()
  msg = colander.SchemaNode(colander.String())

class Message(colander.MappingSchema):
  kind = colander.SchemaNode(colander.String(), validator=colander.OneOf(['MESSAGE']))
  model = MessageModel()

class UserList(colander.MappingSchema):
  kind = colander.SchemaNode(colander.String(), validator=colander.OneOf(['USERS']))
  model = Users()