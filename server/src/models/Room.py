import colander
from User import Users

class Room(colander.MappingSchema):
  users = Users()
  uid = colander.SchemaNode(colander.String())