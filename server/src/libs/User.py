class User():
  def __init__(self):
    self.__type__ = self.__class__.__name__
    self.lat = 0
    self.lon = 0
    self.inst = ""
    self.genr = ""
    self.uid = ""
  def __init__(self,lat,lon,inst,genr):
    self.__type__ = self.__class__.__name__
    self.lat = lat
    self.lon = lon
    self.inst = inst
    self.genr = genr
    self.uid = "1"


  def toJson(self):
    return json.dumps(this, default=lambda o: o.__dict__)

  def fromJson(self,json):
    dict = json.loads(json)
    if '__type__' in obj and obj['__type__'] == self.__class__.__name__:
        return User(obj['lat'], obj['lon'],obj['inst'],obj['genr'])
    return obj

