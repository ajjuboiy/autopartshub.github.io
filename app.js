function talk() {
    var know = {
        "Hi": "Hello, How can I help you?",
        "Tell me something about you":"We offer you a dependable and practical online platform created to meet all of your automobile spare parts requirements.",
        "What products do you have":"We have a wide range of products from wheels and tyres to engine oils and gear box.You can visit our products section to know more.",
        "How are you": "Good :)",
    
    
        "ok": "Thank You So Much ",
        "Bye": "Okay! Will meet soon.."
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    } else {
        document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
}