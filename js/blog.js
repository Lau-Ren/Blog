$(function() {
 
    Parse.$ = jQuery;
 
		Parse.initialize("Bd6xe9ekKdPqdvzT59e7bWmP1lRBXOuBgcSSc1GS", "oilauRuVCfs4OBt3xpc8bHZ1CR3nDU7Kkyi51ODP");
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});


