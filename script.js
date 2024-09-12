
const textArea = document.getElementById('text');
const inputBox = document.getElementById('inputBox');
const submitBtn = document.getElementById('submitBtn');
    
function printMessage(message) {
    textArea.value += message + '\n';
    textArea.scrollTop = textArea.scrollHeight;
}

const MAX_DAYS = 5;
const MAX_HOURS_PER_DAY = 8;
const PAY_RATE = 26;

class Main {
    constructor() {

        printMessage("Enter number of daily hours worked.");
        submitBtn.addEventListener('click', this.onSubmit.bind(this));
    }

    clearDisplay() {
        textArea.value = '';
    }

    clearInput() {
        inputBox.value = '';
    }

    printMessage(message) {
    printMessage(message);
    }

    onSubmit() {
        const daily_hours = inputBox.value;
        if (!/^\d+$/.test(daily_hours)) {
          this.clearDisplay();
          printMessage("Please only enter valid decimal numbers!");
          this.clearInput();
        } else if (daily_hours >= MAX_HOURS_PER_DAY + 1 || daily_hours <= (MAX_HOURS_PER_DAY - MAX_HOURS_PER_DAY)) {
          this.clearDisplay();
          printMessage("Hours worked must be between 1-8 hours.");
          this.clearInput();
        } else {
            let daily_pay= daily_hours * PAY_RATE;
            let gross = daily_pay * MAX_DAYS;
            this.clearDisplay();
            this.clearInput();
            this.printMessage("Number of hours worked daily: " + daily_hours);
            this.printMessage("Number of days worked: " + MAX_DAYS);
            this.printMessage("Hourly Wage:  $" + PAY_RATE);
            this.printMessage("Gross Pay: $" + gross);
        }
      }
}

new Main();