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
   # return "hello"
    return render_template("index.html")

if __name__ == "__main__":
    ip = "::1"
    port = 3000
    app.run(ip, port)
