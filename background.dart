import 'package:chrome/chrome_ext.dart' as chrome;

void main() {
  // Check if webNavigation API is available
  if (chrome.webNavigation.available) {

    // Setup alignTab feature
    chrome.webNavigation.onCompleted.listen((value) {
      print('onCompleted received ${value}');
    });
  }
}

