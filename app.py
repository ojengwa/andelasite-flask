from flask import Flask, render_template
from flask.ext.assets import Environment, Bundle
from jsmin import jsmin


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


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/hire_developer")
def hire():
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
    ip = "::1"
    port = 5000
    app.run(ip, port)

