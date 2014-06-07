import colander
from Pos import Pos

class User(colander.MappingSchema):
  inst = colander.SchemaNode(colander.String())
  genr = colander.SchemaNode(colander.String())
  uid  = colander.SchemaNode(colander.String())
  pos = Pos()

class Users(colander.SequenceSchema):
  user = user()