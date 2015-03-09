# import datetime
# from flask import url_for
# from app import db


# class Hire(db.Document):

#     name = db.StringField(required=True)
#     telephone = db.StringField(required=True)
#     company = db.StringField(required=True)
#     numberOfEmployee = db.IntField(required=True)
#     numberOfDeveloper = db.IntField(required=True)
#     technicalNeeds = db.StringField(required=True)
#     hearAbout = db.StringField(required=True)
#     title = db.StringField(max_length=255, required=True)
#     selectedCountry = db.StringField(required=True)
#     city = db.StringField(required=True)
#     numberOfNewDeveloper = db.IntField(required=True)
#     comments = db.StringField(required=True)
#     email = db.EmailField(required=True)
#     created = db.DateTimeField(default=datetime.datetime.now, required=True)

#     def __unicode__(self):
#         return self.title

#     meta = {
#         'allow_inheritance': True,
#         'indexes': ['-created'],
#         'ordering': ['-created']
#     }
