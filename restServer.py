from flask import *
import requests
import json

app = Flask(__name__)


@app.route("/", methods=['GET','POST'])
def index():
    response="GET"
    if request.method == 'POST':
        response=str(request)
        print json.loads(request.args)

    return json.dumps({"response":response})



if __name__ == "__main__":
    app.run(debug=True )



