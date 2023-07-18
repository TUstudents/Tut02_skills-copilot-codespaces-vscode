function skillsMember() { 
    var member = {
        name: 'John Doe',
        age: 26,
        job: 'Web Developer',
        presentation: function (style, timeOfDay) {
            if (style === 'formal') {
                console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
            } else if (style === 'friendly') {
                console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
            }
        } 
    };

    var emily = {
        name: 'Emily',
        age: 35,
        job: 'Designer'
    };

    // Call method
    member.presentation('formal', 'morning');

    // Call method with call
    member.presentation.call(emily, 'friendly', 'afternoon');

    // Call method with apply
    member.presentation.apply(emily, ['friendly', 'afternoon']);

    // Bind method
    var johnFriendly = member.presentation.bind(member, 'friendly');

    johnFriendly('morning');
    johnFriendly('night');

    var emilyFormal = member.presentation.bind(emily, 'formal');

    emilyFormal('afternoon');
}   