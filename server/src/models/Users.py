import colander
from User import User
class Users(colander.SequenceSchema):
    user = user()