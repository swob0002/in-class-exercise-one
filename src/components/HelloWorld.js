export default {
    name: 'HelloWorld',
    computed: {
        inlineValidationClass() {
            return this.inputValue.length > 50;
        },
        inputValidationClass() {
            //if (this.inputValue.length > 50) {
            //    return 'red.border';
            //} else {
            //    return;
            //}
            return this.inputValue.length > 50 ? 'red-border' : '';
        },
        isButtonDisabled() {
            return this.inputValue.length > 50 || this.inputValue.length === 0;
        }
    },

    data() {
        return {
            inputValue: ''
        }
    }
}



/* if (someCondition === true) {
    //doSomething
} */