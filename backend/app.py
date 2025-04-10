from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
# Enable CORS for all routes
CORS(app)

# Setup Flask-Mail for sending emails
app.config['MAIL_SERVER'] = os.getenv('MAIL_SERVER', 'smtp.gmail.com')
app.config['MAIL_PORT'] = int(os.getenv('MAIL_PORT', 587))
app.config['MAIL_USE_TLS'] = os.getenv('MAIL_USE_TLS', 'True') == 'True'
app.config['MAIL_USE_SSL'] = os.getenv('MAIL_USE_SSL', 'False') == 'True'
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_DEFAULT_SENDER')
app.config['RECIPIENT_EMAIL'] = os.getenv('RECIPIENT_EMAIL', app.config['MAIL_USERNAME'])

mail = Mail(app)

@app.route("/contact", methods=["POST"])
def contact():
    # Extract data from the request
    data = request.json
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")
    number = data.get("number")
    frontend_url = data.get("frontend_url")

    # Basic validation
    if not name or not email or not message:
        return jsonify({"error": "Please fill in all fields"}), 400

    if not validate_email(email):
        return jsonify({"error": "Invalid email address"}), 400

    # Send the message as an email
    try:
        email_body = f"Name: {name}\nEmail: {email}\nPhone: {number}\n\nMessage:\n{message}"
        if frontend_url:
            email_body += f"\n\nSent from: {frontend_url}"
        msg = Message(f"New Contact Form Message from {name}", recipients=[app.config['RECIPIENT_EMAIL']])
        msg.body = email_body
        mail.send(msg)
        return jsonify({"success": "Message sent successfully!"}), 200
    except Exception as e:
        print(f"Error sending email: {e}")
        return jsonify({"error": "Failed to send message"}), 500


def validate_email(email):
    import re
    # Basic email validation regex
    email_regex = r'^[\w\.-]+@[\w\.-]+\.\w{2,4}$'
    return re.match(email_regex, email) is not None


if __name__ == "__main__":
    app.run(debug=True)
