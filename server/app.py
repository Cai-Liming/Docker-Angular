#Aggiungi queste parti
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

...
@app.route('/simple_json')
def simple_json():
    return jsonify('{saluto:ciao}')