(function() {

  var valueIn = document.getElementById('value-in'),
      valueOut = document.getElementById('value-out'),
      form = document.querySelector('form');

  function valueChanged(newValue) {
    valueOut.innerText = newValue;
  }

  form.addEventListener('submit', function(evt){

    var value = valueIn.value;
    evt.preventDefault();

    chrome.storage.sync.set({
      notes: value,
      timestamp: Date.now()
    }, function() {
      console.log("Value set:" + value);
    });
  });

  chrome.storage.onChanged.addListener(function(changes, namespace){
    if(changes.notes) {
      valueChanged(changes.notes.newValue);
    }
  });

  chrome.storage.sync.get("notes", function(result){
    valueChanged(result.notes);
  });

})();

if notes.changes
var counter = 1
      valueChanged(changes.notes#{counter}.newValue);
