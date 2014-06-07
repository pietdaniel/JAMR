import pickle

class DataSource(object):
  def __init__(self):
    self.storage = dict()
    print 'Started datasource'

  def put(self,id,obj):
    self.storage[id] = obj

  def get(self,id):
    if id in self.storage:
      return self.storage[id]

  def save(self):
    with open("database.pickle", "wb") as f:
      pickle.dump(self.storage, f)