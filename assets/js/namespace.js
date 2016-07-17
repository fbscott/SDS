// Create the root namespace and making sure we're not
// overwriting it.
var SDS = SDS || {};
 
// Create a general purpose namespace method.
// This will allow us to create namespace a bit easier.
SDS.createNS = function (namespace) {
    var nsparts = namespace.split(".");
    var parent = SDS;
 
    // We want to be able to include or exclude the root
    // namespace, so we strip it if it's in the namespace.
    if (nsparts[0] === "SDS") {
        nsparts = nsparts.slice(1);
    }
 
    // Loop through the parts and create 
    // a nested namespace if necessary.
    for (var i = 0; i < nsparts.length; i++) {
        var partname = nsparts[i];
        // Check if the current parent already has 
        // the namespace declared, if not create it.
        if (typeof parent[partname] === "undefined") {
            parent[partname] = {};
        }
        // Get a reference to the deepest element 
        // in the hierarchy so far.
        parent = parent[partname];
    }
    // The parent is now completely constructed 
    // with empty namespaces and can be used.
    return parent;
};

// Creatng a namespace example:
// // Create the namespace for products.
// SDS.createNS("SDS.MODEL.PRODUCTS");
 
// SDS.MODEL.PRODUCTS.product = function(width, height){
//     // Private variables:
//     var dimensions = {
//         width: width,
//         height: height
//     };
//     // Private methods:
//     // Creating getWidth and getHeight to prevent
//     // access by reference to dimensions.
//     var getWidth = function(){
//         return dimensions.width;
//     };
//     var getHeight = function(){
//         return dimensions.height;
//     };
//     // Public API:
//     return {
//         getWidth: getWidth,
//         getHeight: getHeight
//     };
// };
 
// // Create the namespace for the logic.
// SDS.createNS("SDS.LOGIC.BUSINESS");
 
 
// SDS.LOGIC.BUSINESS.createAndAlertProduct = function () {
//     var model = SDS.MODEL.PRODUCTS;
//     var p = new model.product(50,100);
//     alert(p.getWidth() + " " + p.getHeight());
// };
