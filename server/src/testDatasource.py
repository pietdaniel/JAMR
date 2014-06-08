from DataSource import DataSource

ds = DataSource()
ds.put("1","1")
print ds.get("1")
print ds.get("2")
ds.save()
