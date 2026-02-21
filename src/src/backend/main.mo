import Map "mo:core/Map";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";

actor {
  type ProductId = Nat;

  type Product = {
    id : ProductId;
    name : Text;
    description : Text;
    category : Text;
    price : Float;
    inStock : Bool;
    imageUrl : Text;
  };

  let products = Map.empty<ProductId, Product>();
  var nextId = 0;

  public shared ({ caller }) func addProduct(name : Text, description : Text, category : Text, price : Float, inStock : Bool, imageUrl : Text) : async ProductId {
    let id = nextId;
    let product : Product = {
      id;
      name;
      description;
      category;
      price;
      inStock;
      imageUrl;
    };
    products.add(id, product);
    nextId += 1;
    id;
  };

  public query ({ caller }) func getAllProducts() : async [Product] {
    products.values().toArray();
  };

  public query ({ caller }) func getProductById(id : ProductId) : async Product {
    switch (products.get(id)) {
      case (null) { Runtime.trap("Product not found") };
      case (?product) { product };
    };
  };

  public query ({ caller }) func getProductsByCategory(category : Text) : async [Product] {
    products.values().toArray().filter(func(product) { Text.equal(product.category, category) });
  };

  public shared ({ caller }) func updateProduct(id : ProductId, name : Text, description : Text, price : Float, inStock : Bool) : async () {
    switch (products.get(id)) {
      case (null) { Runtime.trap("Product not found") };
      case (?product) {
        let updatedProduct : Product = {
          product with
          name;
          description;
          price;
          inStock;
        };
        products.add(id, updatedProduct);
      };
    };
  };

  public shared ({ caller }) func deleteProduct(id : ProductId) : async () {
    if (not products.containsKey(id)) {
      Runtime.trap("Product not found");
    };
    products.remove(id);
  };

  public query ({ caller }) func getAllCategories() : async [Text] {
    products.values().toArray().map(func(product) { product.category });
  };
};
