from flask import *

app = Flask(__name__)
app.debug = True


@app.route("/")
def index():
   # return "hello"
    return render_template("index.html")

if __name__ == "__main__":
    ip = "::1"
    port = 5000
    app.run(ip, port)
