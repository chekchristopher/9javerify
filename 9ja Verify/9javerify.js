let emptycount = 0;

        function showQuestion2() {
            event.preventDefault();

            let fullname = document.getElementById('fullname').value;

            if(fullname !=='') {
            document.getElementById('question1').style.display = 'none' ;
            document.getElementById('question2').style.display = 'block';

            emptycount = 0;
        
            } else {
                emptycount++;
            }

            if (emptycount === 1) {
                document.getElementById('eyepain').style.display = 'block';
            } else if (emptycount === 2) {
                document.getElementById('eyepain').style.display = 'none';
                document.getElementById('strongproblem').style.display = 'block';
            } else if (emptycount === 3) {
                document.getElementById('smoker').style.display = 'block';
                document.getElementById('strongproblem').style.display = 'none';
            } else if (emptycount === 4) {
                document.getElementById('fool').style.display = 'block';
                document.getElementById('question1').style.display = 'none';
                document.getElementById('smoker').style.display = 'none';
            } else {
                document.getElementById('eyepain').style.display = 'none';
                document.getElementById('smoker').style.display = 'none';
                document.getElementById('strongproblem').style.display = 'none';
            }
        }

        function showQuestion3() {
            event.preventDefault();

            let age = document.getElementById('age').value;

            if(age !=='') {
                document.getElementById('question2').style.display = 'none';
                document.getElementById('question3').style.display = 'block';

                emptycount = 0;
            } else {
                emptycount++;
            }

            if (emptycount === 1) {
                document.getElementById('eyepain').style.display = 'block';
            } else if (emptycount === 2) {
                document.getElementById('eyepain').style.display = 'none';
                document.getElementById('strongproblem').style.display = 'block';
            } else if (emptycount === 3) {
                document.getElementById('smoker').style.display = 'block';
                document.getElementById('strongproblem').style.display = 'none';
            } else if (emptycount === 4) {
                document.getElementById('fool').style.display = 'block';
                document.getElementById('question2').style.display = 'none';
                document.getElementById('smoker').style.display = 'none';
            } else {
                document.getElementById('eyepain').style.display = 'none';
                document.getElementById('smoker').style.display = 'none';
                document.getElementById('strongproblem').style.display = 'none';
            }
        }
        function showQuestion4() {
            event.preventDefault();

            let maritalstatus = document.getElementById('maritalstatus').value.trim().toLowerCase();
            const allowedMaritalStatus = ['single', 'married'];

            if(allowedMaritalStatus.includes(maritalstatus)) {
                document.getElementById('question3').style.display = 'none';
                document.getElementById('question4').style.display = 'block';

                emptycount = 0;
            } else {
                document.getElementById('marriedornot').style.display = 'block';
                document.getElementById('eyepain').style.display = 'none';
                document.getElementById('smoker').style.display = 'none';
                document.getElementById('strongproblem').style.display = 'none';
            }

            if (maritalstatus =='') {
                emptycount++;
            }

            if (emptycount === 1) {
                document.getElementById('marriedornot').style.display = 'block';
            } else if (emptycount === 2) {
                document.getElementById('marriedornot').style.display = 'none';
                document.getElementById('eyepain').style.display = 'none';
                document.getElementById('strongproblem').style.display = 'block';
            } else if (emptycount === 3) {
                document.getElementById('marriedornot').style.display = 'none';
                document.getElementById('smoker').style.display = 'block';
                document.getElementById('strongproblem').style.display = 'none';
            } else if (emptycount === 4) {
                document.getElementById('marriedornot').style.display = 'none';
                document.getElementById('fool').style.display = 'block';
                document.getElementById('question3').style.display = 'none';
                document.getElementById('smoker').style.display = 'none';
            } else {
                document.getElementById('marriedornot').style.display = 'none';
                document.getElementById('eyepain').style.display = 'none';
                document.getElementById('smoker').style.display = 'none';
                document.getElementById('strongproblem').style.display = 'none';
            }
        }
        function showQuestion5() {
            event.preventDefault();

            let employmentstatus = document.getElementById('employmentstatus').value;

            if(employmentstatus !=='') {
                document.getElementById('question4').style.display = 'none';
                document.getElementById('question5').style.display = 'block';

                emptycount = 0;
            } else {
                emptycount++;
            }

            if (emptycount === 1) {
                document.getElementById('eyepain').style.display = 'block';
            } else if (emptycount === 2) {
                document.getElementById('eyepain').style.display = 'none';
                document.getElementById('strongproblem').style.display = 'block';
            } else if (emptycount === 3) {
                document.getElementById('smoker').style.display = 'block';
                document.getElementById('strongproblem').style.display = 'none';
            } else if (emptycount === 4) {
                document.getElementById('fool').style.display = 'block';
                document.getElementById('question2').style.display = 'none';
                document.getElementById('smoker').style.display = 'none';
            } else {
                document.getElementById('eyepain').style.display = 'none';
                document.getElementById('smoker').style.display = 'none';
                document.getElementById('strongproblem').style.display = 'none';
            }
        }
        function showQuestion6() {
            event.preventDefault();

            let educationalstatus = document.getElementById('educationalstatus').value;

            if(educationalstatus !=='') {
                document.getElementById('question5').style.display = 'none';
                document.getElementById('question6').style.display = 'block';

                emptycount = 0;
            } else {
                emptycount++;
            }

            if (emptycount === 1) {
                document.getElementById('eyepain').style.display = 'block';
            } else if (emptycount === 2) {
                document.getElementById('eyepain').style.display = 'none';
                document.getElementById('strongproblem').style.display = 'block';
            } else if (emptycount === 3) {
                document.getElementById('smoker').style.display = 'block';
                document.getElementById('strongproblem').style.display = 'none';
            } else if (emptycount === 4) {
                document.getElementById('fool').style.display = 'block';
                document.getElementById('question2').style.display = 'none';
                document.getElementById('smoker').style.display = 'none';
            } else {
                document.getElementById('eyepain').style.display = 'none';
                document.getElementById('smoker').style.display = 'none';
                document.getElementById('strongproblem').style.display = 'none';
            }
        }
        function congratulations() {
            event.preventDefault();

            const urlParams = new URLSearchParams(window.location.search);
            const redirectURL = urlParams.get('redirect');

            let gender = document.getElementById('gender').value.trim().toLowerCase();
            const allowedGenders = ['male', 'female'];

            if (!allowedGenders.includes(gender)) {
                document.getElementById('gaybriel').style.display = 'block';
            } else {
                document.getElementById('gaybriel').style.display = 'none';
                document.getElementById('infoemoji').style.display = 'none';
                document.getElementById('info').style.display = 'none';
                document.getElementById('question6').style.display = 'none';
                document.getElementById('congratulations').style.display = 'block';
            }

            setTimeout(() =>{
                if (redirectURL && redirectURL.startsWith('https://')) {
                    window.location.href = redirectURL;
                } else {
                    document.getElementById('congratulations').style.display = 'none';
                    document.getElementById('howcome').style.display = 'block';
                }
            }, 2000)
        }

        function showTip() {
            event.preventDefault();

            document.getElementById('tip').style.display = 'block';
            document.getElementById('gaybriel').style.display = 'none';
            document.getElementById('infoemoji').style.display = 'none';
            document.getElementById('info').style.display = 'none';
            document.getElementById('question1').style.display = 'none';
            document.getElementById('question2').style.display = 'none';
            document.getElementById('question3').style.display = 'none';
            document.getElementById('question4').style.display = 'none';
            document.getElementById('question5').style.display = 'none';
            document.getElementById('question6').style.display = 'none';
            document.getElementById('congratulations').style.display = 'none';
            document.getElementById('eyepain').style.display = 'none';
            document.getElementById('smoker').style.display = 'none';
            document.getElementById('strongproblem').style.display = 'none';
            document.getElementById('fool').style.display = 'none';
            document.getElementById('fun').style.display = 'none';
            document.getElementById('ground').style.display = 'none';
            document.getElementById('groundpost').style.display = 'none';
            document.getElementById('goal').style.display = 'none';
            document.getElementById('ads').style.display = 'none';
        }
