
// Budget Controller
var budgeController = (function() {
    
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }
    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    
    var data = {
        items : {
            inc : [],
            exp : [],
        },
        total : {
            inc : 0,
            exp : 0
        },
        budget : 0,
        percentage : -1
    }

    var calculateTotal = function(type) {
        var sum = 0;

        data.items[type].forEach(function(curr) {
            sum += curr.value;
        });

        data.total[type] = sum; 
    }

    return {
        additem : function(type, des, val) {
            var newItem, ID;

            // Create new ID
            if (data.items[type].length > 0) {
                ID = data.items[type][data.items[type].length - 1].id + 1;
            }
            else {
                ID = 0;
            }

            // Create new item
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            }
            else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // Push the element
            data.items[type].push(newItem);

            // Add to the total
            data.total[type] += val;

            //Return item
            return newItem;
        },

        calculateBudget : function () {
            
            // Calculae total income and expenses
            calculateTotal('inc');
            calculateTotal('exp');

            // Calculate the budget : income - expenses
            data.budget = data.total.inc - data.total.exp;

            // Calculate the percentage of income that we spent
            if (data.total.inc > 0) {
                data.percentage = Math.round(data.total.exp / data.total.inc * 100);
            }
        },

        getBudget : function  () {
            return {
                budget : data.budget,
                totalInc : data.total.inc,
                totalExp : data.total.exp.value,
                percentage : data.percentage
            };
        }
    }

})();


// UI Controller
var UIController = (function() {
    
    var DOMstrings = {
        addType : '.add__type',
        addDescription : '.add__description',
        addValue : '.add__value',
        addBtn : '.add__btn',
        incomeList : '.income__list',
        expensesList : '.expenses__list',
        budgetLabel : '.budget__value',
        incomeLabel : '.budget__income--value',
        expensesLabel : '.budget__expenses--value',
        percentageLabel : '.budget__expenses--percentage'
    }

    return {
        getInput : function() {
            return {
                type : document.querySelector(DOMstrings.addType).value,      //inc or exp
                description : document.querySelector(DOMstrings.addDescription).value,
                value : parseFloat(document.querySelector(DOMstrings.addValue).value)
            };
        },
        addListItem : function(obj, type) {

            var html, newHtml, element;

            // Creata HTML String with placeholder
            if (type === 'inc') {
                element = DOMstrings.incomeList;
                html = 
                '<div class="item clearfix" id="income-%id%">' + 
                    '<div class="item__description">%description%</div>' + 
                    '<div class="right clearfix">' + 
                        '<div class="item__value">%value%</div>' + 
                        '<div class="item__delete">' + 
                            '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>' + 
                        '</div>' + 
                    '</div>' + 
                '</div>';
            } else if (type === 'exp') {
                element = '.expenses__list';
                html = 
                '<div class="item clearfix" id="expense-%id%">' +
                    '<div class="item__description">%description%</div>' +
                    '<div class="right clearfix">' +
                        '<div class="item__value">%value%</div>' +
                        '<div class="item__percentage">21%</div>' + 
                        '<div class="item__delete">' +
                            '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>' +
                        '</div>' +
                    '</div>' +
                '</div>';
            }

            // Replace placeholder with data
            newHtml = html.replace("%id%", obj.id);
            newHtml = newHtml.replace("%description%", obj.description);
            newHtml = newHtml.replace("%value%", obj.value);

            // Insert HTML into page
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        clearFields : function() {
            var fields, fieldsArray;
            fields = document.querySelectorAll(DOMstrings.addDescription + ',' + DOMstrings.addValue);
            fieldsArray = Array.prototype.slice.call(fields);
            fieldsArray.forEach( function (current, index, array) {
                current.value = "";
            });
        },
        displayBudget : function() {

        }
    };

})();


//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    
    var setupEventListeners = function() {

        document.querySelector(UICtrl.getDOM(addBtn)).addEventListener('click', ctrlAdditem);

        document.addEventListener('keypress', function (event) {

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAdditem();
            }
        });
    };

    var updateBudget = function () {
        
        var budget;
        
        // 1. Calculate the budget
        budgetCtrl.calculateBudget();

        // 2. Return the budget
        budget = budgetCtrl.getBudget();


        // 3. Update the budget on the UI
        UICtrl.displayBudget(budget);
    }

    var ctrlAdditem = function() {
        
        var input, newItem;
        // 1. Get input data
        input = UICtrl.getInput();
        
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            // 2. Add item to budget controller
            newItem = budgetCtrl.additem(input.type, input.description, input.value);
        
            // 3. Add the  item to the UI
            UICtrl.addListItem(newItem, input.type);
        
            // 4. CLear the fields
            UICtrl.clearFields();
    
            // 5. Calculate & update budget
            updateBudget();
        }    
    };

    return {
        init : function() {
            setupEventListeners();
        }
    };

})(budgeController, UIController);

controller.init();

