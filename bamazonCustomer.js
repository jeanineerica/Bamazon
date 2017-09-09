var mysql = require("mysql");
var inquirer = require("inquirer");
// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "",
  database: "bamazon_DB"
});
// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
  console.log('select * from Products');
  });

  function start(){
    //prints the items for sale and their details
    connection.query('SELECT * FROM Products', function(err, res){
      if(err) throw err;

      for(var i = 0; i<res.length;i++){
        console.log("ID: " + res[i].ItemID + " || " + "Product: " + res[i].ProductName + " || " + "Department: " + res[i].DepartmentName + " || " + "Price: " + res[i].Price + " || " + "QTY: " + res[i].StockQuantity);

      }

      console.log(' ');
      inquirer.prompt([
        {
          type: "input",
          name: "id",
          message: "What is the ID of the product you would like to purchase? (Choose from 1-10)",
          validate: function(value){
            if(isNaN(value) == false && parseInt(value) <= res.length && parseInt(value) > 0){
              return true;
            } else{
              return false;
            }
          }
        },
        {
          type: "input",
          name: "qty",
          message: "How much would you like to purchase?",
          validate: function(value){
            if(isNaN(value)){
              return false;
            } else{
              return true;
            }
          }
        }
        ]).then(function(ans){
          var whatToBuy = (ans.id)-1;
          var howMuchToBuy = parseInt(ans.qty);
          var grandTotal = parseFloat(((res[whatToBuy].Price)*howMuchToBuy).toFixed(2));

          //check if quantity is sufficient
          if(res[whatToBuy].StockQuantity >= howMuchToBuy){
            //after purchase, updates quantity in Products
            connection.query("UPDATE Products SET ? WHERE ?", [
            {StockQuantity: (res[whatToBuy].StockQuantity - howMuchToBuy)},
            {ItemID: ans.id}
            ], function(err, result){
                if(err) throw err;
                console.log("Your total is $" + grandTotal.toFixed(2) + ". Your item(s) will be air dropped to you in 2-5 hours.");
            });



          } else{
            console.log("Sorry, there's not enough in stock");
          }

          reprompt();
        })
    })
    }

    //asks if they would like to purchase another item
    function reprompt(){
      inquirer.prompt([{
        type: "confirm",
        name: "reply",
        message: "Would you like to purchase another item?"
      }]).then(function(ans){
        if(ans.reply){
          start();
        } else{
          console.log("K BYEEEEEE");
        }
      });
    }
