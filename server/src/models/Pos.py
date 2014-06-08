import colander

class Pos(colander.MappingSchema):
  lon = colander.SchemaNode(colander.Float())
  lat = colander.SchemaNode(colander.Float())