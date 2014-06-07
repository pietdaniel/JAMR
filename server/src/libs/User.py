import json
from Serializable import Serializable
class User(Serializable):
  def __init__(self):
    Serializable.__init__(self)
    self.lat = 0
    self.lon = 0
    self.inst = ""
    self.genr = ""
    self.uid = ""
  def __init__(self,lat,lon,inst,genr):
    Serializable.__init__(self)
    self.lat = lat
    self.lon = lon
    self.inst = inst
    self.genr = genr
    self.uid = "1"

  def fromJson(self,blob):
    obj = json.loads(blob)
    if '__type__' in obj and obj['__type__'] == self.__class__.__name__:
        return User(obj['lat'], obj['lon'],obj['inst'],obj['genr'])
    return obj

  def toString(self):
    return str(self.lat) + " " + str(self.lon) + ' ' + str(self.inst) + ' ' + str(self.genr) + ' ' + str(self.uid)

