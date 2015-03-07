from flask import Flask, render_template, request, session, abort
from flask.ext.mongoengine import MongoEngine
from flask.ext.assets import Environment, Bundle
from jsmin import jsmin
import models

app = Flask(__name__)
app.debug = True

assets = Environment(app)

js = Bundle('angular.min.js',
            'angular-resource.js',
            'angular-cookies.js',
            'angular-animate.js',
            'angular-touch.js',
            'angular-sanitize.js',
            'angular-ui-router.min.js',
            'ui-utils.min.js',
            'ui-bootstrap-tpls.min.js',
            'jquery.min.js',
            'angular-bootstrap-affix.js',
            'bootstrap-affix.js',
            'angular-strap.min.js',
            'angular-strap.tpl.min.js',
            'angular-mailchimp.js',
            'config.js',
            'application.js',
            '*.client.module.js',
            '*.client.config.js',
            '*.client.controller.js',
            '*.client.service.js',
            '*.client.routes.js',
            '*.client.directive.js',
            filters='jsmin',
            output='gen/packed.js')


assets.register('js_all', js)


app.config["MONGODB_SETTINGS"] = {'DB': "andela_site"}
app.config["SECRET_KEY"] = "KeepThisS3cr3t"

db = MongoEngine(app)

@app.route("/")
def index():
    return render_template("index.html")



# @app.before_request
# def csrf_protect():
#     if request.method == "POST":
#         token = session.pop('_csrf_token', None)
#         if not token or token != request.form.get('_csrf_token'):
#             abort(403)

# def generate_csrf_token():
#     if '_csrf_token' not in session:
#         session['_csrf_token'] = some_random_string()
#     return session['_csrf_token']

# app.jinja_env.globals['csrf_token'] = generate_csrf_token    


from flask.ext.mongoengine.wtf import model_form
@app.route("/hire_developer", methods=['POST', 'GET'])
def hire():

    if request.method == 'POST':
        HireForm = model_form(models.Hire, exclude=['created'])
        form = HireForm()

        HireForm = model_form(models.Hire, exclude=['created'])

        form = HireForm(request.form)
        if form.validate():
            hire = form.save()
            print "saved"

    return render_template("hire.html")


@app.route("/services")
def services():
    return render_template("services.html")


@app.route("/about_us")
def about():
    return render_template("about.html")


@app.route("/meet_the_team")
def meet_the_team():
    return render_template("meet_the_team.html")


@app.route("/meet_partners")
def meet_partners():
    return render_template("meet_partners.html")


@app.route("/andela_network")
def andela_network():
    return render_template("andela_network.html")


@app.route("/whatwedo")
def what_we_do():
    return render_template("what_we_do.html")


@app.route("/fellowship")
def fellowship():
    return render_template("fellowship.html")




if __name__ == "__main__":
    ip = "localhost"
    port = 8080
    app.run(ip, port)
