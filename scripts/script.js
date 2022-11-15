let carNames = [
    ["Honda", ["Car", "Truck", "SUV", "Van"]],
    ["Toyota", ["Car", "Truck", "Suv", "Van"]],
    ["Chevrolet", ["Car", "Truck", "SUV"]],
    ["Ford", ["Car", "Truck", "SUV"]],
    ["Mazda", ["Car", "SUV"]],
    ["Nissan", ["Car", "Truck", "SUV"]],
    ["Jeep", ["SUV", "Truck"]],
    ["Hyundai", ["Car", "SUV"]],
    ["Kia", ["Car", "SUV"]],
];

//when user selects brand of vehicle...load in types of vehicles from array
$("#carKind").on("change", function(e) {
    //enables the vehicle dropdown
    $("#carName").prop("disabled", false);

    let inputVal = this.value;

    // console.log(inputVal);

    //loop though array of vehicle types
    $.each(carNames, function(key, value) {
        //match car brand to user selected
        if (inputVal === value[0]) {
            // console.log(value[0] + key + value);
            $.each(value, function(nestKey, nestValue) {
                // console.log(nestKey);

                switch (nestKey) {
                    case 0:
                        $("label[for=carName]").text(nestValue);
                        $("#carName").empty();
                        $("#carName").append(
                            $("<option>").text(`select a ${nestValue} `)
                        );
                        break;
                    case 1:
                        $.each(nestValue, function(nameKey, nameValue) {
                            console.log(nameKey, nameValue);

                            $("#carName").append(
                                $("<option>").val(nameValue).text(nameValue)
                            );
                        });
                        break;
                }
            });
        }
    });
});
