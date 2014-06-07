import colander
from User import User

class AddUser(colander.MappingSchema):
  kind = colander.SchemaNode(colander.String(), validator=colander.OneOf(['ADD_USER']))
  model = User()