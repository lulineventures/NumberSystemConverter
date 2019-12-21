        /*-------------------------card1--------------------------*/
        function dec2bin() {
            var x = document.getElementById("decibin").value;
            if ((/[^0-9]/g.test(x)) || x == "") {
                alert("You must enter an integer decimal number!");
                document.getElementById("decibin").value = "";
                document.getElementById("decibin").focus();
                return false;
            }
            x = parseInt(x);
            var bin = x.toString(2);
            var binary = bin;
            document.getElementById("card1").innerHTML = binary;
        };

        /*-------------------------card1--------------------------*/
        function bin2dec() {
            var x = document.getElementById("decibin").value;
            if ((/[^0-1]/g.test(x)) || x == "") {
                alert("You must enter binary numbers!");
                document.getElementById("decibin").value = "";
                document.getElementById("decibin").focus();
                return false;
            }
            var decimal = Number.parseInt(x, 2);
            document.getElementById("card1").innerHTML = decimal;
        };

        /*-------------------------card2--------------------------*/
        function dec2oct() {
            var x = document.getElementById("decioct").value;
            if ((/[^0-9]/g.test(x)) || x == "") {
                alert("You must enter an integer decimal number!");
                document.getElementById("decioct").value = "";
                document.getElementById("decioct").focus();
                return false;
            }
            x = parseInt(x);
            var oct = x.toString(8);
            var octal = oct;
            document.getElementById("card2").innerHTML = octal;
        };

        /*-------------------------card2--------------------------*/
        function oct2dec() {
            var x = document.getElementById("decioct").value;
            if ((/[^0-9]/g.test(x)) || x == "") {
                alert("You must enter an octal number!");
                document.getElementById("decioct").value = "";
                document.getElementById("decioct").focus();
                return false;
            }
            var decimal = Number.parseInt(x, 8);
            document.getElementById("card2").innerHTML = decimal;
        };

        /*-------------------------card3--------------------------*/
        function dec2hex() {
            var x = document.getElementById("decihex").value;
            if ((/[^0-9]/g.test(x)) || x == "") {
                alert("You must enter an integer decimal number!");
                document.getElementById("decihex").value = "";
                document.getElementById("decihex").focus();
                return false;
            }
            x = parseInt(x);
            var hex = x.toString(16).toUpperCase();
            var hexa = hex;
            document.getElementById("card3").innerHTML = hexa;
        };

        /*-------------------------card3--------------------------*/
        function hex2dec() {
            var x = document.getElementById("decihex").value;
            if ((/[^0-9,A-F]/g.test(x)) || x == "") {
                alert("You must enter a hexadecimal number!");
                document.getElementById("decihex").value = "";
                document.getElementById("decihex").focus();
                return false;
            }
            var decimal = Number.parseInt(x, 16);
            document.getElementById("card3").innerHTML = decimal;
        };

        /*-------------------------card4--------------------------*/
        function oct2bin() {
            var x = document.getElementById("octbin").value;
            if ((/[^0-9]/g.test(x)) || x == "") {
                alert("You must enter an octal number!");
                document.getElementById("octbin").value = "";
                document.getElementById("octbin").focus();
                return false;
            }

            var decimal = Number.parseInt(x, 8);
            var bin = decimal.toString(2);
            var binary = bin;

            document.getElementById("card4").innerHTML = binary;
        };

        /*-------------------------card4--------------------------*/
        function bin2oct() {
            var x = document.getElementById("octbin").value;
            if ((/[^0-1]/g.test(x)) || x == "") {
                alert("You must enter binary numbers!");
                document.getElementById("octbin").value = "";
                document.getElementById("octbin").focus();
                return false;
            }

            var decimal = Number.parseInt(x, 2);
            var oct = decimal.toString(8);
            var octal = oct;
            document.getElementById("card4").innerHTML = octal;
        };

        /*-------------------------card5--------------------------*/
        function oct2hex() {
            var x = document.getElementById("octhex").value;
            if ((/[^0-9]/g.test(x)) || x == "") {
                alert("You must enter an octal number!");
                document.getElementById("octhex").value = "";
                document.getElementById("octhex").focus();
                return false;
            }

            var decimal = Number.parseInt(x, 8);
            var hex = decimal.toString(16).toUpperCase();
            var hexa = hex;
            document.getElementById("card5").innerHTML = hexa;
        }

        /*-------------------------card5--------------------------*/
        function hex2oct() {
            var x = document.getElementById("octhex").value;
            if ((/[^0-9,A-F]/g.test(x)) || x == "") {
                alert("You must enter a hexadecimal number!");
                document.getElementById("octhex").value = "";
                document.getElementById("octhex").focus();
                return false;
            }

            var decimal = Number.parseInt(x, 16);
            var oct = decimal.toString(8);
            var octal = oct;
            document.getElementById("card5").innerHTML = octal;
        }
        /*-------------------------card6--------------------------*/
        function bin2hex() {
            var x = document.getElementById("binhex").value;
            if ((/[^0-1]/g.test(x)) || x == "") {
                alert("You must enter a binary number!");
                document.getElementById("binhex").value = "";
                document.getElementById("binhex").focus();
                return false;
            }
            var mapping = {
                "0000": "0",
                "0001": "1",
                "0010": "2",
                "0011": "3",
                "0100": "4",
                "0101": "5",
                "0110": "6",
                "0111": "7",
                "1000": "8",
                "1001": "9",
                "1010": "A",
                "1011": "B",
                "1100": "C",
                "1101": "D",
                "1110": "E",
                "1111": "F",
            };

            var i;
            var hex = "",
                remainder = "";
            var hexa = x.toString();

            for (i = hexa.length; i >= 4; i -= 4) {
                if (i - 4 < hexa.length) {
                    hex = mapping[hexa.substr(i - 4, 4)] + hex;
                }
            }

            if (i !== 0) {
                remainder = hexa.substr(0, i);
                while (remainder.length < 4) {
                    remainder = "0" + remainder;
                }
                hex = mapping[remainder] + hex;
            }
            document.getElementById("card6").innerHTML = hex;
        };

        /*-------------------------card6--------------------------*/
        function hex2bin() {
            var x = document.getElementById("binhex").value;
            if ((/[^0-9,A-F]/g.test(x)) || x == "") {
                alert("You must enter a hexadecimal number!");
                document.getElementById("binhex").value = "";
                document.getElementById("binhex").focus();
                return false;
            }
            var mapping = {
                "0": "0000",
                "1": "0001",
                "2": "0010",
                "3": "0011",
                "4": "0100",
                "5": "0101",
                "0110": "6",
                "0111": "7",
                "8": "1000",
                "9": "1001",
                "A": "1010",
                "B": "1011",
                "C": "1100",
                "D": "1101",
                "E": "1110",
                "F": "1111",
            };

            var i;
            var hexa = x.toString();
            var hexadec = "";
            for (i = 0; i < hexa.length; i++) {
                hexadec += mapping[hexa[i]];
            }
            var hex = hexadec;

            document.getElementById("card6").innerHTML = hex;
        };